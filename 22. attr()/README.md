我用**最通俗的话**帮你把 `.attr()` 一次讲明白（面试 + 实战都够用）👇

---

# 一、.attr() 是干嘛的？

一句话：

👉 **用来“获取”或“设置”HTML标签的属性**

比如 HTML：

```html
<img id="img1" src="a.jpg" alt="图片" />
```

这些 `src`、`alt`、`id` 就叫 **属性（attribute）**

---

# 二、最核心的两种用法

## 1️⃣ 获取属性（读）

```js
$("img").attr("src");
```

👉 含义：
获取 **第一个 img 的 src 属性**

📌 注意：

- 只会拿到**第一个元素的值** ([jQuery API][1])
- 返回的是字符串

✔ 举例：

```js
var url = $("#img1").attr("src");
console.log(url); // a.jpg
```

---

## 2️⃣ 设置属性（写）

```js
$("img").attr("src", "b.jpg");
```

👉 含义：
把所有 img 的 src 改成 b.jpg

✔ 举例：

```js
$("#img1").attr("alt", "新图片");
```

---

# 三、进阶用法（面试常考）

## 3️⃣ 一次设置多个属性

```js
$("#img1").attr({
  src: "b.jpg",
  alt: "新图",
  title: "标题",
});
```

👉 一次改多个属性（很常用）

---

## 4️⃣ 用函数动态设置

```js
$("img").attr("title", function (i, oldVal) {
  return oldVal + " - 新内容";
});
```

👉 每个元素可以算出不同值

---

## 5️⃣ 删除属性

```js
$("#img1").attr("title", null);
```

或：

```js
$("#img1").removeAttr("title");
```

👉 属性直接删掉 ([jQuery API][1])

---

# 四、重点理解：attr vs prop（高频坑）

这个必须搞懂👇

## 举个例子（checkbox）

```html
<input type="checkbox" checked />
```

### ❌ 用 attr

```js
$(elem).attr("checked");
```

👉 返回：**初始值（不会变）**

---

### ✅ 用 prop（推荐）

```js
$(elem).prop("checked");
```

👉 返回：**当前状态（会变）**

---

### 总结一句话：

| 方法      | 作用                 |
| --------- | -------------------- |
| `.attr()` | 操作 HTML 写死的属性 |
| `.prop()` | 操作 JS 实时状态     |

📌 官方结论：
👉 checked / selected / disabled 一律用 `.prop()` ([jQuery API][1])

---

# 五、你可以这样理解（最通俗版）

把 HTML 元素想象成一个人：

- `.attr()` 👉 身份证（出生就写好的）
- `.prop()` 👉 当前状态（会变化）

比如：

| 属性    | attr         | prop         |
| ------- | ------------ | ------------ |
| checked | 初始是否勾选 | 当前是否勾选 |

---

# 六、常见使用场景

✔ 获取 id / class

```js
$(this).attr("id");
```

✔ 获取自定义属性

```html
<div data-id="123"></div>
```

```js
$("div").attr("data-id");
```

✔ 修改图片路径

```js
$("img").attr("src", "new.jpg");
```

---

# 七、一句话总结

👉 `.attr()` = **操作 HTML 属性（读/写）**

👉 记住核心区别：

> **静态用 attr，动态用 prop**
