# 🌟 Next.js 14 Starter with tRPC, React Query, NextAuth.js, and Tailwind CSS

This project serves as a robust template for building scalable web applications with Next.js 14. It integrates essential tools like tRPC, React Query, NextAuth.js, and Tailwind CSS, all organized using the Feature-Sliced Design (FSD) methodology.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Introduction

Welcome to your modern frontend foundation! This repository provides a comprehensive setup for building web applications with Next.js 14, guided by the Feature-Sliced Design (FSD) methodology. This structure ensures that your project remains scalable, maintainable, and easy to navigate. Key technologies included are:

- **tRPC & React Query** for type-safe API interactions.
- **NextAuth.js** for authentication, with pre-configured GitHub and Discord providers.
- **Tailwind CSS & Shadcn** for sleek and responsive styling.

## ✨ Features

- **Type-safe API interactions** using tRPC and React Query.
- **Pre-configured authentication** with NextAuth.js, supporting GitHub and Discord.
- **Feature-Sliced Design** for organized, scalable project structure.
- **Modern UI styling** with Tailwind CSS and Shadcn components.

## 🏗️ Architecture

This project follows the Feature-Sliced Design (FSD) methodology, which promotes modularity and a clear separation of concerns. The architecture is divided into the following layers:

- **App:** Handles the application’s entry points, routing, global styles, and providers.
- **Widgets:** Self-contained UI elements delivering specific use cases.
- **Features:** Encapsulates domain-specific functionality.
- **Entities:** Represents the business entities used throughout the project.
- **Kernel:** Contains essential infrastructure, including tRPC setup, database connections, and NextAuth.js configuration.
- **Shared:** Houses reusable components and utilities shared across features and entities.

## 🛠️ Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.x)
- npm (or yarn)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd repo-name
npm install
```

### Environment Variables

`Prisma`<br>
DATABASE_URL="postgresql://postgres:password@localhost:5432/t3-stack"

`Next Auth`<br>
You can generate a new secret on the command line with:
openssl rand -base64 32
https://next-auth.js.org/configuration/options#secret

NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3000"

`Next Auth Github Provider`<br>
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

`Next Auth Discord Provider`<br>
DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""

### 💻 Usage
Authentication
The project includes pre-configured authentication with GitHub and Discord via NextAuth.js. To add more providers or customize authentication flows, modify the configuration in kernel/next-auth/auth.ts.

##### API Development
tRPC and React Query have been set up to provide a type-safe API layer. Routers are defined within the kernel/trpc directory and organized according to FSD principles.

##### Styling
Tailwind CSS is used for utility-first styling, with additional components from Shadcn. Customize your styles within the styles directory.

### 🤝 Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

### 📄 License
This project is licensed under the MIT License.