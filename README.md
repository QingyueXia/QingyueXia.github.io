# 夏清悦 · 博士研究主页

静态学术主页，支持中英文切换和手机布局，无构建依赖。

## 内容更新

- `index.html`：姓名、简介、教育经历、研究方向与代码链接。
- 带 `data-zh` 和 `data-en` 的元素分别保存中英文内容，两者需同步修改。
- `style.css`：页面样式与响应式布局。
- `script.js`：语言切换、语言偏好保存与页脚年份。
- 页面未设置邮箱、论文、履历下载等未提供的信息；有资料后再添加对应栏目和导航。
- 两个仓库按原名称链接，未将其描述为论文成果。

## 发布到 GitHub Pages

将本目录内容放在 `QingyueXia/QingyueXia.github.io` 的 `main` 分支根目录。在仓库 Settings → Pages 中选择 Deploy from a branch，分支 `main`，目录 `/ (root)`。保留 `.nojekyll`。站点地址为 https://qingyuexia.github.io/ 。

## 本地预览

在网站目录运行 `python3 -m http.server 8765`，打开 http://localhost:8765/ 。
