我用**大白话 + 对比 + 小例子**给你讲清楚 `.addClass()` 👇

---

## 一、它是干嘛的？（一句话理解）

👉 **给 HTML 元素“加样式标签（class）”的**

比如：

```html
<p>Hello</p>
```

你写：

```js
$("p").addClass("red");
```

👉 就变成：

```html
<p class="red">Hello</p>
```

---

## 二、最重要的核心点（很多人容易误解）

### ❗不是“替换”，是“追加”

```js
$("p").addClass("red");
```

如果原来是：

```html
<p class="big">Hello</p>
```

结果是：

```html
<p class="big red">Hello</p>
```

👉 **不会覆盖原来的 class，只是加上去** ([jQuery API][1])

---

## 三、最常见的 3 种用法

---

### 1️⃣ 最基础：加一个 class

```js
$("p").addClass("red");
```

👉 所有 `<p>` 都变红（如果 CSS 定义了）

---

### 2️⃣ 一次加多个 class

```js
$("p").addClass("red big");
```

👉 用空格分开就行

✔ 等价于：

```js
$("p").addClass(["red", "big"]);
```

---

### 3️⃣ 用函数动态添加（进阶）

```js
$("li").addClass(function (index) {
  return "item-" + index;
});
```

👉 结果：

```html
<li class="item-0"></li>
<li class="item-1"></li>
<li class="item-2"></li>
```

📌 参数解释：

| 参数         | 含义                    |
| ------------ | ----------------------- |
| index        | 第几个元素（从 0 开始） |
| currentClass | 当前已有的 class        |

👉 本质：**可以根据每个元素不同，决定加什么 class**

---

## 四、一个很典型的使用场景

👉 切换样式（配合 `.removeClass()`）

```js
$("p").removeClass("red").addClass("blue");
```

👉 实现：

- 删除红色
- 加上蓝色

---

## 五、你可以这样理解（非常关键）

👉 `.addClass()` 本质就是：

> 给 DOM 元素的 `class=""` 里**追加字符串**

---

## 六、容易踩坑的点

### ❌ 误区 1：以为会覆盖

不会！它是追加

---

### ❌ 误区 2：忘记空格

```js
.addClass("a b c")   ✅
.addClass("abc")     ❌（这是一个 class）
```

---

### ❌ 误区 3：选择器写错

```js
$("box")     ❌
$(".box")    ✅
```

---

## 七、总结（面试级一句话）

👉 `.addClass()` 就是：

> **给选中的元素添加一个或多个 class，不会覆盖原有 class，可以支持字符串、数组或函数动态生成** ([jQuery API][1])
