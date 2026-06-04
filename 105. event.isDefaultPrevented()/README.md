用通俗的话来说，`event.isDefaultPrevented()` 就是一个**“检查器”**，用来看看你有没有调用过 `event.preventDefault()`。

---

### 🧠 一句话理解

👉 它就是在问：
**“这个事件的默认行为被你阻止了吗？”**

---

### 🧾 什么是“默认行为”？

很多网页元素本身自带行为，比如：

- 点击 `<a>` 会跳转链接
- 提交表单 `<form>` 会刷新/提交页面
- 点击 checkbox 会自动选中/取消

这些“自带的动作”就叫 **默认行为**

---

### 🚫 event.preventDefault() 是干嘛的？

它的作用是：

👉 **阻止这些默认行为发生**

比如：

```js
event.preventDefault();
```

意思就是：
❌ “别跳转链接了”
❌ “别提交表单了”

---

### 🔍 event.isDefaultPrevented() 是干嘛的？

它不是用来阻止的，而是用来**检查的**。

👉 返回值只有两个：

- `true`：说明已经调用过 `preventDefault()`
- `false`：说明还没有调用

---

### 💡 用人话举例

```js
$("a").on("click", function (event) {
  alert(event.isDefaultPrevented()); // false（刚开始还没阻止）

  event.preventDefault(); // 阻止跳转

  alert(event.isDefaultPrevented()); // true（现在已经被阻止了）
});
```

---

### 🧩 可以这样理解整个流程

就像这样：

1. 你问浏览器：“要不要跳转？”
2. `preventDefault()` 👉 你说：“不要跳！”
3. `isDefaultPrevented()` 👉 你回头检查：“我刚刚是不是说过不要跳？”

---

### 🎯 总结

`event.isDefaultPrevented()` 就是：

👉 **用来判断“默认行为有没有被取消”的布尔值检查工具**
