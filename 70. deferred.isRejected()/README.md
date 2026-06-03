### 一、`deferred.isRejected()` 是什么？

`deferred.isRejected()` 是 jQuery 中 **Deferred 对象**的一个方法，用来判断当前异步对象是否处于“失败（rejected）状态”。

👉 **返回值：**

- `true`：已经被拒绝（失败）
- `false`：不是 rejected（可能是 pending 或 resolved）

👉 **本质：**
判断是否调用过：

```js
deferred.reject();
deferred.rejectWith();
```

且失败回调（failCallbacks）已经执行或正在执行 ([api.jquery.com][1])

---

### 二、语法

```js
deferred.isRejected();
```

- ❌ 不接收任何参数
- ✅ 返回 Boolean

---

### 三、简单示例

```js
var d = $.Deferred();

console.log(d.isRejected()); // false（初始是 pending）

d.reject(); // 手动标记为失败

console.log(d.isRejected()); // true
```

---

### 四、实际使用场景

常见用于调试或状态判断，例如：

```js
var d = $.Deferred();

d.fail(function () {
  if (d.isRejected()) {
    console.log("当前 Deferred 已失败");
  }
});

d.reject();
```

📌 作用：

- 判断异步流程是否失败
- 防止重复处理
- 调试异步状态

---

### 五、⚠️ 重要：已废弃

这个方法有一个关键问题👇

- ❗ 在 jQuery **1.7 被标记为废弃**
- ❗ 在 jQuery **1.8 已移除** ([api.jquery.com][1])

👉 官方推荐替代方案：

```js
deferred.state() === "rejected";
```

例如：

```js
if (d.state() === "rejected") {
  console.log("失败状态");
}
```

`state()` 返回三种状态：

- `"pending"`
- `"resolved"`
- `"rejected"` ([api.jquery.com][2])

---

### 六、总结（重点）

- `isRejected()` ✔ 判断 Deferred 是否失败
- 返回 `true / false`
- ❌ 已废弃，不建议再用
- ✅ 推荐使用：

  ```js
  deferred.state() === "rejected";
  ```
