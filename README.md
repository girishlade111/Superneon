# Superneon

A modern, production-ready Next.js 15+ starter template built with Tailwind CSS v4, shadcn/ui, Prisma ORM, and Radix UI primitives. Designed for building beautiful, accessible, and performant web applications.

## 🚀 Features

### Core Stack
- **Next.js 15+** - App Router with Server Components, streaming, and parallel routes
- **React 19** - Latest React with concurrent features and improved performance
- **TypeScript 5** - Full type safety across the codebase
- **Tailwind CSS v4** - Utility-first CSS with new V4 features and OKLCH color space
- **Bun** - Fast JavaScript runtime and package manager

### UI & Components
- **shadcn/ui** - Beautifully designed, accessible components built on Radix UI
- **Radix UI Primitives** - 50+ unstyled, accessible UI primitives
- **Lucide React** - Clean, consistent icon library
- **Framer Motion** - Production-ready animations and transitions
- **Embla Carousel** - Touch-friendly carousel/slider component
- **Recharts** - Composable charting library
- **next-themes** - Dark/light mode with system preference detection

### Forms & Validation
- **React Hook Form** - Performant, flexible forms
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Seamless Zod integration

### Database & ORM
- **Prisma ORM** - Type-safe database access with auto-generated types
- **SQLite** (development) / PostgreSQL (production ready)
- **Prisma Client** - Auto-generated, type-safe database client

### Authentication & State
- **NextAuth.js v4** - Complete authentication solution
- **TanStack Query (React Query)** - Server state management
- **Zustand** - Lightweight client state management
- **TanStack Table** - Powerful, headless table component

### Developer Experience
- **ESLint 9** - Modern linting with flat config
- **TypeScript strict mode** - Maximum type safety
- **Path aliases** - Clean imports with `@/` prefix
- **Components.json** - shadcn/ui configuration for easy component additions

## 📁 Project Structure

```
Superneon/
├── .github/                    # GitHub workflows (CI/CD)
├── .kilo/                      # Kilo AI assistant configuration
├── .zscripts/                  # Utility shell scripts
├── db/                         # Database files (SQLite for dev)
├── download/                   # Downloadable assets
├── examples/                   # Example implementations
│   └── websocket/              # WebSocket example
├── mini-services/              # Microservice examples
├── prisma/                     # Prisma schema and migrations
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
│   ├── images/                 # Mockup images for landing page
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/                # API routes
│   │   ├── globals.css         # Global styles with Tailwind v4
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/
│   │   ├── superneon/          # Landing page specific components
│   │   │   ├── feature-showcase.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── header.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── planet-cta.tsx
│   │   │   └── whats-included.tsx
│   │   └── ui/                 # shadcn/ui components (50+)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib/                    # Utility functions
│       ├── db.ts               # Prisma client singleton
│       └── utils.ts            # Common utilities (cn, etc.)
├── .env                        # Environment variables (not committed)
├── .env.example                # Example environment variables
├── .gitignore
├── bun.lock                    # Bun lockfile
├── Caddyfile                   # Caddy web server config
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs           # ESLint 9 flat config
├── next.config.ts              # Next.js configuration
├── package.json
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS v4 configuration
├── tsconfig.json               # TypeScript configuration
└── worklog.md                  # Development work log
```

## 🛠 Getting Started

### Prerequisites
- **Bun** v1.1+ (recommended) or Node.js 20+
- **Git**
- **PostgreSQL** (for production) or SQLite (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/girishlade111/Superneon.git
   cd Superneon
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or npm install / pnpm install / yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   bun run db:generate
   
   # Push schema to database (development)
   bun run db:push
   
   # Or run migrations (production)
   bun run db:migrate
   ```

5. **Start development server**
   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with logging |
| `bun run build` | Build for production (standalone output) |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push Prisma schema to database |
| `bun run db:generate` | Generate Prisma client |
| `bun run db:migrate` | Run Prisma migrations |
| `bun run db:reset` | Reset database and re-run migrations |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./db/custom.db"  # SQLite for development
# DATABASE_URL="postgresql://user:password@localhost:5432/superneon?schema=public"  # PostgreSQL for production

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Other services
# REDIS_URL=""
# UPSTASH_REDIS_REST_URL=""
# UPSTASH_REDIS_REST_TOKEN=""
```

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax. Configuration is in:
- `tailwind.config.ts` - Theme customization
- `src/app/globals.css` - Global styles and CSS variables

### shadcn/ui Configuration

The `components.json` file configures shadcn/ui:
- Style: "new-york"
- Base color: "slate"
- CSS variables: true
- Icon library: "lucide-react"

To add new components:
```bash
bunx shadcn@latest add <component-name>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

The `next.config.ts` is configured for standalone output which works perfectly with Vercel.

### Docker

```dockerfile
# Build stage
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Production stage
FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["bun", "server.js"]
```

### Manual Server

```bash
bun run build
bun run start
```

## 🧪 Testing

```bash
# Run linting
bun run lint

# Type checking
bunx tsc --noEmit
```

## 📚 Adding New Features

### Adding a New Page (App Router)

1. Create a new folder in `src/app/`:
   ```
   src/app/dashboard/
   ├── layout.tsx    # Optional: nested layout
   └── page.tsx      # Page component
   ```

2. Use Server Components by default, add `'use client'` for client components

### Adding a New UI Component

```bash
bunx shadcn@latest add dialog
```

This will create the component in `src/components/ui/` and update `components.json`.

### Adding Database Models

1. Edit `prisma/schema.prisma`
2. Run migrations:
   ```bash
   bun run db:migrate
   ```

## 🎨 Design System

### Colors
- Uses CSS variables for theming (defined in `globals.css`)
- Supports dark/light mode via `next-themes`
- OKLCH color space for better perceptual uniformity

### Typography
- System font stack for performance
- Configurable via `tailwind.config.ts`

### Spacing & Layout
- Tailwind's default spacing scale
- Container queries for responsive components
- CSS Grid and Flexbox utilities

## 🔒 Security

- **Authentication**: NextAuth.js with secure session handling
- **Database**: Parameterized queries via Prisma (SQL injection prevention)
- **Headers**: Security headers configured in `next.config.ts`
- **Environment**: Sensitive data in `.env` (never committed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Follow TypeScript strict mode
- Use ESLint configuration
- Follow shadcn/ui component patterns
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [TanStack](https://tanstack.com/) - Powerful data management
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/girishlade111/Superneon/issues)
- **Discussions**: [GitHub Discussions](https://github.com/girishlade111/Superneon/discussions)

---

Built with ❤️ using modern web technologies. Star ⭐ this repo if you find it useful!