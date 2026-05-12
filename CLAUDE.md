# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (see `pnpm-lock.yaml`, `pnpm-workspace.yaml`).

- `pnpm dev` — start Next.js dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — run production server
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`)
- `pnpm prisma migrate dev` / `pnpm prisma generate` — Prisma uses `prisma.config.ts` (not `package.json`); schema lives at `prisma/schema.prisma`

There is no test runner configured.

## Architecture

Next.js 16 App Router + React 19 + TypeScript, Tailwind v4, shadcn/ui, Prisma 7 against Neon Postgres via the serverless driver.

- **App Router** lives under `app/`. Currently only `layout.tsx`, `page.tsx`, and `globals.css` — the e-commerce surface is not yet built out. Add routes as nested folders under `app/`.
- **Prisma client is generated to `lib/generated/prisma/`** (custom `output` in `schema.prisma`), not `node_modules/@prisma/client`. Import via the `@/lib/generated/prisma` path alias. After schema edits, run `prisma generate` to refresh that directory.
- **Prisma client singleton**: `lib/prisma.ts` is the only client — uses `globalThis` to survive hot-reload, wires `PrismaClient` through `@prisma/adapter-neon` so queries go over Neon's serverless driver. Import as `import { prisma } from "@/lib/prisma"`.
- **Two database URLs**: `DATABASE_URL` (pooled, used at runtime by the Neon adapter) and `DIRECT_URL` (unpooled, used by Prisma CLI for migrations — see `prisma.config.ts`). Both must be set in `.env`.
- **shadcn/ui** is configured (`components.json`): style `radix-nova`, base color `zinc`, CSS variables on, components land in `components/ui`, icons from `lucide-react`. Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.
- **Tailwind v4** uses the PostCSS plugin (`@tailwindcss/postcss`); there is no `tailwind.config.*` — theme is driven from `app/globals.css` via CSS variables.
