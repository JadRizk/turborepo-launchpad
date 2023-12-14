<p align="center">
  <img width="300" src="./public/launchpad-logo-md.png" alt="Your Image Description">
</p>

![Turborepo Badge](https://img.shields.io/badge/Turborepo-EF4444?logo=turborepo&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat)
![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat)

Welcome to the official starter kit for Turborepo, the high-speed monorepo management tool that's about to turbocharge
your development process!

## 🌟 Getting Started is a Breeze!

Ready to hit the ground running? Fire up your terminal and let's get those engines revving:

```sh
npx create-turbo@latest
```

## 📦 What’s in the Box?

Dive into a world of efficiency with these pre-configured goodies:

### 🌐 Apps and Packages Galore!

- `app`: a sleek [Next.js](https://nextjs.org/) app for your web app.
- `ui`: a shared React component library powering all the apps.
- `tailwind-config`: a shared [Tailwind CSS](https://tailwindcss.com/) configuration for consistent styling across
  apps and libraries.
- `eslint-config-custom`: Keep your code clean with custom `eslint` configurations, including `eslint-config-next`
  and `eslint-config-prettier`.
- `tsconfig`: Centralized `tsconfig.json`s for consistent TypeScript configurations across the monorepo.

Psst... TypeScript is our language of choice here for that extra type safety!

### 🔧 Handy Utilities at Your Fingertips

- [TypeScript](https://www.typescriptlang.org/): For ironclad type checking.
- [ESLint](https://eslint.org/): To keep your code squeaky clean.
- [Prettier](https://prettier.io): Because who doesn't love beautifully formatted code?

### 🏗️ Build Instructions

To construct all apps and packages in one fell swoop:

```
cd my-turborepo
pnpm build
```

### 🎨 Develop with Joy

Kickstart your development environment with:

```
cd my-turborepo
pnpm dev
```

### ⚡ Remote Caching for Lightning-Fast Builds

Leverage [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across
machines. Perfect for team collaborations and CI/CD pipelines.

Initially set to local cache, you can switch to Remote Caching with a Vercel account:

```
cd my-turborepo
npx turbo login
```

Authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview),
then:

```
npx turbo link
```

## 🙏 Acknowledgments

This project has been inspired and influenced by several amazing open-source repositories. A special thanks to the
maintainers and contributors of these projects:

- [shadcn-ui/taxonomy](https://github.com/shadcn-ui/taxonomy): For providing valuable insights and approaches in UI
  taxonomy that helped shape our project.

Your support and open-source contributions have been invaluable in making this project a reality!

## 📚 Learn More and Stay Turbocharged!

Fuel your knowledge about Turborepo with these resources:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
