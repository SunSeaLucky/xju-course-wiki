# Android 开发笔记

## 启动 Activity 的创建

在包名处 New 完一个 Activity 之后，需要在 AndroidManifest.xml 文件中注册，并在 MainActivity 中启动它。注意第一个是 ACTION，而第二个是 CATEGORY。

```xml
<activity android:name=".MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
```

## ListView 的使用

1. 在布局的 XML 文件中定义一个 ListView：

```xml
<ListView
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

2. 在 Activity（或 Fragment）中准备数据源：

```java
// 1) 查找 ListView
ListView listView = findViewById(R.id.my_list_view);

// 2) 构造数据源
List<String> data = Arrays.asList("苹果", "香蕉", "橙子", "西瓜");

// 3) 创建 ArrayAdapter（内置简单布局 android.R.layout.simple_list_item_1）
ArrayAdapter<String> adapter = new ArrayAdapter<>(
    this,
    android.R.layout.simple_list_item_1,
    data
);

// 4) 绑定 Adapter 到 ListView
listView.setAdapter(adapter);

// 5) 可选：设置点击监听
listView.setOnItemClickListener((parent, view, position, id) -> {
    String item = data.get(position);
    Toast.makeText(this, "你点了: " + item, Toast.LENGTH_SHORT).show();
});
```


