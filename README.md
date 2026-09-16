# Lee Thornton — Developer Portfolio

A full-stack developer portfolio built with **Next.js, TypeScript and Payload CMS**, designed to showcase my professional experience, technical skills and software projects.

**[View Live Portfolio](https://leethornton.vercel.app)**

Rather than building the portfolio as a static site, I wanted the project itself to demonstrate some of the technologies and architectural approaches I work with professionally. Portfolio content is managed through Payload CMS, backed by PostgreSQL, while project information is retrieved dynamically from GitHub.

## Features

- Responsive developer portfolio built with Next.js and React
- Payload CMS admin interface for managing portfolio content
- PostgreSQL-backed content storage
- Dynamic GitHub project integration
- Animated professional experience timeline
- Horizontally scrollable project showcase
- Responsive desktop and mobile navigation
- Interactive UI animations and hover states
- CMS-managed skills, experience and site information
- Media management through Payload
- Type-safe CMS data using generated Payload types

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons
- Embla Carousel

### Backend / CMS

- Payload CMS
- PostgreSQL
- Payload PostgreSQL Adapter

### Infrastructure

- Vercel
- Neon PostgreSQL
- Vercel Blob Storage

## Architecture

The application uses Next.js and Payload CMS within the same application.

Payload acts as the content management layer for information including:

- Professional experience
- Technical skills
- Site settings
- Contact and social information
- Media

The frontend retrieves this content server-side and renders the portfolio using reusable React components.

Projects are handled differently. Rather than duplicating repository information inside the CMS, project data is retrieved directly from GitHub so that the portfolio can remain aligned with my public repositories.

This gives the project three primary data sources:

```text
Payload CMS
├── Site settings
├── Skills
├── Experience
└── Media

GitHub
└── Projects

PostgreSQL
└── Payload content
```

## Project Structure

```text
src/
├── app/                 # Next.js App Router
├── collections/         # Payload CMS collections
├── components/
│   ├── contact/
│   ├── experience/
│   ├── footer/
│   ├── hero/
│   ├── navbar/
│   ├── projects/
│   ├── skills/
│   └── ui/
├── globals/             # Payload global configuration
├── lib/
│   └── payload/         # Payload data access
├── payload.config.ts
└── types/               # Generated Payload types
```

## Local Development

### Prerequisites

You will need:

- Node.js 22
- pnpm
- PostgreSQL database

### Installation

Clone the repository:

```bash
git clone https://github.com/leethor92/payload_portfolio.git
cd payload_portfolio
```

Install dependencies:

```bash
pnpm install
```

Create a `.env.local` file and configure the required environment variables:

```env
DATABASE_URL=your_postgresql_connection_string
PAYLOAD_SECRET=your_payload_secret
```

Do not commit environment variables or secrets to source control.

Start the development server:

```bash
pnpm dev
```

The portfolio will be available at:

```text
http://localhost:3000
```

Payload Admin is available at:

```text
http://localhost:3000/admin
```

## Payload Types

Payload generates TypeScript definitions based on the CMS configuration.

After changing collections or globals, regenerate the types with:

```bash
pnpm payload generate:types
```

The generated types are used throughout the application to keep the CMS and frontend data structures type-safe.

## Production Build

Create a production build with:

```bash
pnpm build
```

Run the production application locally with:

```bash
pnpm start
```

## Deployment

The application is designed to be deployed using:

- **Vercel** — Next.js application hosting
- **Neon** — PostgreSQL database
- **Vercel Blob** — persistent Payload media storage

Production credentials are provided using environment variables and are not stored in the repository.

## About Me

I'm **Lee Thornton**, a Software Engineer with 7+ years of professional experience building and modernising web applications, backend systems and cloud-based platforms.

My experience includes React, Next.js, TypeScript, Node.js, Ruby on Rails, PostgreSQL, AWS, Docker and Kubernetes, with a particular interest in scalable systems and modern software architecture.

## Contact

- GitHub: `leethor92`
- LinkedIn: `leethorntonirl`

---

Built by Lee Thornton.
