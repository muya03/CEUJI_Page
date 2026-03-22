# Consell de l'Estudiantat Page

## Overview
Digital ecosystem website for the Consell de l'Estudiantat (Student Council) at Universitat Jaume I. Features glassmorphic design with bento grid layouts and kinetic typography, using the official UJI color palette.

## Architecture
- **Frontend**: React + Vite + TailwindCSS v4, served on port 5000
- **Backend**: Express.js API server
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: TanStack React Query for server state
- **Routing**: wouter for client-side routing

## Key Files
- `shared/schema.ts` - Data models (members, news, documents, services)
- `server/db.ts` - Database connection
- `server/storage.ts` - Storage interface with CRUD operations
- `server/routes.ts` - API routes (all prefixed with `/api`)
- `server/seed.ts` - Database seeding with initial content
- `client/src/App.tsx` - Frontend routing
- `client/src/pages/` - Page components
- `client/src/components/` - Shared UI components

## API Endpoints
- `GET /api/members?organ=` - List members, optionally filtered by organ
- `GET /api/news?category=&limit=` - List news, optionally filtered
- `GET /api/news/featured` - Get featured news article
- `GET /api/documents?category=` - List documents
- `GET /api/services` - List services

## Design System
- Colors: UJI institutional palette (#013764, #215077, etc.)
- Fonts: Archivo Black (display), Montserrat (body)
- Style: Glassmorphic with backdrop-blur, rounded-3xl elements
- Language: Spanish/Valencian mix

## User Preferences
- Spanish language interface
- Dragon mascots as brand identity
- Glassmorphic aesthetic throughout

## Three Universes
1. **El Consell** (`/`) - Main institutional site with members, news, documents, services
2. **La Casa** (`/casa`) - Student space with agenda, spaces, projects, campaigns
3. **Paellas 2026** (`/paellas`) - Festival page for XXXV Aniversari UJI (dark theme, amber/orange accents)

## Recent Changes
- 2026-02-18: Added Paellas 2026 festival page at /paellas with real UJI data (schedule, tickets, FAQ, rules, transport info)
- 2026-02-18: Added La Casa de l'Estudiantat page at /casa
- 2026-02-18: Full-stack conversion complete. All pages fetch from PostgreSQL database via API endpoints.
