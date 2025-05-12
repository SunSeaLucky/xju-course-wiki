# 编译原理笔记

## 引论

- 什么是编译程序：把一种语言（源语言）书写的程序翻译成另一种语言（目标语言）的等价程序。
- 编译过程

```mermaid
graph LR
A[源程序] --> B[词法分析]
B --> C[语法分析]
C --> D[语义分析]
D --> E[中间代码生成]
E --> F[代码优化]
F --> G[目标代码生成]
G --> H[目标程序]
```

## 文法和语言

### Preliminaries

- **文法**：四元组 $(V_N, V_T, P, S)$，其中 $V_N$ 为非终结符集合，$V_T$ 为终结符集合，$P$ 为产生式集合，$S$ 为开始符号。$V_N \cap V_T = \phi$，$V_N \cup V_T = V$，$V$ 为所有符号集合。
- **规则**（重写规则、产生式、生成式）：是形如 $\alpha \rightarrow \beta$ 或 $\alpha ::= \beta$ 的 $(\alpha, \beta)$ 有序对，其中 $\alpha$ 为产生式左部，$\beta$ 为产生式右部。$\alpha \rightarrow \beta$ 或 $\alpha ::= \beta$ 读作 *定义为* 。
- **直接推导**：设 $\alpha \to \beta$ 是文法 $G=(V_N, V_T, P, S)$ 的规则，$\gamma$ 和 $\delta$ 是 $V^*$ 中的任意符号，若有符号串 $v, w$ 满足$v = \gamma \alpha \delta,~w = \gamma \beta \delta$，即说 $v$ 直接产生 $w$，或说 $v$ 是 $w$ 的直接推导，或说 $w$ 直接归约到 $v$，记作 $v \Rightarrow w$。
- **多步推导 $(\geq 1)$**：$v \xRightarrow{+} w$
- **多步推导 $(\geq 0)$**：$v \xRightarrow{*} w$
- **句型**：设 $G[S]$ 是一个文法，如果符号串 $x$ 是从识别符号推导出来的，即有 $S \Rightarrow x$，则称 $x$ 是文法 $G[S]$ 的句型。
- **句子**：若 $x$ 仅由终结符号组成，即 $S \Rightarrow x, x \in V_T^*$，则称 $x$ 为 $G[S]$ 的句子。
- **语言**：文法 $G$ 所产生的语言定义为集合 $\{x \mid S \xRightarrow{*} x, \text{其中 } S \text{ 为文法识别符号, 且 } x \in V_T^*\}$。可用 $L(G)$ 表示该集合。
- **等价文法**：若 $L(G1)=L(G2)$，则称这两个文法是等价的。

### 文法的类型

- **0 型文法**：设 $G = (V_N, V_T, P, S)$，如果它的每个产生式 $\alpha \rightarrow \beta$ 是这样一种结构：$\alpha \in (V_N \cup V_T)^*$ 且至少含有一个非终结符，而 $\beta \in (V_N \cup V_T)^*$，则 $G$ 是一个 0 型文法。

!!! tip "0 型文法｜直观理解"

    对于产生式限制最少的文法，基本意思就你是个产生式就行。所以，$x(x\geq1)$ 型文法，也都是 0 型文法。

- **1 型文法**：设 $G = (V_N, V_T, P, S)$ 为一个文法，若 $P$ 中的每一个产生式 $\alpha \rightarrow \beta$ 均满足 $|\beta| \geq |\alpha|$，仅仅 $S \rightarrow \varepsilon$ 除外，则文法 $G$ 是 1 型或**上下文有关的**（context-sensitive）。

!!! tip "1 型文法｜直观理解"

    每一步推导都会导致串非严格递增。

- **2 型文法**：设 $G = (V_N, V_T, P, S)$，若 $P$ 中的每一个产生式 $\alpha \rightarrow \beta$ 满足：$\alpha$ 是一个非终结符，$\beta \in (V_N \cup V_T)^*$，则此文法称为 2 型的或**上下文无关的**（context-free）。

!!! tip "2 型文法｜直观理解"

    在 0 型文法上增加了限制条件，左边必须是非终结符。

- **3 型文法**：设 $G = (V_N, V_T, P, S)$，若 $P$ 中的每一个产生式的形式都是 $A \rightarrow aB$ 或 $A \rightarrow a$，其中 $A$ 和 $B$ 都是非终结符，$a \in V_T^*$，则 $G$ 是 3 型文法或正规文法。

!!! tip "3 型文法｜直观理解"

    在 2 型文法上增加了限制条件，右边必须是终结符或终结符加非终结符的形式。

    由于这样的形式，正规文法是**没有左递归**的。

### 上下文无关文法（2 型）文法及其语法树

- **最左推导**：如果在推导的任何一步 $\alpha \Rightarrow \beta$，其中 $\alpha$、$\beta$ 是句型，都是对 $\alpha$ 中的最左非终结符进行替换，则称这种推导为最左推导。
- **最右推导**（规范推导）：如果在推导的任何一步 $\alpha \Rightarrow \beta$，其中 $\alpha$、$\beta$ 是句型，都是对 $\alpha$ 中的最右非终结符进行替换，则称这种推导为最右推导。
- **右句型**（规范句型）：由规范推导所得的句型。

## 句型的分析