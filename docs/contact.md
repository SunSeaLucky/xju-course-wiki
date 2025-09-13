---
hide:
  - navigation
  - toc
---

# Wiki 的维护与传承

## 关于传承
2025 年 7 月 27 日，我从学长手中接过了本 Wiki。  
原本计划在 8 月中下旬更新与思政、数据结构和模拟电路相关的内容，但由于一些原因暂时搁置。  

## 关于维护
未来如果有时间，我会对 Wiki 进行前端美化，  
让它不仅仅是一份黑白文字的笔记，而是更加美观、易读的知识库。  

## 未来计划
后续的更新将基于个人的学习与探索，  
除了与课程直接相关的笔记，也可能加入一些实用、有趣的开发工具配置方法与学习经验。  

更新时间大致取决于我整理好相关内容笔记的进度。 
如果笔记内容足够多且体系庞大，可能会新开一个独立的 Wiki。  

!!!note "大体更新方向"
    - **WSL Ubuntu** 配置脚本（无需科学上网）  
    - **Notion** 在办公、笔记与学习中的应用（例如整理 Python 库函数，方便后续调用）  
    - **Vim 打造现代 IDE** 的完整实践（从最初使用 CLion、VSCode 等，到最终沉淀于 Vim）  
    - **深度学习** 的实践经验与心得（可能需要较长时间积累）  
    - **快速傅里叶变换** 的理解与实现  
    - **数论** 基础知识  
    - **大学物理实验课程** 中入门 Matlab 与 LaTeX 的方法  
    - **前端开发** 入门：HTML + CSS + JavaScript  
    - **Qt** 开发入门  

## 闲话

<style>
:root {
    --primary-color: #333;      /* 主色：深灰，用于标题、强调 */
    --accent-color: #666;       /* 辅助色：中灰 */
    --background-color: #fff;   /* 背景色：白色 */
    --text-color: #333;         /* 正文文字颜色 */
    --border-color: #e0e0e0;    /* 边框/分隔线颜色 */
    --hover-bg: #f5f5f5;        /* 悬停背景 */
    --shadow: rgba(0,0,0,0.08);  /* 阴影：浅黑 */
}
    .card {
        background: var(--background-color);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        padding: 16px;
        margin: 12px 0;
        transition: all 0.25s ease;
    }
    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 16px var(--shadow);
    }
    .card::before {
        content: "“";
        font-size: 3em;
        color: #ccc;
        position: absolute;
        left: 10px;
        top: -10px;
    }
</style>

<div class="card">
    <p style="text-indent: 2em;">若你觉得，当下“上课听一听、课后写作业、期末突击备考”的状态，能对得起十二年的寒窗，大可以继续这样；可 若你不想最后只攥着看似光鲜的绩点，却没半点真本事——不想在保研浪潮里焦虑迷茫，不想在考研与保研间反复挣扎，更不想未来工作时才遗憾“大学学的都用不上”，那便该早点清醒。</p>
</div>
## 更新日志
    | 版本 | 时间 | 内容 | 
    | ---- | ---- | ---- |
    | 1.0.0 |2025 年 9 月 9 日 | 对 Wiki 整体架构进行了重构，将原来较长的目录归类到各个标签；优化 Github 的自动部署机制。 | 
    | 1.0.1 | 2025 年 9 月 10 日 | 对首页 `index.md` 样式进行了彻底改写：使用 HTML 与 CSS 替代原有内容；添加了左侧目录栏，并优化了右侧内容的缩进与卡片样式。 |
    | 1.1.0 | 2025 年 9 月 10 日 | 新增副页(本页)。 |

