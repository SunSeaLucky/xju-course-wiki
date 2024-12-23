# 线性代数复习材料

## 1 矩阵

### 1.1 矩阵的基本概念

#### 矩阵的概念

定义：由 $m\times n$ 个数 $a_{ij}$ 按一定的次序排列成的 $m$ 行 $n$ 列的表。

#### 几种特殊矩阵

- 零矩阵
- 对角矩阵
- 数量矩阵
- 单位矩阵
- 三角矩阵
- **行最简矩阵**

### 1.2 矩阵的基本运算

#### 矩阵的乘法

$c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+...+a_{is}b_{sj}=\sum\limits_{k=1}^sa_{ik}b_{kj}$

简单来说，**左行遍历乘右列**。

性质：

- 只有当左边矩阵 $A$ 的列数等于右边矩阵 $B$ 的行数时，乘积 $AB$ 才有意义。
- 当 $AB$ 有意义时， $AB$ 的行数和 $A$ 的行数相等， $AB$ 的列数与 $B$ 的列数相等。
- 矩阵的乘法不一定满足交换律。
- 两非零矩阵的乘积可能为 $O$ 。
- 消去律不成立。
- 结合律： $(AB)C=A(BC)$ 。
- 分配律： $A(B+C)=AB+AC$ ， $(B+C)A=BA+CA$ 。
- $k(AB)=(kA)B=A(kB)$ 。
- 如果 $AB=BA$ ，称 $A, B$ **可交换**。
- $A^kA^l=A^{k+l},(A^k)^l=A^{kl}$ 。
- 若 $A, B$ 可交换，则 $(A+B)^n=\sum\limits^n_{i=0}C^i_nA^iB^{n-i}$ 。

#### 矩阵转置

把矩阵 $A=(a_{ij})_{m\times n}$ 的行依次换成同序数的列，得到的 $n\times m$ 矩阵为其转置（按照主对角线镜像翻转）。

性质：

- $(A^T)^T=A$
- $(A+B)^T=A^T+B^T$
- $(kA)^T=kA^T$
- $(AB)^T=B^TA^T$
- 若 $A^T=A$ ，则 $A$ 为对称矩阵， $A^T=-A$ 则 $A$ 为反对称矩阵。

### 1.3 分块矩阵

#### 基本运算

**乘法**：与矩阵乘法相同。

**转置**：分别**等于每个分块**矩阵的转置。

### 1.4 初等变换与初等矩阵

#### 初等变换

- 对换变换
- 倍乘变换
- 倍加变换

性质：

- 矩阵 $A$ 可以经过**有限次**初等变换化为矩阵 $B$ ，称 $A$ 与 $B$ **等价**。
- 任意矩阵 $A$ 可以经过**有限次**初等变换化为行最简矩阵。
- 对于矩阵 $A$ ，施加行变换，相当于左乘矩阵 $P$ ；施加列变换，相当于右乘矩阵 $Q$ 。

### 1.5 方阵的逆矩阵

**定义**：实际上就是矩阵的*倒数*，可以视为四大基本运算（加、减、乘、除）中的除法运算。

**性质**：

- 若 $A$ 是可逆矩阵，则 $A$ 的逆矩阵是**唯一**的，记作 $A^{-1}$ 。
- 并非所有非零方阵都是可逆的。
- 如果一个矩阵中存在零行，则一定不可逆。
- $(A^{-1})^{-1}=A$
- $(A^T)^{-1}=(A^{-1})^T$
- $(kA)^{-1}=k^{-1}A^{-1}$
- $(AB)^{-1}=B^{-1}A^{-1}$
- $(A_1...A_m)^{-1}=A^{-1}_m...A^{-1}_1$
- 初等矩阵都可逆（啥是初等矩阵？考试考的必然都是，故不用管），其逆矩阵都是初等矩阵。
- 方阵 $A$ 为可逆矩阵的充要条件是 $A$ 可以写为**初等矩阵的乘积**。
- 方阵 $A$ 为可逆矩阵的充要条件是 $A$ 可以经过**初等行变换化为单位矩阵**。

**重点**：求逆矩阵的两种方法

1. $(A, E)^T$经过初等行变换化为$(E, A^{-1})$。
2. 求出矩阵 $A$ 的伴随矩阵 $A^*$，乘以 $\frac{1}{D}$ （ $D$ 是矩阵 $A$ 的行列式的值）。

### 1.6 方阵的行列式

**定义**：矩阵映射出的一个数值，有着特殊的计算方法。

**余子式**：把 $n$ 阶行列式 $|A|$ 中的元素 $a_{ij}$ 所在的第 $i$ 行与第 $j$ 列删去后，剩下 $n-1$ 阶行列式称为元素 $a_{ij}$ 的余子式，记作 $M_{ij}$ 。
**代数余子式**：即 $A_{ij}=(-1)^{i+j}M_{ij}$

**重点**：计算行列式的值

1. 计算二阶行列式：主对角线乘积减去次对角线乘积。
2. 计算三阶行列式：和上面的方法有异曲同工之妙，可以把矩阵的第一列和最后一列连接起来，就像一张纸左右连接后*卷*起来一样，继续分别计算主对角线乘积减去次对角线乘积，这种方法称为*对角线法则*。
3. 按照某一行（列）展开，等于这一行（列）**各个元素**的**余子式**之和。在实际计算中，最好把这一行（列）的元素尽量化为 $0$ 。

**性质**：

- 上（下）三角行列式：行列式的值等于对角线元素之积。
- $|A|=|A^{T}|$
- 施加一次对换变换，行列式的值与原来相反。
- 行列式有两行（列）的元素成比例，行列式的值为零。
- $|AB|=|A||B|$
- $\sum^n_{k=1}a_{ik}A_{jk}=\delta_{ij}D,\sum^{n}_{k=1}a_{ki}A_{kj}=\delta_{ij}D,\delta_{ij}=\begin{cases}1,i=j \\ 0,i\neq j\end{cases}$
- $Vandermonde$ 行列式： $\begin{array}{|ccccc|} 1&1&1&...&1 \\ x_1&x_2&x_3&...&x_n \\ .&.&.& &. \\ .&.&.& &. \\ .&.&.& &. \\ x_1^{n-1}&x_2^{n-1}&x_3^{n-1}&...&x_n^{n-1} \end{array}=\Pi_{1\leq i<j\leq n} (x_j-x_i)$

- $n$ 阶（说明是方阵）矩阵可逆的充要条件是 $|A|\neq 0$ 。
- 如果 $|A|\neq 0$ 且 $n\geq 2$ ，则 $A^{-1}=\frac{1}{|A|}A^*$ 。
- 分块对角阵可逆的充要条件是，其每个分块阵都可逆。
- $Cramer$ 法则： $x_j=\frac{1}{D}(b_1A_{1j}+b_2A_{2j}+...+b_nA_{nj})=\frac{D_j}{D}$ （注意是代数余子式）。

### 1.7 矩阵的秩

**定义**： $A$ 中所有不为零的子式的最高阶数，记作 $r(A)$ 。

**性质**：

- 对于方阵，可逆、非奇异、满秩是等价概念。
- 对行阶梯形矩阵，秩就是非零行数。
- 初等变换不改变矩阵的秩。
- $r(A)=r(A^T)$
- 若矩阵 $A, B$ 等价，则 $r(A)=r(B)$
- 设 $A$ 为 $s\times m$ 矩阵， $B$ 为 $s\times n$ 矩阵，则 $max\{r(A), r(B)\}\leq r(A, B)\leq r(A)+r(B)$
- 设 $A, B$ 为 $m\times n$ 矩阵，那么 $r(A+B)\leq r(A)+r(B)$
- 设 $A$ 为 $s\times n$ 矩阵， $B$ 为 $n\times t$ 矩阵，则 $r(AB)\leq min\{r(A),r(B)\}$

## 2 $n$维向量及其运算

$n$ 维向量的概念、运算性质与矩阵类似，故这里不再赘述。

### 2.1 & 2.2

**定义**：$n$ 维向量 $\alpha_1, \alpha_2, ... , \alpha_s$ 所对应的矩阵的秩称为这个向量组的秩。

**性质**：

- 如果向量组 $\alpha_1, \alpha_2, ... , \alpha_s$ 的秩小于 $s$，则称向量组 $\alpha_1, \alpha_2, ... , \alpha_s$ 是线性相关的，否则称是线性无关的。
- 向量组 $\alpha_1, \alpha_2, ... , \alpha_s$ 是线性相关的当且仅当 $\alpha_1^T, \alpha_2^T, ... , \alpha_s^T$ 是线性相关的。
- 由一个向量构成的向量组是线性相关的当且仅当这个向量为零向量。
- 由两个向量构成的向量组是线性相关的当且仅当这两个向量的分量成比例。
- 当 $s>n$ 时，任意 $s$ 个 $n$ 维向量一定线性相关。
- 同一个矩阵中，行向量组和列向量组可能分别线性相关性不同。（即行向量组是线性相关的，列向量组是线性无关的；或行向量组是线性无关的，列向量组是线性相关的）
- 如果向量组 $A$ 可以由向量组 $B$ 线性表示，则 $r(A)\leq r(B)$ 。

### 2.3 向量组线性相关性的等价刻画

#### 等价刻画 1

- $n$ 维向量组 $\alpha_1, \alpha_2, ... , \alpha_s$ 是线性相关的充要条件是存在不全为零的数 $k_1, k_2, ... ,k_s$，使得 $k_1\alpha_1, k_2\alpha_2, ... , k_s\alpha_s=0$

- 推论：向量组 $\alpha_1, \alpha_2, ... , \alpha_s$ 是线性无关的当且仅当由  $k_1\alpha_1, k_2\alpha_2, ... , k_s\alpha_s=0$ 可以推出 $k_1, k_2, ... ,k_s$ 全为零。

#### 等价可画 2

- 向量组 $\alpha_1, \alpha_2, ... , \alpha_s$ 线性相关当且仅当在 $\alpha_1, \alpha_2, ... , \alpha_s$ 中存在一个向量 $a_j$，使得 $a_j$ 可以由其余 $s-1$ 个向量线性表示。

### 2.4 向量组的极大线性无关组

概念不再赘述，直接理解为矩阵的最小生成元集即可。

**性质**：

- 向量组的任意任意两个极大无关组中含有的向量个数相同，都等于这个向量组的秩。
- 向量组 $A$ 的秩为 $r_1$，向量组 $B$ 的秩为 $r_2$，则向量组 $A, B$ 的秩不超过 $r_1+r_2$。

### 2.5 向量空间

**向量空间的概念**: 设 $V$ 为 $\R$ 的非空子集，若对任意 $\alpha, \beta \in V$ 及实数 $k$ ，有 $$\alpha + \beta \in V,k\alpha \in V$$，则称 $V$ 是 $\R^n$ 的子空间。

为什么这么定义？主要是为了定义封闭性，使得简单运算都无法突破维度。（只要关于 $V$ 的数乘运算不封闭，$V$ 就不是向量空间）

**向量的基和维数**：
如果向量空间 $V$ 中 $\alpha_1, \alpha_2, ... , \alpha_s$ 满足其线性无关且 $V$ 中每个向量均可由这 $s$ 个向量表示，则称 $\alpha_1, \alpha_2, ... , \alpha_s$ 为向量空间 $V$ 的一组**基**。

向量空间 $V$ 中的一组基中向量的个数 $s$ 代表该向量空间的**维数**，记为 $s=\dim V$ 。

实际上，$\dim V=r(\exist x,~x\in V)$

### 2.6 内积与正交矩阵

#### $n$ 维向量的内积

内积怎么积的不再赘述，只说性质：

- $<a, b>=a^Tb$
- $<a+b, c>=<a, c>+<b, c>$
- $\|a\|=\sqrt{<a, a>}$ (代表 $a$ 的长度)
- 若 $a, b$ 不均为零，则夹角定义为 $\arccos \frac{<a, b>}{\|a\|\|b\|}$
- $\|a\|\geq 0$
- $\|a+b\|\leq\|a\|+\|b\|$

#### 施密特正交化方法

正交过程：
$b_1=a_1$
$b_2=a_2-\frac{<a_2, b_1>}{<b_1,b_1>}b_1$
$b_3=a_3-\frac{<a_3,b_2>}{<b_2,b_2>}b_2-\frac{<a_3,b_1>}{<b_1,b_1>}b_1$

#### 正交矩阵

**定义**：如果 $n$ 阶实矩阵 $A$ 满足 $A^TA=E$，则称 $A$ 是正交矩阵，简称正交阵。

- $n$ 阶实矩阵 $A$ 是正交矩阵当且仅当 $A$ 的行向量组是 $\R^n$ 的标准正交基， 当且仅当 $A$ 的列向量组是 $\R^n$ 的标准正交基。

若 $A$ 是正交矩阵，则:

- $|A|=\pm1$
- $A^T=A^{-1}$ 也是正交阵
- 若 $B$ 是正交阵，则 $AB$ 也是正交阵

## 3 线性方程组

### 3.1 线性方程组和高斯消元法

**定义**

- 方程组对应的齐次线性方程组，称为**导出组**
- 如果线性方程组有解，称方程组**相容**，否则称为**不相容**
- 高斯消元法，写出增广矩阵，化为行阶梯矩阵即可看出解
- 如果有些方程组，方程组的数量少于未知数的数量，那么将会存在**自由未知量**，自由未知量的个数 $n$= 未知数的数量 - 方程组数量。可以任意选定 $n$ 个 $x_i$ 作为自由未知量

### 3.2 齐次线性方程组

**定义**

- $Ax=0$ 的每个解向量都可由 $\eta_1, \eta_2, ..., \eta_n$ 表示，且 $\eta_1, \eta_2, ..., \eta_n$ 线性无关，则称 $\eta_1, \eta_2, ..., \eta_n$ 是 $Ax=0$ 的基础解系

**性质**

- 齐次线性方程组有非零解当且仅当系数矩阵 $A$ 的秩小于未知量的个数 $n$
- 任意含 $n$ 个未知量 $s$ 个方程的齐次线性方程组一定有非零解，若 $s < n$
- 如果 $A$ 是方阵，则齐次线性方程组 $Ax=0$ 有非零解的充要条件是行列式 $|A|=0$
- 若 $\eta_1, \eta_2$ 都是齐次线性方程组 $Ax=0$ 的解，则 $\eta_1+\eta_2$ 也是 $Ax=0$ 的解
- 若 $\eta$ 是齐次线性方程组 $Ax=0$ 的解， $k\in \R$，则 $k\eta$ 也是 $Ax=0$ 的解
- 设含 $n$ 个未知量的齐次线性方程组 $Ax=0$ 的系数矩阵 $A$ 的秩为 $r$ ，若 $r<n$，则 $Ax=0$ 的任一基础解系中均含有 $n-r$个解向量
- 设 $A_{m\times n}$的秩为$r$，则 $Ax=0$ 的任意 $n-r$ 个线性无关的解都是其基础解系

### 3.3 非齐次线性方程组的相容性

**性质**

- 线性方程组有解当且仅当其系数矩阵 $A$ 与增广矩阵 $(A, b)$ 有相同的秩
- 若 $\gamma_1, \gamma_2$ 都是线性方程组 $Ax=b$ 的解，则 $\gamma_1-\gamma_2$ 是其导出组 $Ax=0$ 的解
- 若 $\gamma$ 是线性方程组 $Ax=b$ 的解，$\eta$ 是其导出组 $Ax=0$ 的解，则 $\gamma+k\eta~(k\in \R)$ 是 $Ax=b$ 的解
- 设 $\gamma_0$ 为线性方程组 $Ax=b$ 的特解，$\eta_1, \eta_2,...,\eta_{n-r}$ 是其导出组 $Ax=0$ 的基础解系，则 $Ax=b$ 的通解可以写成$x=\gamma_0+k_1\eta_1+...+k_{n-r}\eta_{n-r}$，这样的解称为**一般解**
- 初等行变换不改变矩阵的的列向量间的线性关系
- 判断非齐次线性方程组解的情况的方法：
**无解**：系数矩阵的秩**不等于**增广矩阵的秩
**唯一解**：系数矩阵的秩**等于**增广矩阵的秩**等于**未知变元的个数n
**无穷解**：系数矩阵的秩**等于**增广矩阵的秩且**均小于方**程组中未知数个数n

## 4 矩阵的特征值和特征向量

### 4.1 相似矩阵**定义**

- $A, B$ 为 $n$ 阶矩阵，若存在可逆矩阵 $P$ ，使得 $P^{-1}AP=B$，则称 $A$ 与 $B$ 是**相似**的，记作 $A\sim B$
- 设 $A$ 与 $B$ 相似，$f(x)$ 是一个多项式，那么 $f(A)$ 与 $f(B)$ 相似
- 相似矩阵的行列式相等
- 设 $A, B$ 均为 $n$ 阶矩阵，$k\in \R$，则$tr(A+B)=tr(A)+tr(B), tr(kA)-k\times tr(A),tr(AB)=tr(BA)$
- 相似矩阵有相同的迹

### 4.2 特征值与特征向量

**定义**

- 若存在实数 $\lambda$ 和非零向量 $\xi$ 满足 $A\xi=\lambda\xi$ ，则称 $\lambda$ 为 $A_{n\times n} $的一个特征值，称 $\xi$ 为 $A$ 的属于特征值 $\lambda$ 的特征向量
- $\lambda E-A$ 为 $A$ 的特征方程
**性质**
- 相似矩阵有相同的特征多项式，因此有相同的特征值
- 设 $n$ 阶矩阵 $A=a_{ij}$ 的特征值为 $\lambda_1,...,\lambda_n$，则$\sum_{i=1}^n\lambda_i=tr(A)$，且 $\Pi_{i=1}^n\lambda_i=|A|$
- $n$ 阶矩阵 $A$ 可逆的充要条件为 $A$ 中的每个特征值均非零
- $n$ 阶矩阵 $A$ 与它的转置矩阵 $A^T$ 有相同的特征值

### 4.3 矩阵可相似对角化的条件

**性质**

- 不同特征值对应的特征向量一定线性无关
- 若 $n$ 阶矩阵 $A$ 有 $n$ 个特征值，则 $A$ 一定可相似对角化

### 4.4 实对称阵的相似对角化

- 实对称阵的特征值为实数
- 实对称阵 $A$ 的属于不同特征值的特征向量是正交的

## 5 二次型

实在写不动了，这章不难内容也少，自己看书吧宝贝儿 ~
