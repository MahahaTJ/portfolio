# 设计规范文档

> 从 `index.html` 提取，供后续页面与组件开发参考。
> 最后更新：2026-07-12

---

## 1. 颜色系统

所有颜色均通过 CSS 自定义属性（CSS Variables）定义于 `:root`。

### 1.1 背景色

| 变量名       | 色值      | 用途说明                                   |
| ------------ | --------- | ------------------------------------------ |
| `--bg`       | `#101010` | 主背景色，页面最底层背景                   |
| `--bg2`      | `#191919` | 卡片/面板次级背景                          |
| `--bg3`      | `#282828` | 缩略图占位背景、更深层的卡片底色           |
| `--bg4`      | `#383838` | （已定义，未直接使用）第四层级背景备用      |

### 1.2 边框/分隔线色

| 变量名      | 色值      | 用途说明                               |
| ----------- | --------- | -------------------------------------- |
| `--rule`    | `#424242` | 主边框色、分隔线、滚动条、时间线轴线   |
| `--rule2`   | `#626262` | 悬浮态边框色（卡片 hover 等场景）      |

### 1.3 文字色

| 变量名      | 色值      | 用途说明                                   |
| ----------- | --------- | ------------------------------------------ |
| `--ink`     | `#fafafa` | 主文字色，标题、重要内容                   |
| `--ink2`    | `#e0e0e0` | （已定义，未直接使用）次级文字色备用        |
| `--muted`   | `#a6a6a6` | 正文/描述文字色                            |
| `--muted2`  | `#797979` | 辅助/注释文字色，标签、提示、公司描述等     |

### 1.4 强调色

| 变量名          | 色值      | 用途说明                                   |
| --------------- | --------- | ------------------------------------------ |
| `--accent`      | `#fffa00` | 主强调色，品牌标识、高亮标签、交互反馈     |
| `--accent-dim`  | `#b8b300` | 弱化强调色，卡片悬浮边框、动画中间态       |

### 1.5 特殊用途颜色

| 场景               | 色值                   | 出处                |
| ------------------ | ---------------------- | ------------------- |
| 导航栏背景         | `rgba(16, 16, 16, 0.92)` | `.top-nav`          |
| 汉堡菜单遮罩       | `rgba(16, 16, 16, 0.96)` | `.menu-overlay`     |
| Footer背景         | `rgba(16, 16, 16, 0.9)`  | `.site-footer`      |
| Hero遮罩渐变       | `rgba(16,16,16,0.7)`     | `.hero::before`      |
| 轮播箭头悬浮背景   | `rgba(255,250,0,0.1)`    | `.hero-carousel-arrow:hover` |

---

## 2. 字体系统

### 2.1 字族（Font Family）

| 变量名             | 字体栈                                                                                   | 用途                       |
| ------------------ | ---------------------------------------------------------------------------------------- | -------------------------- |
| `--font-brand`     | `'Teko', 'Oswald', 'Novecentosanswide', sans-serif`                                      | 品牌标识（Logo / Footer）  |
| `--font-display`   | `'Oswald', 'Novecentosanswide', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif` | 标题、章节标题、Hero标签   |
| `--font-body`      | `-apple-system, 'PingFang SC', 'Microsoft YaHei', 'Segoe UI', sans-serif`               | 正文、段落、通用文本       |
| `--font-mono`      | `'Space Grotesk', 'SF Mono', 'Cascadia Code', 'Consolas', monospace`                     | 等宽数据、标签、代码、编号 |

### 2.2 字号一览

| 场景                       | 选择器                          | 字号                                | 备注                    |
| -------------------------- | ------------------------------- | ----------------------------------- | ----------------------- |
| **导航 Logo**              | `.nav-logo`                     | `1.3rem`                            | font-brand, font-weight: 600 |
| **导航链接**               | `.nav-link`                     | `0.82rem`                           | font-weight: 600        |
| **导航简历按钮**           | `.nav-resume-btn`               | `0.78rem`                           |                         |
| **Hero 标签**              | `.hero-tag`                     | `clamp(2.8rem, 7vw, 4.5rem)`        | font-display            |
| **Hero 主标题 (h1)**       | `.hero h1`                      | `clamp(2.2rem, 5vw, 4rem)`          | font-display            |
| **Hero 副标题**            | `.hero .subtitle`               | `clamp(0.85rem, 1.8vw, 0.95rem)`    |                         |
| **Hero 数据数字**          | `.hero-stats .stat-num`         | `2rem`                              | font-mono               |
| **Hero 数据标签**          | `.hero-stats .stat-label`       | `0.68rem`                           |                         |
| **页码指示器**             | `.page-number`                  | `3.5rem`（桌面）/ `2.5rem`（移动端）| font-mono               |
| **页标题文字**             | `.page-title-text`             | `0.7rem`                            |                         |
| **章节标签**               | `.section-label`               | `0.65rem`                           | font-display            |
| **章节标题 (h2)**          | `.section-title`                | `clamp(1.6rem, 3vw, 2.2rem)`        | font-display            |
| **卡片标题**               | `.card-title`                  | `1.05rem`                           | font-display            |
| **卡片元信息**             | `.card-meta`                    | `0.62rem`                           | font-mono               |
| **卡片描述**               | `.card-desc`                   | `0.8rem`                            |                         |
| **卡片标签**               | `.card-tag`                    | `0.62rem`                            |                         |
| **卡片箭头**               | `.card-arrow`                  | `0.7rem`                            | font-mono               |
| **时间线日期**             | `.t-date`                      | `0.68rem`                           | font-mono               |
| **时间线职位**             | `.t-role`                      | `0.88rem`                            |                         |
| **时间线公司描述**         | `.t-company`                    | `0.78rem`                            |                         |
| **About 卡片标签**         | `.ac-label`                     | `0.65rem`                           | font-display            |
| **About 卡片正文**         | `.about-card p`                | `0.85rem`                            |                         |
| **About 列表项**           | `.about-card li`               | `0.82rem`                            |                         |
| **Footer 品牌**            | `.footer-brand`                 | `0.9rem`                            | font-brand              |
| **Footer 版权**            | `.footer-left`                  | `0.65rem`                           | font-mono               |
| **菜单项编号**             | `.menu-item-number`             | `2rem`                              | font-mono               |
| **菜单项标签**             | `.menu-item-label`             | `1.3rem`                             |                         |
| **进度条标签**             | `.progress-label`              | `0.72rem`                           |                         |
| **滚动提示文字**           | `.hint-text`                    | `0.6rem`                            |                         |
| **Coming Soon 标签**       | `.cs-label`                     | `0.62rem`                           | font-display            |
| **Coming Soon 标题**       | `.cs-title`                     | `1rem`                              | font-display            |
| **Coming Soon 描述**       | `.cs-desc`                      | `0.8rem`                             |                         |

### 2.3 字重

| 字重值 | 用途场景                           |
| ------ | ---------------------------------- |
| 400    | 正文常规                           |
| 500    | 标签（`.card-tag`）                |
| 600    | 导航链接、Logo、数据数字           |
| 700    | 标题、Hero标签、页码、章节标签     |

### 2.4 行高与字间距

| 属性                 | 值         | 场景         |
| -------------------- | ---------- | ------------ |
| `line-height`        | `1.7`      | body 全局    |
| `line-height`        | `1.1`      | Hero 标题/标签 |
| `line-height`        | `1.15`     | 章节标题     |
| `line-height`        | `1.6`      | 卡片描述     |
| `line-height`        | `1.8`      | Hero副标题、About正文 |
| `letter-spacing`     | `0.2em`    | Logo         |
| `letter-spacing`     | `0.2em`    | 章节标签     |
| `letter-spacing`     | `0.15em`   | About卡片标签 |
| `letter-spacing`     | `0.08em`   | 导航链接     |
| `letter-spacing`     | `0.12em`   | 页标题文字   |
| `letter-spacing`     | `0.1em`    | 菜单项标签   |
| `letter-spacing`     | `0.06em`   | 时间线日期   |
| `letter-spacing`     | `0.04em`   | Hero 标签    |
| `letter-spacing`     | `0.02em`   | Hero h1      |

---

## 3. 间距系统

### 3.1 常用 Padding 值

| 选择器              | 属性    | 值          | 场景         |
| ------------------- | ------- | ----------- | ------------ |
| `.top-nav`          | padding | `0 2rem`    | 导航栏水平内边距 |
| `.top-nav` (<=768px) | padding | `0 1.2rem`  | 移动端导航栏 |
| `.slide-inner`      | padding | `3rem 2rem` | 内容区域内边距 |
| `.slide-inner` (<=768px) | padding | `3rem 1.2rem` | 移动端内容区 |
| `.hero-content`     | padding | `2rem 1.5rem` | Hero 文字区 |
| `.about-card`       | padding | `1.5rem`    | About 卡片   |
| `.card-body`        | padding | `1.25rem`   | 项目卡片内容区 |
| `.card-tag`         | padding | `0.15rem 0.5rem` | 标签内边距 |
| `.nav-resume-btn`   | padding | `0.35rem 1rem` | 简历按钮 |
| `.nav-link`         | padding | `0 1rem`    | 导航链接 |
| `.nav-resume-btn` (<=768px) | padding | `0.25rem 0.7rem` | 移动端简历按钮 |
| `.coming-soon`      | padding | `2rem`      | Coming Soon 卡片 |
| `.site-footer`      | padding | `1rem 2rem` | Footer |

### 3.2 常用 Margin 值

| 选择器              | 属性    | 值          | 场景         |
| ------------------- | ------- | ----------- | ------------ |
| `.section-header`   | margin-bottom | `2.5rem` | 章节头部底部间距 |
| `.section-label`    | margin-bottom | `0.8rem` | 章节标签到标题 |
| `.ac-label`         | margin-bottom | `1rem` | 卡片标签到内容 |
| `.card-meta`        | margin-bottom | `0.5rem` | 卡片元信息到标题 |
| `.card-title`       | margin-bottom | `0.4rem` | 卡片标题到描述 |
| `.card-arrow`       | margin-top | `0.8rem` | 卡片箭头上间距 |
| `.card-tags`        | margin-top | `0.8rem` | 卡片标签上间距 |
| `.hero-tag`         | margin-bottom | `1.5rem` | Hero标签到副标题 |
| `.hero h1`          | margin-bottom | `1.2rem` | Hero标题到副标题 |
| `.hero .subtitle`   | margin-bottom | `2.5rem` | 副标题到数据区 |
| `.stat::after`      | margin | `0.5rem auto 0` | 数据分隔线 |
| `.stat-label`       | margin-top | `0.4rem` | 数据标签上间距 |
| `.timeline-item`    | margin-bottom | `1.2rem` | 时间线条目间距 |
| `.timeline`         | margin-top | `1rem` | 时间线上间距 |
| `.about-card li`    | margin-bottom | `0.5rem` | 列表项间距 |
| `.nav-links`        | margin-left | `3rem` | 导航链接左间距 |

### 3.3 内容区域最大宽度

| 选择器          | 属性       | 值        |
| --------------- | ---------- | --------- |
| `.slide-inner`  | max-width  | `1200px`  |
| `.hero-content` | max-width  | `720px`   |
| `.hero .subtitle` | max-width | `520px`   |

### 3.4 Gap（栅格/排列间距）

| 选择器           | 属性 | 值      |
| ---------------- | ---- | ------- |
| `.about-grid`    | gap | `1.5rem` |
| `.projects-grid` | gap | `1.5rem` |
| `.hero-stats`    | gap | `3rem`（桌面）/ `2rem`（<=768px）/ `1.5rem`（<=480px） |
| `.hero-carousel` | gap | `0.8rem` |
| `.hero-carousel-dots` | gap | `0.6rem` |
| `.card-tags`     | gap | `0.4rem` |
| `.menu-items`    | gap | `2rem`  |
| `.menu-item`     | gap | `2rem`  |
| `.section-label` | gap | `0.8rem` |
| `.ac-label`      | gap | `0.6rem` |
| `.scroll-hint-bar` | gap | `0.4rem` |

---

## 4. 布局参数

### 4.1 导航栏

| 属性             | 值                                  |
| ---------------- | ----------------------------------- |
| 高度             | `56px`                              |
| 定位             | `fixed`, top: 0, left: 0, right: 0 |
| z-index          | `200`                               |
| 背景             | `rgba(16, 16, 16, 0.92)` + `backdrop-filter: blur(16px)` |
| 底部边框         | `1px solid var(--rule)`            |
| 水平内边距       | `0 2rem`（桌面）/ `0 1.2rem`（移动端） |
| Logo 与链接间距  | `margin-left: 3rem`                 |

### 4.2 全屏翻页容器

| 属性             | 值                                          |
| ---------------- | ------------------------------------------- |
| 每页尺寸         | `100vw x 100vh`                              |
| 翻页过渡         | `transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)` |
| 性能优化         | `will-change: transform`                     |

### 4.3 各 Section 间距

| 场景                         | 值               |
| ---------------------------- | ---------------- |
| `.slide-inner` 垂直内边距    | `3rem` 上下      |
| `.section-header` 底部间距   | `2.5rem`         |
| Hero 内容区垂直居中          | `align-items: center; justify-content: center` |

### 4.4 卡片尺寸与圆角

| 组件                | 圆角       | 其他尺寸信息                       |
| ------------------- | ---------- | ---------------------------------- |
| `.project-card`     | `2px`      | 缩略图高度 `180px`（桌面）/ `150px`（<=768px） |
| `.about-card`       | `2px`      | 无固定高度                         |
| `.coming-soon`      | `2px`      | 无固定高度                         |
| `.nav-resume-btn`   | `2px`      | padding: `0.35rem 1rem`            |
| `.card-tag`         | `1px`      | padding: `0.15rem 0.5rem`          |

### 4.5 响应式断点

| 断点          | 变化                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------- |
| `<= 768px`    | 导航切换为汉堡菜单；About网格变为单列；项目网格变为单列；页码指示器缩小；卡片缩略图降低高度         |
| `<= 480px`    | Hero h1 固定为 `1.8rem`；数据统计间距缩小                                                          |

---

## 5. 动画参数

### 5.1 全局过渡参数

| 变量名   | 值                                        | 用途                   |
| -------- | ----------------------------------------- | ---------------------- |
| `--dur`  | `0.3s`                                    | 通用交互过渡时长       |
| `--ease` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)`   | 通用缓动函数          |

### 5.2 特殊缓动函数

| 缓动函数                                | 值                                        | 用途               |
| --------------------------------------- | ----------------------------------------- | ------------------ |
| 页面翻页                                | `cubic-bezier(0.65, 0, 0.35, 1)`         | `.page-slider` 过渡 |
| 进度条                                  | `cubic-bezier(0.65, 0, 0.35, 1)`         | `.progress-fill` 过渡 |
| 菜单遮罩                                | `opacity 0.6s, visibility 0.6s`          | `.menu-overlay` 过渡 |
| Hero轮播                               | `opacity 1.2s var(--ease)`               | Banner切换淡入淡出  |
| 缩略图悬浮                              | `transform 0.5s var(--ease), filter 0.5s var(--ease)` | 卡片图片悬浮放大  |

### 5.3 关键帧动画列表

| 动画名称              | 时长     | 缓动           | 应用场景                           | 描述                                                                                     |
| --------------------- | -------- | -------------- | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| `breath`              | 无固定   | --             | （已定义，未直接使用）              | 透明度 1->0.7, scale 1->0.98 的呼吸效果                                                 |
| `slideUp`             | `0.8s`   | `var(--ease)`  | `.hero-content`                     | 从下方 24px 滑入，透明度 0->1                                                           |
| `scrollHintBreathe`   | `2s`     | infinite 循环   | `.hint-down` / `.hint-up`          | 透明度 0->1->1->0，同时 translateY 0->0->0->8px 的呼吸滚动提示                          |
| `borderGlow`          | `4s`     | `ease-in-out` infinite | `.coming-soon`              | 边框色在 `--rule` 和 `--accent-dim` 之间交替变化                                         |
| `tagBreath`           | `4s`     | `ease-in-out` infinite | `.hero-tag`                | 透明度 1->0.75，边框色 `--accent`->`--accent-dim`，scale 1->0.98 的呼吸效果              |

### 5.4 交互过渡效果

| 交互场景                   | 过渡属性                               | 时长/缓动              |
| -------------------------- | -------------------------------------- | ---------------------- |
| 导航链接 hover              | `color`                                | `var(--dur) var(--ease)` |
| 导航链接下划线              | `transform scaleX(0->1)`               | `var(--dur) var(--ease)` |
| 简历按钮 hover              | `background, color`                    | `var(--dur) var(--ease)` |
| 卡片 hover 边框            | `border-color`                         | `var(--dur) var(--ease)` |
| 卡片 hover 上浮            | `transform translateY(-3px)`            | `var(--dur) var(--ease)` |
| 卡片顶部强调线             | `transform scaleX(0->1)`               | `var(--dur) var(--ease)` |
| 卡片缩略图放大             | `transform scale(1.04), filter`        | `0.5s var(--ease)`     |
| 卡片箭头间距               | `gap 0.5rem -> 0.8rem`                | `var(--dur) var(--ease)` |
| 轮播圆点                   | `background, width`                    | `var(--dur) var(--ease)` |
| 轮播箭头 hover             | `border-color, background`             | `var(--dur) var(--ease)` |
| 时间线节点 hover           | `background`（填充色变为 accent）       | `var(--dur) var(--ease)` |
| 汉堡菜单线条               | `transform 0.3s, opacity 0.3s`         | `0.3s`                  |

---

## 6. 组件规范

### 6.1 项目卡片（`.project-card`）

```
结构：.project-card > .card-thumb + .card-body
```

| 属性                 | 值                                   |
| -------------------- | ------------------------------------ |
| 背景                 | `var(--bg2)`                         |
| 边框                 | `1px solid var(--rule)`              |
| 圆角                 | `2px`                                |
| 溢出                 | `overflow: hidden`                   |
| 卡片网格最小宽度     | `minmax(320px, 1fr)`，自动填充       |
| 卡片网格间距         | `1.5rem`                             |

**Hover 效果：**
- 边框色变为 `var(--accent-dim)`
- 整体上浮 `translateY(-3px)`
- 顶部出现 2px 的 `var(--accent)` 强调线（从左到右 scaleX 展开）
- 缩略图放大至 `scale(1.04)` 并恢复饱和度
- 底部箭头间距从 `0.5rem` 扩大到 `0.8rem`

**缩略图（`.card-thumb`）：**
- 高度：`180px`（桌面）/ `150px`（<=768px）
- 背景：`var(--bg3)`
- 图片：`object-fit: cover`，默认 `filter: saturate(0.7)`

**内容区（`.card-body`）：**
- 内边距：`1.25rem`
- 元信息：`font-mono, 0.62rem, var(--accent)`
- 标题：`font-display, 1.05rem, font-weight: 700, var(--ink)`
- 描述：`0.8rem, var(--muted2), line-height: 1.6`
- 标签区上间距：`0.8rem`，标签间距 `0.4rem`
- 标签：`0.62rem, 1px border-radius, border: 1px solid var(--rule), var(--muted2)`

### 6.2 时间线（`.timeline`）

| 属性                     | 值                               |
| ------------------------ | -------------------------------- |
| 上间距                   | `margin-top: 1rem`               |
| 条目间距                 | `margin-bottom: 1.2rem`          |
| 左边距（轴线偏移）       | `padding-left: 2rem`            |
| 轴线样式                 | `border-left: 1px solid var(--rule)` |
| 节点尺寸                 | `7px x 7px`（旋转 45 度菱形）   |
| 节点边框                 | `2px solid var(--accent)`       |
| 节点背景                 | `var(--bg2)`（hover 时变为 `var(--accent)`） |
| 节点定位                 | `left: -4px, top: 0.4rem`       |
| 日期                     | `font-mono, 0.68rem, var(--accent), font-weight: 600` |
| 职位                     | `0.88rem, font-weight: 600, var(--ink)` |
| 公司描述                 | `0.78rem, var(--muted2), line-height: 1.5` |

### 6.3 Hero 区域

| 属性                     | 值                                       |
| ------------------------ | ---------------------------------------- |
| 定位                     | 全屏覆盖（`position: absolute; inset: 0`） |
| 文字区最大宽度           | `720px`                                  |
| 文字区内边距             | `2rem 1.5rem`                            |
| 文字对齐                 | `text-align: center`                      |
| 遮罩渐变                 | 顶部 bg->transparent 20%、底部 bg->transparent 30%、中心径向遮罩 80% |
| 视频透明度               | `opacity: 0.6, filter: saturate(0.8)`   |
| 入场动画                 | `slideUp 0.8s var(--ease) both`         |
| Hero标签（`.hero-tag`）  | `font-display, clamp(2.8rem, 7vw, 4.5rem), var(--accent), animation: tagBreath 4s ease-in-out infinite` |
| 数据统计排列             | `flex, justify-content: center, gap: 3rem` |

**轮播控件（`.hero-carousel`）：**
- 定位：距底部 `5rem`，水平居中
- 圆点：`24px x 2px`（active 态 `36px x 2px`，背景 `var(--accent)`）
- 箭头：`28px x 28px`，`1px solid var(--rule)` 边框
- 箭头悬浮：边框色 `var(--accent)`，背景 `rgba(255,250,0,0.1)`
- 自动轮播间隔：`12s`

### 6.4 导航栏

| 属性                   | 值                                              |
| ---------------------- | ----------------------------------------------- |
| 高度                   | `56px`                                          |
| Logo                   | `font-brand, 1.3rem, font-weight: 600, letter-spacing: 0.2em, text-transform: uppercase, var(--accent)` |
| 链接字号               | `0.82rem, font-weight: 600, letter-spacing: 0.08em, var(--muted2)` |
| 链接内边距             | `0 1rem`，高度 `56px`，垂直居中                 |
| 链接下划线             | 2px，`var(--accent)`，`scaleX(0->1)`，从 `left: 1rem` 到 `right: 1rem` |
| 链接 hover 色         | `var(--ink)`                                    |
| 链接 active 色        | `var(--accent)`                                 |
| 简历按钮               | `0.78rem, var(--accent)`，`1px solid var(--accent)` 边框，`border-radius: 2px` |
| 简历按钮 hover         | 填充 `var(--accent)`，文字变 `var(--bg)`        |
| 汉堡按钮（<=768px）    | 三条线，`24px x 2px`，间距 `5px`，颜色 `var(--ink)` |

### 6.5 页码指示器（`.page-indicator`）

| 属性             | 值                                          |
| ---------------- | ------------------------------------------- |
| 定位             | `fixed, right: 3rem, top: 50%`（translateY(-50%)） |
| z-index          | `100`                                       |
| 页码字号         | `font-mono, 3.5rem, font-weight: 700, var(--accent), opacity: 0.25` |
| 页码字号（移动端） | `2.5rem`                                    |
| 页标题字号       | `0.7rem, var(--muted2), letter-spacing: 0.12em` |

### 6.6 汉堡菜单面板（`.menu-overlay`）

| 属性             | 值                                          |
| ---------------- | ------------------------------------------- |
| 遮罩             | `rgba(16, 16, 16, 0.96)`，全屏覆盖          |
| z-index          | `250`                                       |
| 过渡             | `opacity 0.6s, visibility 0.6s`             |
| 菜单项间距       | `gap: 2rem`                                 |
| 编号             | `font-mono, 2rem, font-weight: 700, width: 3rem` |
| 标签字号         | `1.3rem, letter-spacing: 0.1em`              |
| 进度条位置       | `bottom: 3rem, width: 200px`                |
| 进度条高度       | `2px, var(--rule)` 轨道，`var(--accent)` 填充 |
| 进度标签         | `0.72rem, var(--muted2), letter-spacing: 0.08em` |

### 6.7 滚动提示栏（`.scroll-hint-bar`）

| 属性             | 值                                          |
| ---------------- | ------------------------------------------- |
| 定位             | `fixed, bottom: 2rem, left: 50%`（translateX(-50%)） |
| z-index          | `100`                                       |
| 交互             | `pointer-events: none`                      |
| 间距             | `gap: 0.4rem`                               |
| 动画             | `scrollHintBreathe 2s infinite`             |

### 6.8 Footer（`.site-footer`）

| 属性             | 值                                          |
| ---------------- | ------------------------------------------- |
| 定位             | `absolute, bottom: 0`                       |
| 上边框           | `1px solid var(--rule)`                     |
| 内边距           | `1rem 2rem`                                 |
| 布局             | `flex, justify-content: space-between`      |
| 背景             | `rgba(16, 16, 16, 0.9)`                     |
| z-index          | `5`                                         |
| 品牌字           | `font-brand, 0.9rem, font-weight: 600, letter-spacing: 0.18em, text-transform: uppercase, var(--accent)` |
| 版权字           | `font-mono, 0.65rem, var(--muted2), letter-spacing: 0.06em` |

---

## 7. 滚动条样式

| 属性         | 值                                    |
| ------------ | ------------------------------------- |
| 宽度         | `4px`（WebKit）/ `thin`（Firefox）   |
| 轨道         | `transparent`                         |
| 滑块         | `var(--rule)`，`border-radius: 2px`   |
| Firefox      | `scrollbar-color: var(--rule) transparent` |

---

## 8. 全局重置与基础

| 属性                            | 值                    |
| ------------------------------- | --------------------- |
| `box-sizing`                    | `border-box`          |
| `html font-size`                | `16px`                |
| `body font-family`              | `var(--font-body)`    |
| `body color`                    | `var(--muted)`        |
| `body background`                | `var(--bg)`           |
| `body line-height`              | `1.7`                 |
| `body overflow`                 | `hidden`              |
| `body width/height`             | `100%`                |
| `font-smoothing`                | `antialiased`         |
| 链接                            | `color: inherit; text-decoration: none` |
| margin/padding                  | 全局重置为 `0`         |

---

## 9. JavaScript 配置参数

| 变量名             | 值     | 用途           |
| ------------------ | ------ | -------------- |
| `TRANSITION_MS`    | `700`  | 翻页动画时长   |
| `WHEEL_THRESHOLD`  | `50`   | 滚轮翻页阈值   |
| `TOUCH_THRESHOLD`  | `60`   | 触摸翻页阈值   |
| `WHEEL_RESET_MS`   | `200`  | 滚轮重置间隔   |
| Banner 自动轮播   | `12000` (12s) | Hero轮播切换间隔 |
