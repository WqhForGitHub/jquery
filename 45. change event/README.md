我用**最通俗的话**给你讲清楚 jQuery 的 `change event` 👇

---

## 一、change 事件是干嘛的？

一句话：

👉 **当表单的值“发生改变”时触发的事件**

常见用在这些元素上：

- `<input>`
- `<textarea>`
- `<select>`

也就是说：

👉 **用户改了内容 → 就会触发 change** ([jQuery API][1])

---

## 二、什么时候会触发？（重点！）

不同元素触发时机不一样：

### 1️⃣ 下拉框 / 单选 / 复选

👉 用户一选，立刻触发

比如：

```html
<select>
  <option>A</option>
  <option>B</option>
</select>
```

选 B → 马上触发 change

---

### 2️⃣ 输入框（text）

👉 **不是一输入就触发！**

而是：

👉 **输入完 + 失去焦点（点到别处）才触发** ([MDN Web Docs][2])

例如：

```html
<input type="text" />
```

流程是：

```
输入内容 → 不触发
点击别的地方 → 才触发
```

---

## 三、怎么用？

### ✅ 1. 监听 change

```js
$(".target").on("change", function () {
  alert("内容变了！");
});
```

👉 含义：

- 监听 `.target`
- 只要值变了，就执行函数

---

### ✅ 2. 手动触发 change

```js
$(".target").trigger("change");
```

👉 相当于你“模拟用户操作”

---

## 四、一个简单理解

你可以把它理解为：

👉 **“用户确认改了值”这个信号**

不是每次输入都算，而是“最终改动完成”

---

## 五、容易踩坑（很重要）

### ❌ 用 JS 改值，不会触发 change！

```js
$("input").val("新值");
```

👉 这样**不会触发 change** ([jQuery API][1])

---

### ✅ 正确写法

```js
$("input").val("新值").trigger("change");
```

---

## 六、总结一句话

👉 **change = 表单值发生变化后的“确认事件”**

- select：选了就触发
- input：改完并离开才触发
- JS 改值：不会自动触发
