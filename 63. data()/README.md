我用**非常通俗的话**帮你把 `.data()` 讲明白👇

---

## 一句话理解

👉 `.data()` 就是：**给 DOM 元素“偷偷存数据 / 取数据”的工具**

你可以把它理解成：

> 给 HTML 元素挂一个“隐藏的小仓库”，随时往里面存东西、拿东西。

---

## 一、它是干嘛的？

平时你操作 DOM，比如：

```html
<div id="box"></div>
```

你可能需要给这个 div 绑定一些数据，比如：

- 用户信息
- 状态值
- 临时变量

👉 `.data()` 就是专门干这个的。

而且这些数据：

- 不会直接出现在 HTML 里
- 不影响页面结构
- 也不会造成内存泄漏（jQuery帮你处理了） ([jQuery API Documentation][1])

---

## 二、最常用的 3 种用法

### 1️⃣ 存数据

```js
$("#box").data("name", "张三");
```

👉 意思：给 #box 存一个数据
👉 key = "name"，value = "张三"

---

### 2️⃣ 取数据

```js
$("#box").data("name");
```

👉 结果：

```js
"张三";
```

---

### 3️⃣ 一次存多个

```js
$("#box").data({
  age: 18,
  gender: "男",
});
```

---

### 4️⃣ 取全部数据

```js
$("#box").data();
```

👉 返回：

```js
{
  name: "张三",
  age: 18,
  gender: "男"
}
```

---

## 三、核心理解（很重要）

### ✅ 数据是“绑定在元素上的”

```js
$("#box").data("count", 1);
```

👉 不是全局变量，而是：

👉 “这个元素专属的数据”

---

### ✅ 可以存任何类型

```js
.data("num", 100)
.data("obj", {a:1})
.data("arr", [1,2,3])
```

👉 除了 `undefined` 都可以 ([jQuery API Documentation][1])

---

### ✅ 不会影响 HTML

```html
<div id="box"></div>
```

执行：

```js
$("#box").data("name", "张三");
```

👉 HTML 不会变成：

```html
<div data-name="张三"></div>
❌（不会这样）
```

👉 `.data()` 是存在 **内存里，不是 DOM 属性里**

---

## 四、和 `data-*` 属性的关系

HTML 可以写：

```html
<div id="box" data-age="18"></div>
```

然后：

```js
$("#box").data("age"); // 18
```

👉 jQuery 会自动读取 `data-*` 属性 ([jQuery API Documentation][1])

而且会自动转换类型：

| HTML值    | JS结果       |
| --------- | ------------ |
| "18"      | 18（数字）   |
| "true"    | true（布尔） |
| '{"a":1}' | 对象         |

---

## 五、一个形象例子

想象：

```html
<li id="item"></li>
```

你可以这样：

```js
$("#item").data("selected", true);
```

👉 相当于给这个元素贴了个“标签”：

> ✔ 已选中

之后：

```js
if ($("#item").data("selected")) {
  console.log("已选中");
}
```

---

## 六、常见坑（帮你避雷）

### ❌ 1. `.data()` ≠ 修改 HTML 属性

如果你想改：

```html
data-age="18"
```

👉 要用：

```js
.attr("data-age", 20)
```

---

### ❌ 2. key 会自动驼峰

```js
.data("my-name", "test")
```

👉 实际变成：

```js
myName;
```

👉 jQuery 3 之后的规则 ([jQuery API Documentation][1])

---

### ❌ 3. 不能用于某些标签

比如：

```html
<object>
  <embed />
</object>
```

👉 `.data()` 不支持 ([jQuery API Documentation][1])

---

## 七、总结（重点记住）

👉 `.data()` = 给元素绑定“隐藏数据”

✔ 用来存：

- 状态
- 临时数据
- 关联对象

✔ 特点：

- 不影响 HTML
- 可以存任意类型
- 按元素独立存储
- 比全局变量更安全
