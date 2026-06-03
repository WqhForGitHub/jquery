`deferred.fail()` 是 jQuery 中 **Deferred 对象**的一个方法，主要用于处理“失败（reject）”的回调逻辑。下面给你系统讲清楚👇

---

# 一、核心作用

👉 **当 Deferred 对象被“拒绝（reject）”时执行回调函数**

也就是说，它是专门用来处理**错误 / 失败情况**的。

📌 类比：

- `done()` → 成功时执行
- `fail()` → 失败时执行
- `always()` → 不管成功失败都执行

---

# 二、基本语法

```js
deferred.fail( failCallbacks [, failCallbacks ] )
```

### 参数说明

- `failCallbacks`：函数 或 函数数组
- 可以传多个函数（按顺序执行）

📌 特点：

- 支持多个回调
- 按添加顺序执行
- 返回 `Deferred` 对象（支持链式调用） ([api.jquery.com][1])

---

# 三、什么时候触发？

当你调用：

```js
deferred.reject();
```

或：

```js
deferred.rejectWith();
```

➡️ 所有 `fail()` 注册的函数都会执行 ([api.jquery.com][2])

---

# 四、基础示例（最常见）

```js
$.get("test.php")
  .done(function () {
    console.log("请求成功");
  })
  .fail(function () {
    console.log("请求失败");
  });
```

📌 说明：

- `$.get()` 返回的是一个 Deferred（jqXHR）
- 如果请求失败 → 触发 `fail()`

---

# 五、自定义 Deferred 示例

```js
var dfd = $.Deferred();

dfd.fail(function (err) {
  console.log("失败原因：", err);
});

// 模拟失败
dfd.reject("服务器错误");
```

输出：

```
失败原因：服务器错误
```

---

# 六、多个 fail 回调

```js
dfd
  .fail(function () {
    console.log("fail1");
  })
  .fail(function () {
    console.log("fail2");
  });

dfd.reject();
```

输出：

```
fail1
fail2
```

👉 按添加顺序执行 ([api.jquery.com][1])

---

# 七、重要特性（面试常考）

### 1️⃣ 已 reject 之后再绑定也会执行

```js
var dfd = $.Deferred();

dfd.reject("error");

dfd.fail(function (e) {
  console.log(e);
});
```

👉 依然会执行（立即执行）

---

### 2️⃣ 支持链式调用

```js
dfd.fail(fn1).fail(fn2).done(fn3);
```

---

### 3️⃣ 接收 reject 传入的参数

```js
dfd.reject("错误信息");
```

```js
dfd.fail(function (msg) {
  console.log(msg);
});
```

---

# 八、和 Promise.catch() 的区别

⚠️ 很多人会误以为它等价于 `catch()`

其实：

| 方法             | 是否返回新 Promise |
| ---------------- | ------------------ |
| `fail()`         | ❌ 返回原对象      |
| `then(null, fn)` | ✅ 返回新 Promise  |

👉 在链式错误处理上行为不同（jQuery 不完全符合 ES6 Promise） ([Stack Overflow][3])

---

# 九、一句话总结

👉 `deferred.fail()` 就是：

> **给 Deferred 注册“失败回调”，当异步任务 reject 时执行**
