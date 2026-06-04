用**大白话**给你讲清楚 `:enabled` 👇

---

## 一、它是干嘛的？

👉 `:enabled` 是 **jQuery 里的一个选择器**
👉 用来选出：**“可以用的表单元素”**

换句话说就是：

> **没有被禁用（disabled）的表单控件** ([jQuery API][1])

---

## 二、什么叫“可用”？举个例子

```html
<input name="a" disabled />
<!-- 不可用 -->
<input name="b" />
<!-- 可用 -->
```

用 jQuery：

```js
$("input:enabled");
```

👉 只会选中：

```html
<input name="b" />
```

---

## 三、通俗理解（重点）

你可以把它想成👇

| 状态             | 说明               |
| ---------------- | ------------------ |
| enabled（可用）  | 用户可以输入、点击 |
| disabled（禁用） | 灰掉了，不能操作   |

👉 `:enabled` 就是：

> **把所有“没被禁用”的控件挑出来**

---

## 四、能选哪些元素？

只能用于这些**表单元素**：

- `<input>`
- `<button>`
- `<select>`
- `<textarea>`
- `<option>`
- `<optgroup>` ([jQuery API][1])

❗普通 `<div>`、`<p>` 是用不了的

---

## 五、一个更直观的例子

```html
<form>
  <input type="text" disabled />
  <input type="text" />
  <button>提交</button>
</form>
```

```js
$(":enabled").css("border", "2px solid red");
```

👉 效果：

- ❌ 第一个 input（disabled）不变
- ✅ 第二个 input + button 会被加红框

---

## 六、一个容易踩坑的点

### ❗ `:enabled` ≠ `:not([disabled])`

区别很细，但很重要：

- `:enabled` 👉 判断“**是否真的可用**”（属性值为 false）
- `:not([disabled])` 👉 只看有没有写这个属性 ([jQuery API][1])

👉 简单理解：

> `:enabled` 更“严格”，更准确

---

## 七、一个小建议（性能）

不要这样写：

```js
$(":enabled");
```

👉 相当于：

```js
$("*:enabled");
```

👉 会扫描整个页面（慢）

✅ 推荐写法：

```js
$("input:enabled");
```

👉 更快更精准

---

## 总结一句话

👉 `:enabled` 就是：

> **选中所有“没有被禁用、可以正常操作”的表单元素**
