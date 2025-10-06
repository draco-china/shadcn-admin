# Shadcn Admin

一个使用 React、TypeScript、Tailwind CSS 和 shadcn/ui 组件构建的现代化响应式管理后台。

**语言版本:** [English](./README.md) • [中文](./README.zh-CN.md)

---

## ✨ 特性

- 🚀 **现代技术栈**: 基于 React 19、TypeScript 和 Vite 构建
- 🎨 **精美界面**: 采用 shadcn/ui 组件和 Tailwind CSS
- 🌙 **深色/浅色主题**: 内置主题切换，使用 next-themes
- 🌍 **国际化支持**: 使用 react-i18next 支持多语言
- 📱 **响应式设计**: 移动优先的响应式布局
- 🛡️ **类型安全**: 完整的 TypeScript 支持，提升开发体验
- 🔌 **API 集成**: 使用 OpenAPI TypeScript 和 OpenAPI Fetch 的类型安全 API 调用
- ⚡ **快速导航**: 使用 TanStack Router 的客户端路由
- 🔧 **开发者体验**: 热重载、Biome 代码检查和格式化等
- 📊 **数据可视化**: 使用 Recharts 的交互式图表
- 🎯 **现代图标**: 全面使用 Lucide React 图标

## 🛠️ 技术栈

- **前端框架**: React 19, TypeScript, Tailwind CSS
- **UI 组件**: shadcn/ui, Radix UI 基础组件
- **路由管理**: TanStack Router
- **状态管理**: Valtio
- **国际化**: react-i18next
- **图表库**: Recharts
- **构建工具**: Vite
- **包管理器**: Bun
- **代码质量**: Biome, Knip
- **API 集成**: OpenAPI TypeScript, OpenAPI Fetch

## 📦 安装步骤

1. **克隆仓库**

   ```bash
   git clone https://github.com/draco-china/shadcn-admin.git
   cd shadcn-admin
   ```

2. **安装依赖**

   ```bash
   bun install
   ```

3. **启动开发服务器**

   ```bash
   bun run dev
   ```

4. **构建生产版本**

   ```bash
   bun run build
   ```

## 📁 项目结构

```text
src/
├── components/          # 可复用的 UI 组件
│   ├── ui/             # shadcn/ui 组件
│   ├── layout/         # 布局组件
│   └── ...
├── features/           # 功能模块
│   ├── auth/          # 用户认证
│   ├── dashboard/     # 仪表板页面
│   ├── users/         # 用户管理
│   └── ...
├── hooks/             # 自定义 React hooks
├── lib/               # 工具函数
├── routes/            # 路由定义
├── stores/            # 全局状态管理
├── styles/            # 全局样式
└── types/             # TypeScript 类型定义
```

## 🚀 可用脚本

- `bun run dev` - 启动开发服务器
- `bun run build` - 构建生产版本
- `bun run preview` - 预览生产构建
- `bun run lint` - 运行 Biome 代码检查
- `bun run format` - 使用 Biome 格式化代码
- `bun run knip` - 查找未使用的依赖
- `bun run openapi` - 从 OpenAPI 模式生成 TypeScript 类型
- `bun run i18n:extract` - 提取翻译键
- `bun run i18n:sync` - 同步翻译文件

## 🌍 国际化

本项目开箱即用地支持多种语言：

- 英文 (en-US)
- 简体中文 (zh-CN)

翻译文件位于 `public/locales/` 目录中。添加新语言的步骤：

1. 在 `public/locales/` 中创建新文件夹（例如 `fr-FR`）
2. 从现有语言复制翻译文件
3. 更新 `src/config/i18n.ts` 以包含新语言
4. 翻译 JSON 文件中的内容

## 🌟 功能亮点

### 响应式设计

- 完全响应式的界面设计
- 移动端优先的开发方式
- 适配各种屏幕尺寸

### 现代化UI组件

- 基于 shadcn/ui 的高质量组件库
- 支持深色和浅色主题切换
- 丰富的交互动画效果

### 国际化支持

- 完整的多语言支持系统
- 动态语言切换
- 易于扩展新语言

### 开发者友好

- 完整的 TypeScript 支持
- 热模块替换 (HMR)
- 代码规范和格式化工具

## 🤝 贡献指南

我们欢迎所有形式的贡献！在提交 Pull Request 之前，请确保：

1. **代码规范**: 运行 `bun run lint` 检查代码
2. **格式化**: 运行 `bun run format` 格式化代码
3. **构建测试**: 运行 `bun run build` 确保构建成功
4. **提交信息**: 使用语义化的提交信息

### 本地开发

```bash
# 克隆项目
git clone https://github.com/draco-china/shadcn-admin.git
cd shadcn-admin

# 安装依赖
bun install

# 启动开发服务器
bun run dev

# 在另一个终端运行代码检查
bun run lint
```

## 🐛 问题反馈

如果您遇到任何问题或有功能建议，请：

1. 查看 [现有的 Issues](https://github.com/draco-china/shadcn-admin/issues)
2. 如果没有相关问题，[创建新的 Issue](https://github.com/draco-china/shadcn-admin/issues/new)
3. 详细描述问题和复现步骤

## 🙏 致谢

本项目基于 [Sat Naing](https://github.com/satnaing) 的优秀作品 [shadcn-admin](https://github.com/satnaing/shadcn-admin) 开发。我们对原始项目提供的基础和灵感表示诚挚的感谢。

## 📄 许可证

本项目基于 [MIT 许可证](./LICENSE) 开源。

---

**使用 ❤️ 制作 by [draco-china](https://github.com/draco-china)**

[⭐ 为项目点星](https://github.com/draco-china/shadcn-admin) • [🐛 报告问题](https://github.com/draco-china/shadcn-admin/issues) • [🚀 在线演示](https://shadcn-admin.netlify.app)
