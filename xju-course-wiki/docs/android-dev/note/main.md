# Android 开发笔记

## 第一章｜安卓系统及其开发过程

不用想你都知道这 sb 课本上又在说什么，发展啦之类的无用玩意。

## 第二章｜安卓用户界面设计

### 启动 Activity 的创建

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


## 第三章｜多个用户界面的程序设计

### 页面之间的跳转

1. 跳过去

保证 Activity 均已被注册：

```xml
<activity
    android:name=".MainActivity2"
    android:exported="false" />
<activity
    android:name=".MainActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
    </intent-filter>
</activity>
```

```java
Intent intent = new Intent(MainActivity.this, MainActivity2.class);
startActivity(intent);
```

2. 跳回来

```java
finish();
```

3. 带参数

发送参数

```java
Intent intent = new Intent(MainActivity.this, MainActivity2.class);
Bundle bundle = new Bundle();
bundle.putString("t", "test");
intent.putExtras(bundle);
startActivity(intent);
```

接收参数

```java
Intent intent = this.getIntent();
Bundle bundle = intent.getExtras();
bundle.getString("t");
```

### 右上角菜单

重写 onCreateOptionsMenu() 和 onOptionsItemSelected() 方法

```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
    menu.add(1, 1, 1, "c");
    menu.add(1, 2, 2, "b");
    menu.add(2, 3, 4, "b");
    return super.onCreateOptionsMenu(menu);
}

@Override
public boolean onOptionsItemSelected(@NonNull MenuItem item) {
    return super.onOptionsItemSelected(item);
}
```

### Context 菜单

重写 onCreateContextMenu() 和 onContextItemSelected() 方法

```java
@Override
public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
    super.onCreateContextMenu(menu, v, menuInfo);
    menu.setHeaderTitle("cn");
    menu.add(1, 1, 1, "b");
    menu.add(1, 2, 2, "b");
}

@Override
public boolean onContextItemSelected(@NonNull MenuItem item) {
    Log.i(TAG, String.format("onContextItemSelected: %d", item.getItemId()));
    return super.onContextItemSelected(item);
}
```

为需要该菜单的组件注册

```java
registerForContextMenu(view);
```

### 对话框

```java
AlertDialog.Builder dialog = new AlertDialog.Builder(MainActivity.this);
dialog.setTitle("title");
dialog.setMessage("message");
dialog.setPositiveButton("ok", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        dialog.cancel();
    }
});
dialog.create();
dialog.show();
```