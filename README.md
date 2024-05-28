<p align="center">
  <img width="300" src="./public/launchpad-logo-md.png" alt="Your Image Description">
</p>

# Launchpad

![Turborepo Badge](https://img.shields.io/badge/Turborepo-EF4444?logo=turborepo&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=fff)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)
![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat)
![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat)
![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)

---

Welcome to **Launchpad**, a turbocharged monorepo equipped with a Next.js 14
application, a comprehensive Storybook-hosted component library, and essential
configuration packages for ESLint, Tailwind CSS, and TypeScript. Designed to
streamline the development of scalable and secure web applications,
**Launchpad** offers a robust suite of tools and a customizable UI component
library to enhance your development workflow.

- [🚀 Getting Started](#-getting-started)
  - [Installation](#installation)
  - [Useful Commands](#useful-commands)
- [📦 Apps & Packages](#-apps--packages)
- [🛠 Tools Powering This Repository](#-tools-powering-this-repository)
- [🧑‍💻 Setting Up Supabase Locally](#-setting-up-supabase-locally)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation-1)
  - [Configuration](#configuration)
  - [Useful Commands](#useful-commands-1)
- [🧱 Components](#-components)
- [📚 Storybook Integration](#-storybook-integration)
  - [Instant Bundling with Vite](#instant-bundling-with-vite)
  - [Automatic Story Detection](#automatic-story-detection)
  - [Module Path Aliases](#module-path-aliases)
  - [MDX Support for Documentation](#mdx-support-for-documentation)
- [🔄 Versioning & Publishing Packages](#-versioning--publishing-packages)
  - [Generating Changesets](#generating-changesets)
  - [Triggering a Release](#triggering-a-release)
  - [Important Notes](#important-notes)
- [📚 Further Documentation and Resources](#-further-documentation-and-resources)

## 🚀 Getting Started

To get started ensure you have the necessary tools installed -PNPM & Node
(v21+)-, and then clone this repository:

### Installation

```sh
# Clone repo locally
git clone https://github.com/JadRizk/miniature-launchpad.git
cd miniature-launchpad

# Install dependencies
pnpm install
```

### Environment Setup

Before you start the application, you must configure the environment variables
for Supabase authentication. Create a .env.local file at the root of your
project and include the following:

```sh
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

For more information on setting up Supabase, visit the
[Supabase Documentation](https://supabase.com/).

### Useful Commands

- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each
  package's clean script)

## 📦 Apps & Packages

Launchpad's Turborepo structure is designed to maximize modularity and
efficiency across multiple projects. Each app and package is tailored to
specific aspects of development, ensuring a cohesive and scalable ecosystem:

- **`apps/app`**: Our main Next.js 14 application, serving as the face of your
  digital presence. It integrates Supabase for robust authentication and
  leverages our unified component library to ensure a seamless user experience.
- **`apps/docs`**: A dedicated Storybook-powered site for documenting and
  showcasing UI components. It offers an interactive platform for developers to
  view and test component designs in isolation.
- **`packages/ui`**: The core of our UI development, this package includes
  reusable React components that ensure consistency and quality across all
  applications and projects within the repository.
- **`packages/tailwind-config`**: Provides a centralized Tailwind CSS
  configuration to maintain a uniform styling framework throughout all our
  applications and components.
- **`packages/typescript-config`**: Manages shared TypeScript configurations,
  facilitating consistent coding practices and error-free compilation across the
  monorepo.
- **`packages/eslint-config`**: Delivers a pre-set ESLint configuration designed
  to enforce stringent code quality and style guidelines for all JavaScript and
  TypeScript codebases.

## 🛠 Tools Powering This Repository

Launchpad leverages a suite of top-tier development tools designed to enhance
productivity and maintain high standards across the development lifecycle:

- 🏎 [**Turborepo**](https://turbo.build/repo) — A high-performance build system
  tailored for efficient management of monorepos.
- 🚀 [**Next.js 14**](https://nextjs.org/) — A React framework for building
  user-friendly and scalable web applications.
- 🔐 [**Supabase Authentication**](https://supabase.com/auth) — Provides robust
  authentication solutions, enabling secure and scalable user management.
- 📖 [**Storybook**](https://storybook.js.org/) — A sandboxed environment for
  developing and isolating UI components, powered by Vite for near-instant
  feedback.
- 🔠 [**TypeScript**](https://www.typescriptlang.org/) — Enhances JavaScript
  with static types to improve predictability and maintainability of code.
- 🌊 [**Tailwind CSS**](https://tailwindcss.com/) — A utility-first CSS
  framework for rapidly building custom designs.
- 🌐 [**Shadcn**](https://github.com/shadcn) — A modern toolchain for front-end
  development, focusing on performance and developer experience.
- 🔍 [**ESLint**](https://eslint.org/) — A linter tool to identify and fix
  problems in JavaScript and TypeScript code, enforcing code quality standards.
- ✨ [**Prettier**](https://prettier.io) — An opinionated code formatter that
  ensures consistency in code style.
- 🏷️ [**Changesets**](https://github.com/changesets/changesets) — Manages
  versioning and changelog generation, streamlining the release process.
- ⚙️ [**GitHub Actions**](https://github.com/features/actions) — Automates
  workflows for continuous integration and deployment, enhancing development
  pipelines.

**Note**: Each package and app is 100%
[TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist"
dependencies that are shared between packages to the root `package.json`. This
means smaller `node_modules` folders and a better local dev experience. To
install a dependency for the entire monorepo, use the `-w` workspaces flag with
`pnpm add`.

## 🧑‍💻 Setting Up Supabase Locally

Setting up Supabase locally can significantly streamline your development
workflow. Follow these steps to get started with Supabase CLI for local
development:

### Prerequisites

Ensure you have Docker installed on your machine, as Supabase relies on Docker
containers to run the local development environment.

### Installation

1. **Install Supabase CLI**: First, install the Supabase CLI by running the
   following command:

```sh
# Install Supabase CLI
npm install -g supabase
```

2. **Start Supabase**: Navigate to your project's root directory and initialize
   Supabase:

```sh
# Initialize Supabase in your project
supabase init
```

3. **Start the Supabase local development environment**: Run the following
   command to start the local Supabase environment:

```sh
# Start Supabase local environment
supabase start
```

This command will spin up the necessary Docker containers for Supabase,
including the database, authentication, and storage services.

### Configuration

1. **Configure Environment Variables**: Update your `.env.local` file to use the
   local Supabase instance. Replace `your_supabase_url` and
   `your_supabase_anon_key` with the values provided by the local Supabase
   environment:

```sh
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_local_anon_key
```

2. **Migrate Database**: To apply database migrations, use the following
   command:

```sh
# Apply database migrations
supabase db push
```

This command ensures your local database schema matches your project
requirements.

### Useful Commands

- `supabase start` - Start the local Supabase development environment.
- `supabase stop` - Stop the local Supabase environment.
- `supabase db push` - Apply database migrations.
- `supabase db reset` - Reset the local database to its initial state.

For more detailed information on setting up and using Supabase locally, visit
the
[Supabase CLI Local Development Guide](https://supabase.com/docs/guides/cli/local-development).

## 🧱 Components

Each file inside of `packages/src/components` is a component inside our design
system. For example:

```tsx:acme-core/src/Button.tsx
import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}

Button.displayName = 'Button';
```

When adding a new file, ensure the component is also exported from the entry
`index.tsx` file:

```tsx:packages/src/components/index.tsx
export * from './Button';
```

## 🔄 Versioning & Publishing Packages

The project uses [Changesets](https://github.com/changesets/changesets) for
version management, changelog generation, and npm publishing. The workflow is
designed to automate and streamline the release process, ensuring reliable and
consistent package updates.

### 🔧 Generating Changesets

When you make changes that should be tracked in the changelog, follow these
steps:

1. **Start the Changeset**: Run the following command in your terminal:
   `pnpm changeset`
2. **Select Packages**: The CLI will prompt you to select the packages affected
   by your changes. Ensure you create one changeset per repository to keep the
   changelogs separate.
3. **Version Bumps**: Decide on the version bump for the selected packages. It's
   crucial to follow semantic versioning best practices.
4. **Summarize Changes**: Write a clear summary of what changes have been made;
   this summary will be included in the changelog.
5. **Review and Confirm**: Confirm the details of your changeset. A Markdown
   file will then be created in the changeset folder, listing the packages and
   summarizing the changes.

## 📚 Further Documentation and Resources

To help you maximize your use of **Launchpad**, here are some valuable resources
and documentation links:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js
  features and API.
- [Supabase Documentation](https://supabase.com/docs) - Comprehensive guides and
  API references for using Supabase for authentication and database services.
- [Storybook Documentation](https://storybook.js.org/docs) - Explore Storybook
  to better understand how to build and test UI components in isolation.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Get to know how
  to style your applications efficiently using Tailwind CSS.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) -
  Deepen your knowledge of TypeScript and how to use it effectively in your
  projects.
- [ESLint User Guide](https://eslint.org/docs/user-guide) - Configure ESLint to
  enforce code quality standards in your JavaScript and TypeScript code.
- [Prettier Documentation](https://prettier.io/docs/en/index.html) - Learn how
  to use Prettier for automatic code formatting.
- [Turborepo Guide](https://turborepo.org/docs) - Understand how to use
  Turborepo to manage your monorepo efficiently.

These resources provide extensive information and best practices that can boost
your development process and enhance your understanding of the technologies
integrated into **Launchpad**.

---
