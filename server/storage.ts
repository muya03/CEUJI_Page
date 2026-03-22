import { eq, desc } from "drizzle-orm";
import { db } from "./db";
import {
  members, news, documents, services,
  type Member, type InsertMember,
  type News, type InsertNews,
  type Document, type InsertDocument,
  type Service, type InsertService,
} from "@shared/schema";

export interface IStorage {
  getMembers(organ?: string): Promise<Member[]>;
  getMember(id: number): Promise<Member | undefined>;
  createMember(data: InsertMember): Promise<Member>;

  getNews(category?: string, limit?: number): Promise<News[]>;
  getFeaturedNews(): Promise<News | undefined>;
  getNewsItem(id: number): Promise<News | undefined>;
  createNews(data: InsertNews): Promise<News>;

  getDocuments(category?: string): Promise<Document[]>;
  getDocument(id: number): Promise<Document | undefined>;
  createDocument(data: InsertDocument): Promise<Document>;

  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(data: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  async getMembers(organ?: string): Promise<Member[]> {
    if (organ) {
      return db.select().from(members).where(eq(members.organ, organ)).orderBy(members.order);
    }
    return db.select().from(members).orderBy(members.order);
  }

  async getMember(id: number): Promise<Member | undefined> {
    const [member] = await db.select().from(members).where(eq(members.id, id));
    return member;
  }

  async createMember(data: InsertMember): Promise<Member> {
    const [member] = await db.insert(members).values(data).returning();
    return member;
  }

  async getNews(category?: string, limit?: number): Promise<News[]> {
    let query = db.select().from(news).orderBy(desc(news.publishedAt));
    if (category && category !== "Todas") {
      return db.select().from(news).where(eq(news.category, category)).orderBy(desc(news.publishedAt)).limit(limit || 50);
    }
    return query.limit(limit || 50);
  }

  async getFeaturedNews(): Promise<News | undefined> {
    const [item] = await db.select().from(news).where(eq(news.featured, true)).orderBy(desc(news.publishedAt)).limit(1);
    return item;
  }

  async getNewsItem(id: number): Promise<News | undefined> {
    const [item] = await db.select().from(news).where(eq(news.id, id));
    return item;
  }

  async createNews(data: InsertNews): Promise<News> {
    const [item] = await db.insert(news).values(data).returning();
    return item;
  }

  async getDocuments(category?: string): Promise<Document[]> {
    if (category && category !== "Todos") {
      return db.select().from(documents).where(eq(documents.category, category)).orderBy(desc(documents.publishedAt));
    }
    return db.select().from(documents).orderBy(desc(documents.publishedAt));
  }

  async getDocument(id: number): Promise<Document | undefined> {
    const [doc] = await db.select().from(documents).where(eq(documents.id, id));
    return doc;
  }

  async createDocument(data: InsertDocument): Promise<Document> {
    const [doc] = await db.insert(documents).values(data).returning();
    return doc;
  }

  async getServices(): Promise<Service[]> {
    return db.select().from(services).orderBy(services.order);
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service;
  }

  async createService(data: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(data).returning();
    return service;
  }
}

export const storage = new DatabaseStorage();
