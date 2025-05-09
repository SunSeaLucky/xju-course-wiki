# 离散数学笔记

## 1 命题逻辑

### 1.2 命题公式及分类

- 一个 $n(n\geq 1)$ 阶的笛卡尔积 ${0,1}^n$ 到 ${0,1}$ 的函数称为一个 $n$ 元真值函数，记作 $F: \{0,1\}^n \rightarrow \{0,1\}$

### 1.3 等值演算

这里只给出等值演算中比较容易忘记的公式：

- 德摩根律
- 分配律的逆运用
- 归谬论

### 1.4 范式

- 简单析取式：仅由有限个命题变项或其否定构成的析取式
- 简单合取式：仅由有限个命题变项或其否定构成的合取式
- 析取范式：仅由有限个简单合取式构成的析取式
- 合取范式：仅由有限个简单析取式构成的合取式
- 极小项：在简单合取式中，每个命题变项与其否定有且仅有一个出现一次
- 主析取范式：析取范式中的简单合取式都是极小项
- 极大项：在简单析取式中，每个命题变项与其否定有且仅有一个出现一次
- 主合取范式：合取范式中的简单析取式都是极大项

### 1.5 联结词全功能集

至少有非和*且与或*中的一个，就可以构成全功能集

## 2 一阶逻辑

### 2.1 一阶逻辑基本概念

**定义**

- 个体常项：表示具体的个体的词
- 个体变项：泛指的个体的词
- 个体域：个体变项的取值范围
- 全总个体域：宇宙间的一切事物
- 谓词常项：表示具体的关系的谓词
- 谓词变项：表示泛指的关系的谓词
- 元数：谓词中包含的个体词数
- $n$ 元谓词：元数是 $n$ 的谓词
- 0元谓词：不带个体变项的谓词
- 量词：表示数量的词
- 全称量词
- 存在量词

### 2.2 一阶逻辑合式公式及解释

- 在合式公式 $\forall xA$ 和 $\exist xA$ 中，称 $x$ 为**指导变项**，$A$ 为相应量词的**辖域**，在辖域中，$x$ 的所有出现称为**约束出现**，$A$ 中不是约束出现的其它变项称为**自由出现**
- **换名规则**：将一个指导变项及其在辖域中所有约束出现替换成公式中没有出现的个体变项符号。

### 2.3 一阶逻辑等值式与前束范式

- 量词否定等值式（很重要！）
>
>1. $\neg \forall A(x)\Leftrightarrow\exist x\neg A(x)$
>2. $\neg \exist xA(x)\Leftrightarrow\forall x\neg A(x)$

- 量词辖域收缩与扩张等值式

>**口诀**
>
>所有的蕴含化析合取，再用量词否定等值式

>**给老子注意一百遍**
>
>量词的辖域在收缩或者扩张时，要注意 $\neg$ 的影响，而 $\neg$ 很有可能藏在蕴含表达式中让你忘记它在，导致我们以为没有 $\neg$ 从而可以随意进行量词辖域的收缩和扩张。

- 量词分配等值式

$\forall x(A(x)\land B(x))\Leftrightarrow \forall(x) A(x)\land \forall(x) B(x)$

$\exist x(A(x)\lor B(x))\Leftrightarrow \exist(x) A(x)\lor \exist(x) B(x)$

>**注意**
>
>任意量词对于析取不能等值分配，存在量词对于合取不能等值分配

为什么要学这个，这个是为了前束范式做准备的，知道这些才可以化前束范式。

## 3 集合的基本概念和运算

### 3.1 集合的基本概念

- 需要明确集合是**不能精确定义**的数学概念，一般认为一个集合指的是**一些可确定的、可分辨的事物构成的整体**。

- 如果连个集合互相包含，则这两个集合相等
- 空集是一切集合的子集
- 空集是唯一的
- 集合 $A$ 的全体子集构成的集合称做 $A$ 的**幂集**

### 3.2 集合的基本运算

相对补集：$B$ 对 $A$ 的相对补集是 $A-B$
绝对补集：$\sim A=E-A$
对称差：$A\oplus B=A\cup B-A\cap B$

- 若 $A\oplus B=A\oplus C$，则 $B=C$
- 若 $A-B=A-C$，$B$ 不一定等于 $C$
- 若 $B-A=C-A$，$B$ 不一定等于 $C$

### 3.3 集合中元素的计数

**主要考点：容斥原理**

主要公式：在全集 $E$ 至少具有一条性质的元素数是$\overline{A_1 \cup A_2\cup ... \cup A_n}$

$=|E|-|\overline{A_1 \cup A_2\cup ... \cup A_n}|$
$=|E|-|\bar{A_1} \cap \bar{A_2}\cap ... \cap\bar{A_n}|$
$=\sum^m_{i=1}|A_i|-\sum_{1\leq i<j\leq m}|A_i\cap A_j|+\sum_{1\leq i<j<k\leq m}|A_i\cap A_j\cap A_k|$
$-...+(-1)^{m+1}|A_1\cap A_2\cap ...\cap A_m|$

## 4 二元关系和函数

### 4.1 集合的笛卡尔积与二元关系

**定义**

- 设 $A, B$ 为集合，用 $A$ 中元素为第一元素，$B$ 中元素为第二元素，构成有序对，所有这样有序对组成的集合称作 $A$ 和 $B$ 的笛卡尔积，记作 $A\times B$ 。能够看出：若 $<x, y> \in A\times B$，则有 $x\in A$ 和 $y\in B$。若 $<x,y>\notin A\times B$，则有 $x\notin A$ 或 $y\notin B$。
- 笛卡尔积对并补运算满足分配律

$\begin{aligned}A\times(B\cup C)&=(A\times B)\cup(A\times C);\\(B\cup C)\times A&=(B\times A)\cup(C\times A);\\A\times(B\cap C)&=(A\times B)\cap(A\times C);\\(B\cap C)\times A&=(B\times A)\cap(C\times A).\end{aligned}$

- 如果一个集合为空集或者它的元素都是有序对，则称这个集合是一个二元关系，一般记作 $R$，对于二元关系 $R$，如果 $<x,y>\in R$，则记作 $xRy$，如果 $<x,y>\notin R$，则记作 $xRy$。
- 全域关系 $E_A=\{<x,y>|x\in A\land y\in A\}A\times A$
- 恒等关系 $I_A=\{<x,x>|x\in A\}$
- 整除关系提一嘴，$x|y$ 代表 $y=kx(k\in Z)$
- 关系矩阵
- 关系图

### 4.2 关系的运算

**定义**

- 定义域：$domR$
- 值域：$ranR$
- 域 $(domR \cup ranR)$：$fldR$
- 逆：记作 $F^{-1},F^{-1}=\{<x,y>|yFx\}$
- 合成：$F\circ G,\{<x,y>|\exist z(xGz\land zFy)\}$
- 限制：这个上半箭头实在打不出来呜呜呜，$F限制A=\{<x, y>|xFy\land x\in A\}$
- 像：$F[A]=ran(F限制A)$
- 运算性质：

$\begin{aligned}&(1)(F^{-1})^{-1}=F;\\&(2)\mathrm{dom}F^{-1}=\mathrm{ran}F,\mathrm{ran}F^{-1}=\mathrm{dom}F;\\&(3)(F\circ G)\circ H=F\circ(G\circ H);\\&(4)(F\circ G)^{-1}=G^{-1}\circ F^{-1}.\end{aligned}$
$(5)(F\cup G)^{-1}=F^{-1}\cup G^{-1}\\(6)(F\cap G)^{-1}=F^{-1}\cap G^{-1}\\(7)(F\times G)^{-1}=G\times F$
$(8)F\circ (G\cup H)=F\circ G\cup F\circ H$
$(9)F\circ (G\cap H)\subseteq F\circ G\cap F\circ H$
$(10)(G\cup H)\circ F= G\circ F\cup H\circ F$
$(11)(G\cap H)\circ F\subseteq G\circ F\cap H\circ F$

- $R$ 关系的 $n$ 次幂：
（1）$R^0=\{<x,x>|x\in A\}$
（2）$R^n=R^{n-1}\circ R,n \leq 1$

### 4.3 关系的性质

- 自反性：如果图中有顶点，则每个顶点都有环
- 反自反性：如果图中有顶点，则每个顶点都没有环
- 对称性：如果两个顶点直接有边，一定是一对方向相反的边
- 反对称性：如果两个顶点之间有变，一定是一条有向边
- 传递性：如果顶点 $A$ 到 $B$ 有边，$B$ 到 $C$ 有边，那么顶点 $A$ 到 $C$ 一定有边

|运算|自反性|反自反性|对称性|反对称性|传递性|
|-|-|-|-|-|-|
|$R^{-1}$|保持|保持|保持|保持|保持|
|$R_1\cap R_2$|保持|保持|保持|保持|保持|
|$R_1\cup R_2$|保持|保持|保持|不保持|不保持|
|$R_1-R_2$|不保持|保持|保持|保持|不保持|
|$R_1\circ R_2$|保持|不保持|不保持|不保持|不保持|

### 4.4 关系的闭包

**求闭包**
$r(R)=R\cup R^0$
$s(R)=R\cup R^{-1}$
$t(R)=R\cup R^2\cup ... \cup R^n$

**性质**
$s(r(R))=r(s(R))$
$r(t(R))=t(r(R))$
$t(s(R))=s(t(R))$

### 4.5 等价关系和偏序关系

**定义**

- 等价关系：设 $R$ 是 $A$ 上的关系，如果 $R$ 是自反的、对称的和传递的，则称 $R$ 为 $A$ 上的等价关系，记作 $x\sim y$。
- 等价类：$A$ 上互相等价的元素构成了 $A$ 的若干个子集，称作等价类。
- 商集：本质即求集合 $A$ 在关系 $R$ 下的所有等价类。
- **划分**：设 $A$ 是一个非空集合，如果存在一个 $A$ 的子集族 $\pi(\pi\subseteq P(A))$ 要满足以下条件：
>
>1. $\emptyset \in \pi$
>2. $\pi$ 中任意两元素不相交
>3. $\pi$ 中所有元素的并集等于 $A$ ，则称 $\pi$ 为 $A$ 的一个划分，且称 $\pi$ 中的元素为划分块
>
- 偏序关系：设 $R$ 是 $A$ 上的关系，如果 $R$ 是自反的、反对称的和传递的，则称 $R$ 为 $A$ 上的偏序关系，记作 $\preceq$。
- 偏序集：一个关系 $A$ 与 $A$ 上的偏序关系 $R$ 一起称作偏序集，记作 $<A,R>$
- 可比：如果在集合 $A$ 中的关系 $R$ 上，两个元素存在偏序关系，则两个元素可比。
- 盖住：在两个元素可比的前提下，如 $x\preceq y$，不能存在第三个元素被夹在它俩中间，称 $y$ 盖住 $x$
- 全序集：$A$ 中的任意两元素之间都可比，称 $<A,\preceq>$ 为全序集
- 最小元：**小于等于**所有 $A$ 中的元素的元素
- 最大元：**大于等于**所有 $A$ 中的元素的元素
- 极小元：不存在一个元素比它小的元素
- 极大元：不存在一个元素比它大的元素

举例：河南省高考满分750，该省份最高分731，最低分26；江苏省满分480，该省份最高分472，最低分68。

这两个集合中**没有最大元和最小元**，因为存在不可比关系，无法说两个省份中，哪个分数最高，哪个分数最低。

这两个集合中**有极大元和极小元**，极大元是：731，472；极小元是：26，68

通过这个例子我们可以总结：

- 最大元或最小元可能存在或不存在，存在则唯一
- 非空有穷偏序集一定存在极大元，可能多个
- 孤立结点既是极大元，也是极小元

**哈斯图**
**具体画法见教材93页，此处是考点！**

基本画法很简单：如果 $y$ 盖住 $x$，就在 $x$ 和 $y$ 之间连一条线。

### 4.6 函数的定义和性质

需要知道：

- 单射：每个自变量对应的因变量都不同
- 满射：所有的因变量都被自变量对应着
- 双射=满射＋单射

### 4.7 函数的复合和反函数

## 5 图的基本概念

### 5.1 无向图及有向图

无向图和有向图的概念十分显然，这里不再赘述，而是记录下与其相关的概念。

**定义**

- $n$ 阶图：有 $n$ 个顶点的图
- 零图：没有一条边的图
- 平凡图（一阶零图）：只有一个顶点、没有边的图
- 关联：两个顶点之间有边，称这两个顶点关联，同时这两个点也是相邻的
- 孤立点：无边关联的顶点
- 环：和自己关联的点形成的边
- 度数：针对某个点，和这个点连接的边的数量称为该点的度数
- 出度：从该点出发的边
- 入度：以该点结束的边
- 悬挂顶点：度数为1的顶点
- 悬挂边：悬挂顶点关联的边
- 最大度：所有顶点中，度数的最大值，记作 $\Delta (G)$
- 最小度：所有定点中，度数的最小值，记作 $\delta (G)$
- 最大出度：$\Delta ^+(D)$
- 最大入度：$\Delta ^-(D)$
- 最小出度：$\delta ^+(D)$
- 最小入度：$\delta ^-(D)$
- **握手定理**：**所有顶点度数和=2\*总边数**
- **握手定理推论一**：**奇度点个数为偶数**
- **握手定理推论二**：**所有点的入度和=所有点的出度和=边数**
- 生成子图：$G'\subseteq G,~V'=V$，称 $G'$ 是 $G$ 的生成子图
- 导出子图（第一种）：锁定点，边随便，记作 $G[V_1]$
- 导出子图（第二种）：锁定边，点随便，记作 $G[E_1]$
- 补图：锁定点，边取补集（图中有边则去，无边则加）
- 同构：两个图本质上相同，想成两个线和球连成的玩具，你随便摆弄摆弄能摆弄成一样的图形，就说明它俩是同构的。

### 5.2 通路、回路和图的连通性

- 长度：（这里放长度是因为这里所说的长度和我们狭义理解的长度略有不同）通路中边的数目
- 简单通路：所有边互不相同
- 初级通路（或路径）：简单通路的所有顶点互不相同
- 初级回路（或圈）：起点和终点相同的初级通路
- 在一个 $n$ 阶图中，若从顶点 $u$ 到 $v(u\neq v)$ 存在通路，则两点间一定存在长度 $\leq n-1$ 的初级通路
- 在一个 $n$ 阶图中，若从顶点 $v$ 到自身的回路，则一定存在长度 $\leq n$ 的初级回路
- 连通图：无向图的任意两点都连通，或有向图略去各有向边的方向后得到的无向图的任意两点都连通
- 非连通图：不满足连通图的条件
- 连通分支：锁定点的导出子图
- $p(G)$：连通分支的个数
- 单向连通图：有向图中任意顶点至少一个可达另一个
- 强连通图：有向图中任意顶点都是互相可达的

### 5.3 图的矩阵表示

#### 无向图的关联矩阵

- **列为顶点，行为边**，$m_{ij}=\begin{cases}0,顶点与边不关联 \\1，关联一次\\2，关联两次 \end{cases}$

- 关联矩阵的每一列恰好有两个1或者一个2
- 第 $i$ 行元素之和为 $v_i$ 的度数，$\sum_{j=1}^mm_{ij}=d(v_i)$
- 所有元素之和为 $2m$

#### 有向图的关联矩阵

$m_{ij}=\begin{cases}1,点为边的始点 \\0，不关联\\-1，点为边的终点 \end{cases}$

- 每列恰好有一个1和一个-1
- 第 $i$ 行1的个数等于 $d^+(v_i)$，-1的个数等于 $d^-(v_i)$，整个矩阵中1的个数等于-1的个数等于边数

记作 $M(D)$

#### 有向图的邻接矩阵

行列都是点，$a_{ij}$ 代表点 $v_i$ 与 $v_j$ 之间的**边数**。记作 $A(D)$

> **注意**
>
> 如果图中没有自环，则主对角线全为 0 。

#### 有向图的可达矩阵

行列都是点，$a_{ij}$ 代表点 $v_i$ 与 $v_j$ 之间的**是否可达**（1代表可达，0代表不可达）。

记作 $P(D)$

## 6 特殊的图

### 6.1 二部图

- 一个无向图 $G=<V,E>$ 是二部图当且仅当 $G$ 中**没有长度为奇数的回路**

- 一个无向图 $G=<V,E>$ 中的边的边子集 $M$ ，其中的任意两条边都不相邻，称 $M$ 是**匹配**
- 若在匹配中再加一条边一定会导致其不是匹配了，称这样的匹配是**极大匹配**
- 匹配中的边数最多时，称为**最大匹配**
- 设 $v$ 是*匹配所在的图*中的一个点，若这个点在匹配中的某条边上，称 $v$ 是 $M(匹配名称)$ **饱和点**，否则称为 $M(匹配名称)$ **非饱和点**
- 若图中的所有顶点都是它的某个匹配的 $M$ 饱和点，则称该匹配为**完美匹配**
- 二部图中被划分的点数较少部分形成的最大匹配称为**完备匹配**

可恶的匹配判断法：

|匹配类型|二部图|边的子集|加边非匹配|边数|饱和点|
|-|-|-|-|-|-|
|匹配|不管|**必须是**|不管|不管|不管|
|极大匹配|不管|必须是|**必须是**|不管|不管|
|最大匹配|不管|必须是|不管|**匹配中最大**|不管|
|完美匹配|不管|必须是|不管|不管|**点都在**|
|完备匹配|必须是|必须是|不管|匹配中最大|**二部图中少的一半**|

- $Hall$ 定理：二部图中存在完备匹配，当且仅当二部图中点数少的一半中的*每个点*可分别各自邻接到另一半的不同点上（类似于单射）

### 6.2 欧拉图

|满足条件|欧拉回路|欧拉通路|叫做|
|-|-|-|-|
|无向图：连通无奇度点，有向图：连通，入=出|是|是|欧拉图|
|无向图：有且仅有两奇度点，有向图：连通，两点特殊，其余入=出|否|是|半欧拉图|

### 6.3 哈密顿图

|满足条件|哈密顿回路|哈密顿通路|叫做|
|-|-|-|-|
|$n\leq$任意不邻点对的度和|是|是|哈密顿图|
|$n-1\leq$ 任意不邻点对的度和$<n$|否|是|半哈密顿图|

## 7 树

### 7.1 无向树及生成树

- **最最重要的一点**：$m=n-1$，$m$ 是边数，$n$ 代表点数
- 不含回路的连通无向图称为**无向树**，简称树，每个连通分支均是树的非连通无向图称为**森林**，平凡图称为**平凡树**，度数为1的点称为**树叶**，度数大于等于2的点称为**分支点**。
- $n$ 阶非平凡的树中至少有2片树叶
- 生成树：树的生成子图，且仍为树
- 树枝：生成树的边
- 弦：不在树枝中的但在树中的边
- 余树：所有弦和集合的导出子图