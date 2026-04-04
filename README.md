# Zentrix

A modern, full-featured Next.js application with authentication, database integration, and a comprehensive UI component library. Currently in Beta, powered by AI.

## Overview

Zentrix is built with the latest web technologies and best practices, providing a solid foundation for building scalable applications.

## Tech Stack

### Core Framework
- **Next.js 16.2.2** - React framework with server-side rendering
- **React 19.2.4** - Latest React with new features
- **Babel React Compiler** - Automatic compilation with React Compiler

### Authentication & Backend
- **Clerk** - Complete authentication and user management
- **Prisma 7.6.0** - Next-generation ORM for database management
- **Supabase PostgreSQL** - Cloud-hosted PostgreSQL database with connection pooling

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components (50+ components)
- **Radix UI** - Unstyled, accessible component primitives
- **Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icons

### Additional Libraries
- **next-themes** - Theme management (dark/light mode)
- **Recharts** - Composable charting library
- **Sonner** - Toast notifications
- **Embla Carousel** - Carousel component
- **React Day Picker** - Date picker
- **cmdk** - Command menu component
- **Vaul** - Drawer component
- **React Resizable Panels** - Resizable panel layouts

### Streaming Integration
- **Stream API** - Real-time messaging and chat capabilities

## Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── layout.js                # Root layout
│   ├── page.jsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── Header.jsx               # Header component
│   ├── Reusables.jsx            # Reusable components
│   ├── ui/                      # 50+ shadcn UI components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── sidebar.jsx
│   │   ├── tabs.jsx
│   │   └── ... (45+ more components)
│   └── animate-ui/              # Animation components
│       └── components/backgrounds/stars.jsx
├── hooks/                       # Custom React hooks
│   └── use-mobile.js           # Mobile detection hook
├── lib/                         # Utility functions
│   ├── utils.js                # Helper utilities
│   └── data.js                 # Data constants
└── generated/
    └── prisma/                 # Prisma generated types
```

## Available UI Components

50+ production-ready components including:
- Form components (Input, Textarea, Select, Checkbox, Radio, Toggle, etc.)
- Layout components (Card, Sidebar, Sheet, Drawer, Tabs, etc.)
- Navigation (Breadcrumb, Pagination, Navigation Menu, Dropdown Menu, etc.)
- Data Display (Table, Carousel, Accordion, Collapsible, etc.)
- Feedback (Alert, Toast/Sonner, Dialog, Alert Dialog, etc.)
- And many more...

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zentrix
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_database_url
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Database

The project uses Prisma ORM with PostgreSQL hosted on Supabase.

### Prisma Commands
```bash
npx prisma migrate dev   # Create and apply migrations
npx prisma generate      # Generate Prisma client
npx prisma studio       # Open Prisma Studio UI
```

## Features

- Dark/Light theme support with next-themes
- Responsive design with Tailwind CSS
- 50+ pre-built UI components
- Authentication with Clerk
- Real-time communication with Stream API
- PostgreSQL database with Prisma ORM
- Animated backgrounds and transitions
- Comprehensive form handling
- Toast notifications with Sonner

## Current Status

- **Version**: 0.1.0 (Beta)
- **Status**: Active Development
- Hero section with animated stars background
- Authentication infrastructure ready
- Database schema initialized with Prisma

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)

## Deployment

The app is ready to be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Self-hosted servers**
