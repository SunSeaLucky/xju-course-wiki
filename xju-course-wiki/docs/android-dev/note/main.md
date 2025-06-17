---
markmap:
    maxWidth: 500
---

<style>
/* 初始化各级计数器 */
body { counter-reset: h1; }
h1 { counter-reset: h2; }
h2 { counter-reset: h3; }
h3 { counter-reset: h4; }
h4 { counter-reset: h5; }
h5 { counter-reset: h6; }

/* 每碰到一个标题，就累加对应计数器 */
h1 { counter-increment: h1; }
h2 { counter-increment: h2; }
h3 { counter-increment: h3; }
h4 { counter-increment: h4; }
h5 { counter-increment: h5; }
h6 { counter-increment: h6; }

/* 在标题前插入数字，如 2.3.1 */
h2::before { content: counter(h2) " "; }
h3::before { content: counter(h2) "." counter(h3) " "; }
/* …依次类推到 h6 */
</style>
# Android 开发笔记

## 安卓系统及其开发过程<!-- markmap: fold -->

### Android 的系统架构

- 应用程序层
    - 电话拨号程序
    - 短信程序
    - 日历
    - 音乐播放器
    - 浏览器
    - 联系人管理程序
- 应用程序框架层
    - 活动页管理
    - 窗口管理
    - 内容供应
    - 视图系统
    - 包管理
    - 电话管理
    - 资源管理
    - 位置管理
    - 通知管理
- 系统运行库层
    - 程序库
    - Android 运行时库
        - 该核心库提供了 Java 编程语言核心库的大多数功能，Android 系统的 Dalvik 虚拟机也包含在该运行时库中
- Linux 核心层

### Android 开发分类

- 系统移植开发
- Android 应用程序开发

### Android 应用程序开发过程

- 在 Android Studio 集成环境中生成应用项目框架
- 修改或编写 XML 源程序
- 修改或编写 Java 源程序
- 调用模拟器运行应用程序

### Android 项目结构

- mainfests
    - mainfest：XML 文件的根节点，包含了 package 中的所有内容
    - xmlns:android：命名空间声明
    - package：应用的包名
    - uses-sdk：应用的目标 SDK 版本
    - application：声明一些全局属性，如标签、图标、必要的权限等
    - android:icon：应用的图标
    - android:label：应用的名称
    - activity：与用户交互的图形界面
    - android:name：默认启动的 Activity
    - intent-filter：声明一组组件支持的 intent 值
    - action：声明目标组件执行的 intent 动作
    - category：指定目标组件支持的 intent 类别
- java：源代码、测试代码
- res：资源目录，存储所有的资源
    - drawable：存放图片资源
    - layout：存放界面 XML 布局文件
    - mipmap：存放系统的图片资源
    - values：存放字符串、颜色、尺寸、数组、主题、类型等资源
    - raw：任意类型的文件，一般是音频、视频、图片、文档
    - assets：任意类型，与 raw 相比，**不会在 R 类中生成 id**
- values：存储 app 引用的信息
    - colors.xml：颜色定义
    - strings.xml：字符串定义
    - dimens.xml：存储了一些公用的 dip 值
    - styles.xml：样式定义
- Gradle Scripts：build.gradle 为项目的 gradle 配置文件

## Android 用户界面设计<!-- markmap: fold -->

### 用户界面设计和 View 类

- 应用界面由 **View** 类和 **ViewGroup** 对象构建
- ViewGroup 对象都是 View 类的子类
- View 类是所有可视化组件的共同父类
- View 类的常用属性和方法：
    - android:background、setBackgroundColor：设置背景颜色
    - android:id、setId：设置 View 的 id
    - android:alpha、setAlpha：设置 View 的透明度，取值范围为 0～1
    - android:view、findViewById：通过 id 获取 View 对象
    - android:visibility、setVisibility：设置组件的可见性
    - android:clickable、setClickable：设置组件是否可以点击

### Android 布局管理

- ContraintLayout
- LinearLayout
- FrameLayout。将组件放到左上角的位置，当添加多个组件时，**后面的组件将遮盖之前的组件**
- TableLayout。将页面划分成行列构成的单元格
    - 表格的列数由 android:shrinkColumns 指定
    - 表格的行数由 <TableRow></TableRow> 指定
- GridLayout。主要属性有
    - alignmentMode：指定组件的对齐方式
    - columnCount：指定列数
    - rowCount：指定行数
    - layout_columnSpan：设置组件占据列数
    - layout_rowSpan：设置组件占据行数

### 布局文件的重要属性

- 设置组件大小的单位
    - px：屏幕上的发光点
    - dp：设备独立像素，支持多分辨率的抽象单位
    - sp：比例像素

### Button

- java 的类都是 Object 类的子类，View 类也继承自 Object 类，TextView 类继承自 View 类，Button 类继承自 TextView 类

### 文本编辑框也继承自 View 类

- ![alt text](image.png)

### 列表组件类

- ![alt text](image-1.png)
- android.R.layout.simple_list_item_1：单一文本项
- android.R.layout.simple_list_item_2：一行 title，一行 text
- android.R.layout.simple_list_item_single_choice：单选列表项
- android.R.layout.simple_list_item_multiple_choice：多选列表项

## 多个用户界面的程序设计<!-- markmap: fold -->

### 页面切换与传递参数值

- Intent 的属性
    - 动作（Action）
    - 数据（Data）
    - 类别（Category）
    - 类型（Type）
    - 组件（Component）
    - 扩展数据（Extra）

### 在 Activity 之间传递数据

- Bundle 的方法
    - `putString`
    - `remove`
    - `getString`
- Intent 操作 Bundle 组件的方法
    - `getExtras`
    - `putExtras`

### 菜单设计

- 选项菜单
- 上下文菜单
- 子菜单

## 图形与多媒体处理

### 绘制几何图形

- Canvas
- Paint
- Path

### 简单的触摸屏事件

- MotionEvent.ACTION_DOWN：在屏幕上点击
- MOtionEvent.ACTION_UP：松开手指
- MotionEvent.ACTION_MOVE：移动手指

### 多媒体处理播放器

- MediaPlayer 
    - 常用方法
        - create() ：创建多媒体播放器
        - prepare() ：准备多媒体资源，进行同步处理
        - prepareAsync() ：准备多媒体资源，进行异步处理
        - release() ：释放资源
        - reset() ：重置播放器
        - seekTo() ：调整播放位置
        - setDataSource() ：设置多媒体资源路径
        - setOnCompletionListener() ：设置播放完成监听器
        - stop() ：停止播放
        - start() ：开始播放
        - pause() ：暂停播放
    - 生命周期
        - ![alt text](image-2.png)

## 后台服务与系统服务

### 后台服务

- 后台服务（Service）是一种类似于 Activity 的组件，但 Service 没有用户操作界面，也不能自己启动，主要作用是提供后台服务调用，即使用户关闭应用界面，Service 也不会停止。
- Service 的生命周期
    - onCreate()：创建 Service
    - onStartCommand()：启动 Service
    - onDestroy()：销毁 Service
- 常用方法
    - ![alt text](image-3.png)
- 一个服务只能创建一次、销毁一次，但可以开始多次
- 设置一个后合服务的应用程序大致有以下几个步骤
    - 创建 Service 的子类
        - 编写 onCreate 方法，创建后台服务:
        - 编写 onStartCommand 方法，启动后台服务:
        - 编写 onDestoy 方法，终止后台服务，并删除所有调用。
    - 创建启动和控制 Service 的 Activity：
        - 创建 Intent 对象，建立 Activity 与 Service 的关联:
        - 调用 Activity 的 startService(Intent)方法启动 Service 后台服务:
        - 调用 Activity 的 stopService(Intent)方法关闭 Service 后台服务、
    - 修改配置文件 AndroidManifest.xml。在配置文件 AndroidManifest.xml 的<application>标签中添加以下代码:`<service android:enabled=""true" android:name=".Audiosry" />`

## 网络通信

### Web 视图

- WebView 的常用方法
    - ![alt text](image-4.png)