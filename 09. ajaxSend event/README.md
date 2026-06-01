我帮你用**最通俗的大白话**讲清楚 `ajaxSend` 👇

---

## 🧠 一句话理解

👉 **ajaxSend = Ajax 请求“发出去之前”的提醒钩子**

就像👇

> 🚀 “我要发请求了！”（还没发）
> 👉 这个时候触发的就是 ajaxSend

---

## 📦 它到底在干嘛？

当你用 **jQuery** 发 Ajax 请求时：

流程是这样的：

```
ajaxSend（准备发）
↓
发送请求
↓
服务器响应
↓
success / error
↓
ajaxComplete（结束）
```

👉 ajaxSend 就是在 **“准备发送请求那一刻”执行的代码** ([documentation.help][1])

---

## 🧩 举个生活例子

想象你点外卖：

- 你点击“下单”按钮
- 系统准备发送订单给商家

👉 这个“准备发送”的瞬间 = ajaxSend

你可以在这里做一些事情，比如：

- 显示“正在加载…” 🍜
- 打印日志
- 给请求加 token
- 判断请求是否合法

---

## 💡 最常见用途

ajaxSend 通常用来做这些事情：

### 1️⃣ 显示 loading

```js
$(document).on("ajaxSend", function () {
  $("#loading").show();
});
```

👉 请求一发就显示加载中

---

### 2️⃣ 统一加请求头（比如 token）

```js
$(document).on("ajaxSend", function (event, xhr) {
  xhr.setRequestHeader("Authorization", "Bearer token");
});
```

👉 所有请求自动带登录信息

---

### 3️⃣ 打日志 / 调试

```js
$(document).on("ajaxSend", function (event, xhr, settings) {
  console.log("请求地址:", settings.url);
});
```

👉 每次请求都能看到 URL

---

## ⚠️ 重点特点（很重要）

### ✅ 1. 是“全局事件”

👉 页面里 **所有 Ajax 请求都会触发它** ([documentation.help][2])

不是某一个请求，而是全部！

---

### ✅ 2. 一定要绑定在 document 上

```js
$(document).on("ajaxSend", handler);
```

👉 jQuery 1.9 之后必须这样用

---

### ✅ 3. 可以区分不同请求

```js
if (settings.url === "xxx") {
  // 只处理某个接口
}
```

👉 通过 `settings.url` 判断

---

### ❌ 4. 有些情况不会触发

如果你这样写：

```js
$.ajax({
  url: "...",
  global: false,
});
```

👉 ajaxSend **不会执行** ([api.jquery.com][3])

---

## 🧠 最后总结（记住这个就够了）

👉 ajaxSend 就是：

> **在 Ajax 请求“真正发出去之前”，统一拦一下，做点事情**
