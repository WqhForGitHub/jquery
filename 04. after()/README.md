我给你用**大白话**讲清楚 `.after()` 👇

---

## 一句话理解

👉 `.after()` 就是：
**在选中的元素“后面”插入内容**

---

## 举个最简单例子

HTML：

```html
<div class="inner">Hello</div>
```

JS：

```js
$(".inner").after("<p>Test</p>");
```

结果变成：

```html
<div class="inner">Hello</div>
<p>Test</p>
```

👉 可以理解为：
**在这个 div 后面，插入一个 p 标签**

---

## 多个元素的情况

```js
$(".inner").after("<p>Test</p>");
```

如果有两个 `.inner`：

```html
<div class="inner">Hello</div>
<div class="inner">Goodbye</div>
```

结果是：

```html
<div class="inner">Hello</div>
<p>Test</p>

<div class="inner">Goodbye</div>
<p>Test</p>
```

👉 每个元素后面都会加一个 ❗ ([jQuery API][1])

---

## 可以插入什么？

`.after()` 很灵活，可以插：

- HTML 字符串
- DOM 元素
- jQuery 对象
- 数组
- 文本

👉 简单记：**你能往页面里放的，它都能插** ([jQuery API][1])

---

## 函数写法（进阶）

```js
$("p").after(function (index) {
  return "<div>第 " + index + " 个</div>";
});
```

👉 意思是：

- 每个 `<p>` 后面插不同内容
- `index` 是第几个元素
- `this` 就是当前元素 ([jQuery API][1])

---

## 和 `.insertAfter()` 的区别（重点）

两者功能一样，只是写法不同：

### `.after()`

```js
$(目标).after(内容);
```

### `.insertAfter()`

```js
$(内容).insertAfter(目标);
```

👉 记忆口诀：

- `.after`：**先目标，后内容**
- `.insertAfter`：**先内容，后目标**

---

## 一个坑（面试常问）

```js
$(".container").after($("h2"));
```

👉 如果插的是“已有元素”：

- **只插一次 → 元素会被“移动”**
- **多个目标 → 会克隆（复制）** ([jQuery API][1])

---

## 总结（记住这 3 点就够了）

1. `.after()` = 在元素**后面插入内容**
2. 每个匹配元素都会插一份
3. 可以插 HTML / DOM / jQuery / 函数
