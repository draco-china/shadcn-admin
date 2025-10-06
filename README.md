# Shadcn Admin

**Language:** [English](./README.md) • [中文](./README.zh-CN.md)

A modern and responsive admin dashboard built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- 🚀 **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- 🎨 **Beautiful UI**: Powered by shadcn/ui components and Tailwind CSS
- 🌙 **Dark/Light Mode**: Built-in theme switching with next-themes
- 🌍 **Internationalization**: Multi-language support with react-i18next
- 📱 **Responsive Design**: Mobile-first approach with responsive layouts
- 🛡️ **Type Safety**: Full TypeScript support for better development experience
- 🔌 **API Integration**: Type-safe API calls with OpenAPI TypeScript and OpenAPI Fetch
- ⚡ **Fast Navigation**: Client-side routing with TanStack Router
- 🔧 **Developer Experience**: Hot reload, Biome linting and formatting, and more
- 📊 **Data Visualization**: Interactive charts with Recharts
- 🎯 **Modern Icons**: Lucide React icons throughout the interface

### 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI primitives
- **Routing**: TanStack Router
- **State Management**: Valtio
- **Internationalization**: react-i18next
- **Charts**: Recharts
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Code Quality**: Biome, Knip
- **API Integration**: OpenAPI TypeScript, OpenAPI Fetch

### 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/draco-china/shadcn-admin.git
   cd shadcn-admin
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development server**

   ```bash
   bun run dev
   ```

4. **Build for production**

   ```bash
   bun run build
   ```

### 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components
│   └── ...
├── features/           # Feature-based modules
│   ├── auth/          # Authentication
│   ├── dashboard/     # Dashboard pages
│   ├── users/         # User management
│   └── ...
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── routes/            # Route definitions
├── stores/            # Global state management
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

### 🚀 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run Biome linter
- `bun run format` - Format code with Biome
- `bun run knip` - Find unused dependencies
- `bun run openapi` - Generate TypeScript types from OpenAPI schema
- `bun run i18n:extract` - Extract translation keys
- `bun run i18n:sync` - Sync translation files

### 🌍 Internationalization

This project supports multiple languages out of the box:

- English (en-US)
- Chinese Simplified (zh-CN)

Translation files are located in `public/locales/`. To add a new language:

1. Create a new folder in `public/locales/` (e.g., `fr-FR`)
2. Copy translation files from an existing language
3. Update `src/config/i18n.ts` to include the new language
4. Translate the content in the JSON files

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 🙏 Acknowledgments

This project is based on the excellent work by [Sat Naing](https://github.com/satnaing) at [shadcn-admin](https://github.com/satnaing/shadcn-admin). We extend our sincere gratitude for the original foundation and inspiration.

### 📄 License

This project is licensed under the MIT License.



---

**Made with ❤️ by [draco-china](https://github.com/draco-china)**

[⭐ Star this project](https://github.com/draco-china/shadcn-admin) • [🐛 Report Issues](https://github.com/draco-china/shadcn-admin/issues) • [🚀 Live Demo](https://shadcn-admin.netlify.app)
