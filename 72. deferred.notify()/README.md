`deferred.notify()` 是 **jQuery Deferred 对象中用于“进度通知”**的方法，和 `resolve()`（成功）、`reject()`（失败）不同，它不会结束状态，而是用于**过程中多次触发回调**。

---

# 一、基本作用

👉 核心一句话：

> `deferred.notify()` 用来触发 **progressCallbacks（进度回调）** ([api.jquery.com][1])

也就是说，它配合 `.progress()` 或 `.then()` 的第三个参数使用。

---

# 二、语法

```js
deferred.notify(args);
```

- `args`：可选，传递给进度回调的参数 ([api.jquery.com][1])
- 返回：Deferred 对象（支持链式调用）

---

# 三、使用流程（重点）

典型步骤：

1. 创建 Deferred
2. 注册 progress 回调
3. 在异步过程中调用 notify

---

# 四、完整示例（推荐理解）

```js
var dfd = $.Deferred();

// 监听进度
dfd.progress(function (percent) {
  console.log("当前进度：" + percent + "%");
});

// 模拟异步任务
setTimeout(function () {
  dfd.notify(20); // 触发 progress
  setTimeout(function () {
    dfd.notify(50);
    setTimeout(function () {
      dfd.notify(80);
      dfd.resolve("完成"); // 最终结束
    }, 1000);
  }, 1000);
}, 1000);
```

👉 输出：

```
当前进度：20%
当前进度：50%
当前进度：80%
```

---

# 五、和 then() 一起用

```js
dfd.then(
  function () {
    console.log("done");
  },
  function () {
    console.log("fail");
  },
  function (progress) {
    console.log("progress:", progress);
  },
);

dfd.notify("loading...");
```

---

# 六、关键特性（很重要）

### 1️⃣ 可以多次调用

适合进度更新（比如上传、下载）

---

### 2️⃣ 不会改变状态

- `notify()` ≠ 完成
- 只是“过程通知”

---

### 3️⃣ resolve/reject 后失效

一旦：

```js
dfd.resolve();
// 或
dfd.reject();
```

👉 再调用 `notify()` **不会触发任何回调** ([api.jquery.com][1])

---

### 4️⃣ 回调执行顺序

按注册顺序执行 ([api.jquery.com][1])

---

### 5️⃣ 一般只由创建者调用

防止外部随意改变状态 ([菜鸟教程][2])

---

# 七、实际应用场景

### ✔ 文件上传进度

### ✔ Ajax loading 状态

### ✔ 长任务进度条

### ✔ 分段任务执行

---

# 八、和 resolve / reject 对比

| 方法    | 作用     | 是否结束 |
| ------- | -------- | -------- |
| notify  | 进度通知 | ❌       |
| resolve | 成功完成 | ✅       |
| reject  | 失败结束 | ✅       |

---

# 九、常见坑

❌ notify 没触发？通常是：

```js
dfd.resolve();
dfd.notify(); // ❌ 不会执行
```

✔ 正确顺序：

```js
dfd.notify();
dfd.resolve();
```

---

# 十、一句话总结

👉 `deferred.notify()` = **异步过程中的“进度广播器”**
