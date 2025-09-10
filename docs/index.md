---
hide:
  - navigation
  - toc
---

<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>XJU Course Wiki</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <style>
/* ======================= 全局变量（黑白灰配色）======================= */
:root {
    --primary-color: #333;      /* 主色：深灰，用于标题、强调 */
    --accent-color: #666;       /* 辅助色：中灰 */
    --background-color: #fff;   /* 背景色：白色 */
    --text-color: #333;         /* 正文文字颜色 */
    --border-color: #e0e0e0;    /* 边框/分隔线颜色 */
    --hover-bg: #f5f5f5;        /* 悬停背景 */
    --shadow: rgba(0,0,0,0.08);  /* 阴影：浅黑 */
}

    /* ======================= !!!note样式 ======================= */
    .admonition {
        border: 2px solid;
        border-radius: 6px;
        margin: 1em 0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        font-size: 0.95em;
        overflow: hidden;
    }

    .admonition-title {
        margin: 0;
        padding: 10px 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
    }

    .admonition p {
        margin: 0;
        padding: 10px 14px;
    }

    /* === info 信息框 === */
    .admonition.info {
        border-color: #00b8d4;
    }
    .admonition.info .admonition-title {
        background: #e5f8fb;
        color: #000;
    }

    /* === warning 警告框 === */
    .admonition.warning {
        border-color: #ff9100;
    }
    .admonition.warning .admonition-title {
        background: #fff4e5;
        color: #000;
    }

    /* === success 成功框 === */
    .admonition.success {
        border-color: #00c853;
    }
    .admonition.success .admonition-title {
        background: #e5f9ed;
        color: #000;
    }

    /* ======================= 基础样式 ======================= */
    body { /* 页面主体 */
        font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
        background: var(--background-color);
        color: var(--primary-color);
        line-height: 1.6;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3 {
        font-weight: 500;
        color: var(--primary-color);
    }

    a {
        font-size: 1.2em
            color: var(--primary-color);
        text-decoration: none;
        transition: all 0.2s ease;
    }
    a:hover {
        color: var(--accent-color);
    }

    p, li {
        font-size: 1.2em
    }

    /* ======================= 主标题（XJU Course Wiki）======================= */
    .main-title {
        text-align: center;
        font-size: 2.8em;
        margin: 20px 0;
        font-weight: 700;
        color: var(--primary-color);
        position: relative;
    }
    .main-title::after { /* 主标题下方灰条 */
        content: '';
        display: block;
        width: 100px;
        height: 4px;
        background: #ccc;
        margin: 10px auto 0;
        border-radius: 2px;
    }

    /* ======================= 网格布局 ======================= */
    .grid-container { /* 左右两栏布局容器 */
        display: grid;
        grid-template-columns: 260px 1fr;
        gap: 24px;
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }

    /* ======================= 左侧导航容器 ======================= */
    .tab-container {
        background: var(--background-color);
        border-radius: 12px;
        box-shadow: 0 8px 32px var(--shadow);
    }

    /* 隐藏 radio */

    /* 标签（如 通识选修课  */
    .toggle {
        display: block;
        padding: 10px 14px;
        margin: 6px 0;
        font-weight: 500;
        font-size: 1.3em;
        color: var(--text-color);
        cursor: pointer;
        border-radius: 6px
            border-bottom: 1px solid var(--border-color);
        transition: all 0.25s ease;
    }
    .toggle:hover { /* 悬停时微微放大 */
        transform: scale(1.05);
        box-shadow: 0 2px 6px var(--shadow);
    }

    /* 标签内容区 */
    .tab-content {
        display: none;
        padding: 20px;
    }
    .tab-input { display: none; }
    .tab-input:checked + .toggle { /* 选中时高亮 */
        font-weight: 700;
        transform: scale(1.02);
        box-shadow: 0 2px 8px var(--shadow);
        transition: all 0.25s ease;
    }
    .tab-input:checked + .toggle + .tab-content {
        display: block;
    }

    /* ======================= 课程卡片（左侧内容）======================= */
    .course-card {
        font-size: 1.2em;
        display: block;
        background: var(--background-color);
        border-radius: 12px;
        padding: 5px 20px;
        margin: 15px 0;
        text-decoration: none;
        color: var(--text-color);
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px var(--shadow);
    }
    .course-card:hover { /* 悬停时高亮 */
        border-color: var(--primary-color);
        transform: translateY(-5px);
        box-shadow: 0 12px 24px var(--shadow);
        color: var(--primary-color);
    }
    .course-icon { /* 卡片里的图标（emoji） */
        font-size: 2em;
        margin-bottom: 10px;
        display: inline-block;
    }

    /* ======================= 小节标题（右侧内容）======================= */
    .section-title {
        font-size: 1.8em;
        margin: 20px 0 15px;
        padding-left: 15px;
        color: var(--primary-color);
    }

    /* ======================= 右侧概览区 ======================= */
    .overview-section {
        background: var(--background-color);
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 4px 20px var(--shadow);
    }
    .overview-section strong { color: var(--primary-color); }
    .overview-section p { color: var(--text-color); }

    /* ======================= 资源列表 & 引用框 ======================= */
    .resource-list {
        list-style: none;
        padding: 0;
    }
    .resource-list li {
        margin: 10px 0;
    }
    .resource-list a {
        text-decoration: none;
        color: var(--primary-color);
        position: relative;
    }
    .resource-list a:hover {
        color: var(--accent-color);
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

    /* ======================= 响应式 ======================= */
    @media (max-width: 1024px) {
        .grid-container {
            grid-template-columns: 1fr;
        }
    }
        </style>
    </head>
    <body>
            <div class="grid-container">
                <!-- 左侧：课程导航 -->
                <div class="tab-container">
                    <h2 class="section-title">📚 课程导航</h2>
                    <input type="radio" name="course-tabs" id="tab1" class="tab-input" checked>
                    <label for="tab1" class="toggle">理论基础课</label>
                    <div class="tab-content">
                        <a href="docs/discrete-math/intro/main.md" class="course-card">
                            <span class="course-icon">📐</span>
                            <span class="course-title">离散数学</span>
                        </a>
                        <a href="docs/linear-algebra/intro/main.md" class="course-card">
                            <span class="course-icon">📏</span>
                            <span class="course-title">线性代数</span>
                        </a>
                    </div>

                    <input type="radio" name="course-tabs" id="tab2" class="tab-input">
                    <label for="tab2" class="toggle">通识必修课</label>
                    <div class="tab-content">
                        <a href="docs/xi-mind/intro/main.md" class="course-card">
                            <span class="course-icon">📖</span>
                            <span class="course-title">习概</span>
                        </a>
                        <a href="docs/mao-mind/intro/main.md" class="course-card">
                            <span class="course-icon">📚</span>
                            <span class="course-title">毛概</span>
                        </a>
                    </div>

                    <input type="radio" name="course-tabs" id="tab3" class="tab-input">
                    <label for="tab3" class="toggle">编程/数据/开发</label>
                    <div class="tab-content">
                        <a href="docs/database/intro/main.md" class="course-card">
                            <span class="course-icon">🗄️</span>
                            <span class="course-title">数据库</span>
                        </a>
                        <a href="docs/python/intro/main.md" class="course-card">
                            <span class="course-icon">🐍</span>
                            <span class="course-title">Python</span>
                        </a>
                        <a href="docs/linux/intro/main.md" class="course-card">
                            <span class="course-icon">🐧</span>
                            <span class="course-title">Linux</span>
                        </a>
                        <a href="docs/assembly-language/intro/main.md" class="course-card">
                            <span class="course-icon">⚙️</span>
                            <span class="course-title">汇编语言</span>
                        </a>
                        <a href="docs/android-dev/intro/main.md" class="course-card">
                            <span class="course-icon">📱</span>
                            <span class="course-title">Android 开发</span>
                        </a>
                        <a href="docs/emb-linux/intro/main.md" class="course-card">
                            <span class="course-icon">🔧</span>
                            <span class="course-title">嵌入式</span>
                        </a>
                    </div>

                    <input type="radio" name="course-tabs" id="tab4" class="tab-input">
                    <label for="tab4" class="toggle">408课程</label>
                    <div class="tab-content">
                        <a href="docs/principles-of-computer-composition/intro/main.md" class="course-card">
                            <span class="course-icon">💻</span>
                            <span class="course-title">计算机组成原理</span>
                        </a>
                        <a href="docs/computer-operating-system/intro/main.md" class="course-card">
                            <span class="course-icon">🖥️</span>
                            <span class="course-title">计算机操作系统</span>
                        </a>
                    </div>

                    <input type="radio" name="course-tabs" id="tab5" class="tab-input">
                    <label for="tab5" class="toggle">理论课程</label>
                    <div class="tab-content">
                        <a href="docs/algorithm/intro/main.md" class="course-card">
                            <span class="course-icon">📊</span>
                            <span class="course-title">算法设计与分析</span>
                        </a>
                        <a href="docs/software-engineering/intro/main.md" class="course-card">
                            <span class="course-icon">⚙️</span>
                            <span class="course-title">软件工程</span>
                        </a>
                        <a href="docs/compile-theory/intro/main.md" class="course-card">
                            <span class="course-icon">🔄</span>
                            <span class="course-title">编译原理</span>
                        </a>
                    </div>

                    <input type="radio" name="course-tabs" id="tab6" class="tab-input">
                    <label for="tab6" class="toggle">硬件与信号</label>
                    <div class="tab-content">
                        <a href="docs/circuits-analog-electronics/intro/main.md" class="course-card">
                            <span class="course-icon">🔌</span>
                            <span class="course-title">电路与模电</span>
                        </a>
                        <a href="docs/signal-analysis/intro/main.md" class="course-card">
                            <span class="course-icon">📡</span>
                            <span class="course-title">信号与系统分析基础</span>
                        </a>
                    </div>
                </div>

                <!-- 右侧：概述内容 -->
                <div class="overview-section">
                    <h2 class="section-title">📌 重要</h2>

                    <div class="admonition info">
                        <p class="admonition-title">ℹ️ 绝对避雷</p>
                        <ul>
                            <li><strong>丁东风（计算机学院）</strong> ← 事情贼多，给分非常低。但是确实有点东西，不过只有一点</li>
                            <li><strong>秦继伟（计算机学院）</strong> ← 爱装，实际啥也不懂，连一点东西都没有，同样事情多，给分贼低</li>
                            <li><strong>李延冰（计算机学院）</strong> ← 喜欢虐待、阴阳、辱骂学生，给分贼低</li>
                            <li><strong>范永强（数学院）</strong> ← 事情不算多，给分很低</li>
                        </ul>
                    </div>

                    <div class="admonition warning">
                        <p class="admonition-title">📋 声明</p>
                        <p>这里是个人创建创建的课程资料 Wiki，任何内容<strong>不代表新疆大学立场</strong>，<strong>均为本人胡言乱语</strong>，仅供参考。<br>
                        本站任何资料、内容如有侵权，请立即联系本人删除：<strong>sunsealucky@qq.com</strong>。</p>
                    </div>

                    <h2 class="section-title">🔗 推荐资源</h2>
                    <div style="margin-left: 20px;">
                        <p style="text-indent: 2em;">因众所周知的原因，我无法给大家介绍更多除课程以外的知识与技巧。<strong>如果你的目标不是寻找课程资源，请查看下面的推荐资源部分</strong>。下面的每一本手册都值得你细细体会，希望学弟、学妹们可以规划好自己的大学生涯。</p>

                        <div class="resource-list" style="margin-left: 1em">
                            <ol>
                                <li><a href="https://github.com/Indolent-Kawhi/XJU-Computing-Heart" target="_blank">新疆大学 · 期末资料仓库</a></li>
                                <li><a href="https://csdiy.wiki/" target="_blank">北京大学 · CS 自学指南</a></li>
                                <li><a href="https://sustech-application.com/" target="_blank">南方科技大学 · 经验分享网</a></li>
                                <li><a href="https://survivesjtu.gitbook.io/survivesjtumanual" target="_blank">上海交通大学 · 生存手册</a></li>
                                <li><a href="https://qsctech.github.io/zju-icicles/" target="_blank">浙江大学 · 课程攻略共享计划</a></li>
                            </ol>
                        </div>
                    </div>

                    <h2 class="section-title">📖 如何使用</h2>
                    <div style="margin-left: 20px;">
                        <p style="text-indent: 2em;">本站核心内容有两块，一个是对课程的大致介绍，帮助你选择自己喜欢的老师；二是面向期末的笔记总结。这里主要针对第二部分进行补充，<strong>由于这里的笔记都是我个人的总结，面向的人肯定只有我自己，只是顺便开放</strong>。不过，我非常推荐你查看<strong>笔记（导图版）</strong>，这是原 Markdown 笔记的导图形式，能够帮助你快速梳理整本书的知识体系！</p>
                        <p style="text-indent: 2em;">本站的主要任务是帮助你选择一个 <strong>正常人</strong>（这很重要）作为你的课程老师，次要任务是帮助你对课程去魅。</p>
                    </div>

                    <h2 class="section-title">⚖️ 刑不可知，则威不可测</h2>

                    <h2 class="section-title">💭 闲话</h2>
                    <div class="info-box card">
                        <p style="text-indent: 2em;">试问谁不想在课堂上和那么多优秀的同学济济一堂，热烈讨论呢？谁不想遇到问题直接找老师答疑解惑呢？谁不想辛苦学习的成果可以直接化作学校承认的学分绩点呢？可如果一个兢兢业业、按时到堂的学生收获的却是痛苦，而那个一学期只有考试会出席的学生却学得自得其乐，这公平吗？我不知道。</p>

                        <p style="text-indent: 2em;">我只是不甘，不甘心这些通过高考战胜无数人进入高校的学子本可以收获一个更快乐的本科生涯，但现实却留给了他们遗憾。我反问自己，本科教育究竟应该带给我们什么呢？是学完所有这些课程吗？倒也未必，它也许只适合我这种nerd。但我觉得，<strong>本科教育至少得展现它应有的诚意，一种分享知识的诚意，一种以人为本的诚意，一种注重学生体验的诚意。它至少不应该是一种恶意，一种拼比知识的恶意，一种胜者为王的恶意，一种让人学无所得的恶意</strong>。但这一切能改变吗？我不知道。</p>

                        <p><em>—— 选自 <a href="https://csdiy.wiki/%E5%90%8E%E8%AE%B0/" target="_blank">CS 自学指南</a></em></p>
                    </div>

                    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border-color);">
                        <script src="https://giscus.app/client.js"
                                data-repo="SunSeaLucky/xju-course-wiki"
                                data-repo-id="R_kgDONf4gSg"
                                data-category="Announcements"
                                data-category-id="DIC_kwDONf4gSs4ClXwK"
                                data-mapping="pathname"
                                data-strict="0"
                                data-reactions-enabled="1"
                                data-emit-metadata="0"
                                data-input-position="bottom"
                                data-theme="light"
                                data-lang="zh-CN"
                                crossorigin="anonymous"
                                async>
                        </script>
                    </div>
                </div>
            </div>

        <script>
            // 添加页面加载动画
            window.addEventListener('load', function() {
                            document.body.style.opacity = '0';
                            setTimeout(() => {
                                            document.body.style.transition = 'opacity 0.5s ease';
                                            document.body.style.opacity = '1';
                                        }, 100);
                        });
        </script>
    </body>
</html>
