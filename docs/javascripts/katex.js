// docs/javascripts/katex.js
// 兼容 Material instant loading：每次 navigation 都在新 body 上渲染 KaTeX
document$.subscribe(({ body }) => {
  // renderMathInElement 来自 KaTeX 的 auto-render 插件
  if (typeof renderMathInElement === "function") {
    renderMathInElement(body, {
      delimiters: [
        { left: "$$",  right: "$$",  display: true },
        { left: "$",   right: "$",   display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  } else {
    // 如果 auto-render 尚未加载（极少见），延迟尝试一次（避免页面报错）
    setTimeout(() => {
      if (typeof renderMathInElement === "function") {
        renderMathInElement(body, {
          delimiters: [
            { left: "$$",  right: "$$",  display: true },
            { left: "$",   right: "$",   display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      } else {
        console.warn("KaTeX auto-render 未加载，无法渲染数学公式。");
      }
    }, 50);
  }
});

