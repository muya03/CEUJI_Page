import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/members", async (req, res) => {
    const organ = req.query.organ as string | undefined;
    const members = await storage.getMembers(organ);
    res.json(members);
  });

  app.get("/api/members/:id", async (req, res) => {
    const member = await storage.getMember(Number(req.params.id));
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  });

  app.get("/api/news", async (req, res) => {
    const category = req.query.category as string | undefined;
    const limit = req.query.limit ? Number(req.query.limit) : undefined;
    const items = await storage.getNews(category, limit);
    res.json(items);
  });

  app.get("/api/news/featured", async (_req, res) => {
    const item = await storage.getFeaturedNews();
    res.json(item || null);
  });

  app.get("/api/news/:id", async (req, res) => {
    const item = await storage.getNewsItem(Number(req.params.id));
    if (!item) return res.status(404).json({ message: "News not found" });
    res.json(item);
  });

  app.get("/api/documents", async (req, res) => {
    const category = req.query.category as string | undefined;
    const docs = await storage.getDocuments(category);
    res.json(docs);
  });

  app.get("/api/documents/:id", async (req, res) => {
    const doc = await storage.getDocument(Number(req.params.id));
    if (!doc) return res.status(404).json({ message: "Document not found" });
    res.json(doc);
  });

  app.get("/api/services", async (_req, res) => {
    const items = await storage.getServices();
    res.json(items);
  });

  app.get("/api/services/:id", async (req, res) => {
    const item = await storage.getService(Number(req.params.id));
    if (!item) return res.status(404).json({ message: "Service not found" });
    res.json(item);
  });

  return httpServer;
}
