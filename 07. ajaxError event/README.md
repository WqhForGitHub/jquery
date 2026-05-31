我给你用**大白话**解释一下 `ajaxError`，保证你一看就懂👇

---

## 一句话理解

👉 **ajaxError 就是：只要 Ajax 请求“失败了”，就会触发的一个全局事件。**

---

## 它是干嘛的？

当你用 jQuery 发起 Ajax 请求时，比如：

- 请求的接口不存在（404）
- 服务器报错（500）
- 网络断了
- 数据解析失败

👉 只要“出错了”，就会触发 `ajaxError`。 ([jQuery API][1])

---

## 通俗例子（生活类比）

你可以把 Ajax 想成“点外卖”：

- 点成功 → `success`
- 不管成功失败 → `complete`
- ❌ 点失败（商家关门 / 地址错） → **ajaxError**

👉 `ajaxError` 就是“点单失败后的统一处理逻辑”。

---

## 怎么用（核心代码）

```js
$(document).on("ajaxError", function () {
  console.log("请求出错了！");
});
```

👉 只要**任何 Ajax 报错**，这个函数都会执行。

---

## 真实流程（点击按钮触发错误）

```js
$(document).on("ajaxError", function () {
  $(".log").text("请求失败了！");
});

$("button").on("click", function () {
  $(".result").load("not-exist.html"); // 故意请求不存在的文件
});
```

👉 点击按钮 → 请求失败 → 显示错误提示

---

## 和普通 error 的区别（重点）

| 类型                | 作用范围            |
| ------------------- | ------------------- |
| `error`（局部）     | 只处理当前这个 Ajax |
| `ajaxError`（全局） | 监听所有 Ajax 错误  |

👉 类比：

- `error` = 只管你自己这单
- `ajaxError` = 整个平台统一客服

---

## 回调参数是什么意思？

```js
$(document).on("ajaxError", function(event, jqXHR, settings, thrownError) {
```

简单说👇

- `event` 👉 事件对象（一般不用）
- `jqXHR` 👉 请求对象（可以拿状态码）
- `settings` 👉 请求配置（比如 URL）
- `thrownError` 👉 错误信息（如 "Not Found"） ([jQuery API][1])

---

## 实用技巧（面试/实战常用）

### 1️⃣ 只处理某个接口错误

```js
$(document).on("ajaxError", function (e, xhr, settings) {
  if (settings.url === "/api/user") {
    alert("用户接口挂了！");
  }
});
```

👉 精准控制，不影响其他请求

---

### 2️⃣ 全局统一错误提示（常用）

```js
$(document).on("ajaxError", function (e, xhr) {
  if (xhr.status === 401) {
    alert("请重新登录");
  } else {
    alert("系统异常");
  }
});
```

👉 做全站错误拦截

---

## 注意点（很重要）

1️⃣ 必须绑定在 `document` 上
👉 jQuery 1.9+ 强制要求 ([jQuery API][1])

2️⃣ 可以被关闭

```js
$.ajax({
  url: "...",
  global: false,
});
```

👉 这样就不会触发 `ajaxError` ([jQuery API][2])

3️⃣ JSONP / 跨域 script 不触发
👉 这是个坑 ([jQuery API][1])

---

## 总结（核心记住这3点）

👉 `ajaxError` = **Ajax 全局错误监听器**

👉 用来做：

- 统一报错提示
- 登录失效处理
- 日志统计

👉 和 `error` 区别：

- `error`：单个请求
- `ajaxError`：所有请求
