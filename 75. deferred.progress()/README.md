`deferred.progress()` 是 **jQuery Deferred 对象**里专门用来“监听进度”的方法，可以理解为：

👉 **在异步任务“进行中”时触发的回调（不像 done / fail 只在结束时触发）**

---

## 一、核心作用（干什么用）

`deferred.progress()` 用来注册一个或多个回调函数：

> 当异步任务调用 `notify()` / `notifyWith()` 发送“进度更新”时，这些回调就会执行 ([jQuery API 文档][1])

📌 换句话说：

- `done()` → 成功时触发（最终结果）
- `fail()` → 失败时触发
- `progress()` → **执行过程中不断触发**

---

## 二、基本语法

```js
deferred.progress(function (data) {
  // 处理进度
});
```

也可以传多个函数：

```js
deferred.progress(fn1, fn2);
```

✔ 参数可以是函数或函数数组 ([jQuery API 文档][1])

---

## 三、触发机制（重点）

`progress()` 本身不会触发，它依赖：

```js
deferred.notify(data);
```

或：

```js
deferred.notifyWith(context, args);
```

👉 每调用一次 `notify`，就会执行一次 progress 回调 ([jQuery API 文档][2])

---

## 四、简单示例（非常典型）

```js
var dfd = $.Deferred();

dfd.progress(function (p) {
  console.log("当前进度:", p);
});

// 模拟异步任务
setTimeout(() => dfd.notify(30), 500);
setTimeout(() => dfd.notify(60), 1000);
setTimeout(() => dfd.notify(100), 1500);

setTimeout(() => dfd.resolve("完成"), 2000);
```

👉 输出：

```
当前进度: 30
当前进度: 60
当前进度: 100
```

---

## 五、生命周期特点（很重要）

### 1️⃣ 只在 pending 状态有效

- 一旦 `resolve()` 或 `reject()`：
  - 后续 `notify()` **无效**
  - 不再触发 progress 回调 ([菜鸟教程][3])

---

### 2️⃣ 特殊情况（容易忽略）

如果你在 **任务结束后再注册 progress：**

```js
dfd.resolve();
dfd.progress(fn);
```

👉 这个 `fn` 会 **立即执行一次**（用最后一次 notify 的参数） ([jQuery API 文档][1])

---

## 六、典型应用场景

### ✅ 1. 进度条

```js
dfd.progress(function (percent) {
  $("#bar").css("width", percent + "%");
});
```

---

### ✅ 2. 文件上传进度（模拟/封装）

---

### ✅ 3. 长任务状态反馈（比如批处理）

---

## 七、和 Promise 的关系（关键认知）

👉 jQuery Deferred ≈ 早期 Promise

但：

- `progress()` **不是标准 Promise 的一部分**
- 原生 JS Promise **没有进度机制**

所以：

👉 这是 jQuery 的“扩展能力”

---

## 八、一句话总结

👉 `deferred.progress()` 就是：

> **监听异步任务执行过程中的“中间状态变化”（通过 notify 触发）**
