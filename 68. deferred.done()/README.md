用一句话先总结：

👉 **`deferred.done()` = “当异步任务成功完成后，要执行的函数”**

---

## 一、通俗理解（用生活例子）

你可以把 `Deferred` 想象成：

> 🧾 **一个“等结果”的任务（比如点外卖）**

- 下单 → 等待（pending）
- 成功送到 → resolved ✅
- 失败 → rejected ❌

那么：

👉 `done()` 就是：

> **“外卖送到了以后我要做什么”**

比如：

```js
$.get("data.php").done(function () {
  console.log("成功拿到数据");
});
```

意思就是：

👉 请求成功了，再执行这里的代码

---

## 二、核心作用（说人话版）

`deferred.done()` 就干一件事：

👉 **注册“成功后的回调函数”**

等到 `resolve()` 被调用时，这些函数就会执行 ([api.jquery.com][1])

---

## 三、关键特点（简单记住3点）

### 1️⃣ 可以传多个函数

```js
dfd.done(fn1, fn2);
```

或者：

```js
dfd.done([fn1, fn2]);
```

👉 **都会按顺序执行** ([api.jquery.com][1])

---

### 2️⃣ 可以链式调用

```js
dfd.done(fn1).done(fn2);
```

👉 因为它返回的还是 `Deferred` 对象 ([api.jquery.com][1])

---

### 3️⃣ 会接收 resolve 传的参数

```js
dfd.done(function (msg) {
  console.log(msg);
});

dfd.resolve("成功了");
```

输出：

```
成功了
```

👉 参数是从 `resolve()` 传过来的 ([api.jquery.com][1])

---

## 四、用你给的例子解释

```js
dfd.done([fn1, fn2], fn3, [fn2, fn1]).done(function (n) {
  $("p").append(n + " we're done.");
});
```

当执行：

```js
dfd.resolve("and");
```

会发生：

👉 按顺序执行：

```
fn1 → fn2 → fn3 → fn2 → fn1 → 最后那个 function
```

而且 `fn3(n)`、最后那个函数里的 `n` 都是 `"and"`

---

## 五、和其他方法对比（帮你彻底理解）

| 方法       | 什么时候执行    |
| ---------- | --------------- |
| `done()`   | ✅ 成功时       |
| `fail()`   | ❌ 失败时       |
| `always()` | 🔁 不管成功失败 |

---

## 六、一句话记忆

👉 **`done()` = 成功后的 then（类似 Promise.then 的成功回调）**
