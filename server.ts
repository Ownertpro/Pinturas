import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("ekopia.db");
const JWT_SECRET = "ekopia-secret-key-2024";

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'client',
    name TEXT,
    phone TEXT,
    address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Migration: Ensure role column exists (for existing databases)
try {
  db.exec("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'client'");
} catch (e) {
  // Column already exists
}

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    title TEXT,
    description TEXT,
    status TEXT DEFAULT 'planificación',
    progress INTEGER DEFAULT 0,
    start_date DATE,
    end_date DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(client_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER,
    url TEXT,
    title TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(project_id) REFERENCES projects(id)
  );

  CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    project_id INTEGER,
    title TEXT,
    amount REAL,
    status TEXT DEFAULT 'pendiente',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(client_id) REFERENCES users(id),
    FOREIGN KEY(project_id) REFERENCES projects(id)
  );
`);

// Seed Admin User
const adminEmail = "admin@ekopia.space";
const adminPassword = "Team-Nogardd123";
const existingAdmin = db.prepare("SELECT * FROM users WHERE email = ?").get(adminEmail) as any;

if (!existingAdmin) {
  const hashedPassword = bcrypt.hashSync(adminPassword, 10);
  db.prepare("INSERT INTO users (email, password, role, name) VALUES (?, ?, ?, ?)").run(adminEmail, hashedPassword, 'admin', 'Administrador Ekopia');
} else if (existingAdmin.role !== 'admin') {
  // Force admin role if it was created as client
  db.prepare("UPDATE users SET role = 'admin' WHERE email = ?").run(adminEmail);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());

  // Auth Middleware
  const authenticate = (req: any, res: any, next: any) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ error: "Invalid token" });
    }
  };

  const isAdmin = (req: any, res: any, next: any) => {
    if (req.user.role !== 'admin') return res.status(403).json({ error: "Forbidden" });
    next();
  };

  // API Routes
  app.post("/api/auth/register", (req, res) => {
    const { email, password, name, phone, address } = req.body;
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      db.prepare("INSERT INTO users (email, password, name, phone, address, role) VALUES (?, ?, ?, ?, ?, ?)").run(email, hashedPassword, name, phone, address, 'client');
      res.json({ success: true });
    } catch (e: any) {
      res.status(400).json({ error: "El email ya está registrado" });
    }
  });

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    const user: any = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: "24h" });
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" });
    res.json({ success: true, user: { email: user.email, role: user.role, name: user.name } });
  });

  app.post("/api/auth/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ success: true });
  });

  app.get("/api/auth/me", authenticate, (req: any, res) => {
    res.json({ user: req.user });
  });

  // Gallery API
  app.get("/api/gallery", (req, res) => {
    const images = db.prepare("SELECT * FROM gallery ORDER BY created_at DESC").all();
    res.json(images);
  });

  app.post("/api/gallery", authenticate, isAdmin, (req, res) => {
    const { url, title, project_id } = req.body;
    db.prepare("INSERT INTO gallery (url, title, project_id) VALUES (?, ?, ?)").run(url, title, project_id);
    res.json({ success: true });
  });

  app.delete("/api/gallery/:id", authenticate, isAdmin, (req, res) => {
    db.prepare("DELETE FROM gallery WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // Clients API (Admin only)
  app.get("/api/admin/clients", authenticate, isAdmin, (req, res) => {
    const clients = db.prepare("SELECT id, email, name, phone, address, created_at FROM users WHERE role = 'client' ORDER BY created_at DESC").all();
    res.json(clients);
  });

  // Projects API
  app.get("/api/projects", authenticate, (req: any, res) => {
    let projects;
    if (req.user.role === 'admin') {
      projects = db.prepare("SELECT p.*, u.name as client_name FROM projects p JOIN users u ON p.client_id = u.id ORDER BY p.created_at DESC").all();
    } else {
      projects = db.prepare("SELECT * FROM projects WHERE client_id = ? ORDER BY created_at DESC").all(req.user.id);
    }
    res.json(projects);
  });

  app.post("/api/projects", authenticate, isAdmin, (req, res) => {
    const { client_id, title, description, status, progress, start_date, end_date } = req.body;
    db.prepare("INSERT INTO projects (client_id, title, description, status, progress, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?)").run(client_id, title, description, status, progress, start_date, end_date);
    res.json({ success: true });
  });

  app.patch("/api/projects/:id", authenticate, isAdmin, (req, res) => {
    const { status, progress } = req.body;
    db.prepare("UPDATE projects SET status = ?, progress = ? WHERE id = ?").run(status, progress, req.params.id);
    res.json({ success: true });
  });

  // Quotes API
  app.get("/api/quotes", authenticate, (req: any, res) => {
    let quotes;
    if (req.user.role === 'admin') {
      quotes = db.prepare(`
        SELECT q.*, u.name as client_name, p.title as project_title
        FROM quotes q 
        JOIN users u ON q.client_id = u.id 
        LEFT JOIN projects p ON q.project_id = p.id
        ORDER BY q.created_at DESC
      `).all();
    } else {
      quotes = db.prepare("SELECT * FROM quotes WHERE client_id = ? ORDER BY created_at DESC").all(req.user.id);
    }
    res.json(quotes);
  });

  app.post("/api/quotes", authenticate, isAdmin, (req, res) => {
    const { client_id, project_id, title, amount, status } = req.body;
    db.prepare("INSERT INTO quotes (client_id, project_id, title, amount, status) VALUES (?, ?, ?, ?, ?)").run(client_id, project_id, title, amount, status);
    res.json({ success: true });
  });

  app.patch("/api/quotes/:id", authenticate, isAdmin, (req, res) => {
    const { status } = req.body;
    db.prepare("UPDATE quotes SET status = ? WHERE id = ?").run(status, req.params.id);
    res.json({ success: true });
  });

  // Stats API (Admin only)
  app.get("/api/admin/stats", authenticate, isAdmin, (req, res) => {
    const totalEarnings = db.prepare("SELECT SUM(amount) as total FROM quotes WHERE status = 'pagado'").get() as any;
    const pendingQuotes = db.prepare("SELECT COUNT(*) as count FROM quotes WHERE status = 'pendiente'").get() as any;
    const totalClients = db.prepare("SELECT COUNT(*) as count FROM users WHERE role = 'client'").get() as any;
    const activeProjects = db.prepare("SELECT COUNT(*) as count FROM projects WHERE status = 'en curso'").get() as any;
    res.json({
      earnings: totalEarnings.total || 0,
      pending: pendingQuotes.count || 0,
      clients: totalClients.count || 0,
      activeProjects: activeProjects.count || 0
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
