# GitHub Action Template

GitHub Action 开发模板仓库 - 包含完整的 Action 开发结构、测试框架、调试工作流和发布流程。

## 📦 包含内容

- ✅ 完整的 Action 项目结构
- ✅ TypeScript 开发环境
- ✅ Jest 测试框架配置
- ✅ ESLint + Prettier 代码规范
- ✅ GitHub Actions CI/CD 工作流
- ✅ 调试技巧和工具
- ✅ 发布到 GitHub Marketplace 流程

## 🚀 快速开始

### 方式一：使用模板创建新项目

1. 点击 "Use this template" 按钮
2. 输入新项目名称
3. 开始开发！

### 方式二：克隆到本地

```bash
git clone https://github.com/h1s97x/github-action-template.git
cd github-action-template
npm install
```

## 📁 项目结构

```
.
├── .github/
│   └── workflows/
│       ├── ci.yml          # CI 工作流
│       └── release.yml     # 发布工作流
├── src/
│   └── index.ts            # Action 入口
├── test/
│   └── index.test.ts       # 测试文件
├── action.yml              # Action 元数据
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 开发指南

### 安装依赖

```bash
npm install
```

### 开发调试

```bash
npm run build   # 编译 TypeScript
npm run test    # 运行测试
npm run lint    # 代码检查
```

### 本地测试 Action

使用 [act](https://github.com/nektos/act) 本地运行：

```bash
act -l                    # 列出可用工作流
act -W .github/workflows/ci.yml  # 运行 CI 工作流
```

## 📖 资源链接

- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [Actions Toolkit](https://github.com/actions/toolkit)
- [创建 JavaScript Action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

## 📝 License

MIT
