`deferred.catch()` 是 **jQuery Deferred / Promise 链中的“错误处理方法”**，主要用于捕获 **被拒绝（rejected）状态** 时的回调。

---

## 一、基本作用

```js
deferred.catch(failFilter);
```

👉 含义：

- 当 Deferred 对象进入 **reject（失败）状态** 时执行回调
- 参数 `failFilter` 是一个函数

📌 官方定义：用于添加在 Deferred 被拒绝时调用的处理函数 ([api.jquery.com][1])

---

## 二、本质（非常重要）

```js
deferred.catch(fn);
```

等价于：

```js
deferred.then(null, fn);
```

👉 也就是说：

- `.then(success, error)`
- `.catch(error)` 是 `.then` 的简化写法 ([api.jquery.com][1])

---

## 三、简单示例

```js
$.get("test.php")
  .then(function () {
    console.log("请求成功");
  })
  .catch(function () {
    console.log("请求失败");
  });
```

👉 执行逻辑：

| 状态            | 执行       |
| --------------- | ---------- |
| resolve（成功） | `.then()`  |
| reject（失败）  | `.catch()` |

---

## 四、和 `.fail()` 的区别

很多人容易混淆 👇

### 1️⃣ `.catch()`

```js
deferred.catch(fn);
```

- 返回的是 **Promise**
- 用于 Promise 风格链式调用
- 类似 ES6 Promise 的 `.catch()`

---

### 2️⃣ `.fail()`

```js
deferred.fail(fn);
```

- 返回的是 **Deferred 对象本身**
- 可以继续链 `.fail()` / `.done()`
- 更偏 jQuery 旧风格 ([api.jquery.com][2])

---

### ✅ 对比总结

| 方法       | 返回值   | 风格              | 推荐      |
| ---------- | -------- | ----------------- | --------- |
| `.catch()` | Promise  | 现代 Promise 风格 | ✅ 推荐   |
| `.fail()`  | Deferred | jQuery 传统       | ⚠️ 旧写法 |

---

## 五、链式调用中的作用

```js
$.ajax("test.php")
  .then(function (res) {
    return process(res);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error("统一错误处理:", err);
  });
```

👉 特点：

- 可以 **统一捕获前面任意一步的错误**
- 类似 try...catch（但用于异步）

---

## 六、常见使用场景

1. AJAX 请求失败处理
2. Promise 链统一异常捕获
3. 替代 `.fail()` 的现代写法
4. 类似 ES6 Promise 的写法统一风格

---

## 七、一句话总结

👉 `deferred.catch()` 就是：

> **专门处理 Deferred/Promise 失败（reject）状态的回调方法，是 `.then(null, fn)` 的语法糖。**
