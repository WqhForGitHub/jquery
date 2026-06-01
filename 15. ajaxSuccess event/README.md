我用**最通俗的方式**帮你拆解一下 `ajaxSuccess` 👇

---

## 一句话理解

👉 **ajaxSuccess 就是：只要有 Ajax 请求“成功了”，就会自动执行你写的代码。**

---

## 🌰 打个比方（非常重要）

你可以把 Ajax 请求想象成“点外卖”：

- 你下单（发送 Ajax 请求）
- 外卖送到了（请求成功）
- 👉 这时候触发 `ajaxSuccess`

也就是说：

> **只要请求成功，就会触发这个“成功通知器”**

---

## 📌 它的特点（重点理解）

### 1️⃣ 是“全局事件”

👉 不是某一个 Ajax，而是**所有 Ajax 请求成功都会触发**

- 页面里发了 10 个 Ajax
- 成功了 10 次
- 👉 `ajaxSuccess` 会执行 10 次

📌 官方说法：所有成功的 Ajax 都会触发它 ([jQuery API][1])

---

### 2️⃣ 和 success 的区别（很多人容易混）

| 类型          | 作用范围          |
| ------------- | ----------------- |
| `success`     | 只作用于当前 Ajax |
| `ajaxSuccess` | 监听所有 Ajax     |

👉 举个例子：

```js
$.ajax({
  url: "/api",
  success: function () {
    console.log("只处理这个请求");
  },
});
```

```js
$(document).on("ajaxSuccess", function () {
  console.log("所有 Ajax 成功都会执行");
});
```

📌 本质区别：
👉 一个是“局部回调”，一个是“全局监听” ([Stack Overflow][2])

---

### 3️⃣ 必须绑定在 document 上（重要）

从 jQuery 1.9 开始：

```js
$(document).on("ajaxSuccess", function () {
  // 必须这样写
});
```

否则可能不生效 ([jQuery API][1])

---

## 📌 参数解释（不用死记，知道用途即可）

```js
$(document).on("ajaxSuccess", function(event, xhr, settings, data) {
```

| 参数     | 通俗解释                   |
| -------- | -------------------------- |
| event    | 事件对象（基本不用）       |
| xhr      | 请求对象（可以拿返回数据） |
| settings | Ajax 配置（比如 URL）      |
| data     | 返回的数据                 |

👉 常用场景：

```js
if (settings.url === "/api/user") {
  console.log("只处理这个接口");
}
```

---

## 📌 常见使用场景

### ✅ 场景1：统一提示成功

```js
$(document).on("ajaxSuccess", function () {
  console.log("请求成功！");
});
```

👉 所有请求成功都提示

---

### ✅ 场景2：统一 loading 控制

```js
$(document).on("ajaxSuccess", function () {
  $("#loading").hide();
});
```

---

### ✅ 场景3：只监听某个接口

```js
$(document).on("ajaxSuccess", function (e, xhr, settings) {
  if (settings.url === "/login") {
    console.log("登录成功");
  }
});
```

---

## ⚠️ 注意点（很关键）

### ❌ 不会触发的情况

```js
$.ajax({
  url: "/api",
  global: false,
});
```

👉 设置了 `global: false` 就不会触发 `ajaxSuccess` ([jQuery API][1])

---

### ❌ 请求失败不会触发

👉 只有成功才会触发（失败走 `ajaxError`）

---

## 🧠 最后帮你总结

👉 记住这一句话就够了：

> **ajaxSuccess = 所有 Ajax 成功后的“统一监听器”**
