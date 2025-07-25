# Portfolio Website - Full Stack Application

## Overview

This is a modern full-stack portfolio website built with React on the frontend and Express.js on the backend. The application showcases a developer's portfolio with interactive 3D elements, modern UI components, and a responsive design. The project follows a monorepo structure with separate client and server directories, utilizing TypeScript throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives for accessibility and consistency
- **3D Graphics**: Three.js with React Three Fiber for 3D backgrounds and animations
- **Animations**: AOS (Animate On Scroll) library for scroll-triggered animations
- **State Management**: React Context for theme management and TanStack Query for server state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Storage**: In-memory storage class for development/testing
- **API Structure**: RESTful API with `/api` prefix
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)

### Key Components

#### Frontend Components
- **Portfolio Sections**: Hero, About, Skills, Projects, Testimonials, Contact
- **3D Backgrounds**: Multiple background options including Earth lines sphere, abstract shapes
- **Theme System**: Dynamic theme switching with multiple color schemes and background types
- **UI Elements**: Modern glassmorphism design with cyber-themed borders and glowing effects
- **Navigation**: Profile sidebar with smooth scrolling navigation

#### Backend Infrastructure
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Development Setup**: Vite integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware

## Data Flow

### Database Schema
The application defines a simple user schema using Drizzle ORM:
- **Users Table**: ID (serial primary key), username (unique), password
- **Type Safety**: Zod schemas for input validation and type inference
- **Migration Support**: Drizzle Kit for database migrations

### API Communication
- **Query Management**: TanStack Query for caching and synchronizing server state
- **Type Safety**: Shared types between client and server using TypeScript
- **Development Logging**: Request/response logging with performance metrics

### Theme Management
- **Context-Based**: React Context provides theme state across the application
- **Persistent**: Theme preferences saved to localStorage
- **Dynamic**: Real-time theme switching affecting colors, backgrounds, and animations

## External Dependencies

### UI and Styling
- **shadcn/ui**: Modern, accessible component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library for consistent iconography

### 3D and Animations
- **Three.js**: 3D graphics library for WebGL rendering
- **React Three Fiber**: React renderer for Three.js
- **AOS**: Animate On Scroll library for entrance animations

### Development Tools
- **TypeScript**: Type safety across the entire application
- **Vite**: Fast build tool with hot module replacement
- **ESBuild**: Fast JavaScript bundler for production builds
- **Drizzle Kit**: Database migration and introspection tool

### Database and Storage
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database toolkit
- **connect-pg-simple**: PostgreSQL session store for Express

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds the React application to `dist/public`
- **Backend**: ESBuild bundles the Express server to `dist/index.js`
- **Production Mode**: Static file serving and API routes in single Express server

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: Hot reload with Vite middleware integration
- **Production**: Optimized builds with static asset serving

### Development Workflow
- **Hot Reloading**: Vite provides instant updates during development
- **Type Checking**: TypeScript compilation check via `npm run check`
- **Database Migrations**: `npm run db:push` for schema updates
- **Development Server**: Single command starts both frontend and backend

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers, with environment-based configuration and a unified build process.