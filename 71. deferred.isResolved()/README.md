`deferred.isResolved()` 是 jQuery Deferred 对象里的一个**状态判断方法**，不过要先说清楚一点：👉 **这个方法已经被废弃了（jQuery 1.7 标记废弃，1.8 移除）**。([api.jquery.com][1])

---

## 一、基本用法

```js
var dfd = $.Deferred();

console.log(dfd.isResolved()); // false

dfd.resolve();

console.log(dfd.isResolved()); // true
```

### 作用

👉 判断 Deferred 是否已经进入 **resolved（成功完成）状态**

- 返回 `true`：已经调用过 `resolve()` / `resolveWith()`
- 返回 `false`：还在 pending 或已经 rejected ([japanitguide.com][2])

---

## 二、核心理解（状态机制）

Deferred 有 3 种状态：

| 状态     | 含义     |
| -------- | -------- |
| pending  | 未完成   |
| resolved | 成功完成 |
| rejected | 失败     |

`isResolved()` 本质就是判断：

```js
dfd.state() === "resolved";
```

---

## 三、实际使用场景（旧代码里常见）

### 1️⃣ 防止重复执行

```js
if (!dfd.isResolved()) {
  dfd.resolve();
}
```

### 2️⃣ 调试状态

```js
if (dfd.isResolved()) {
  console.log("已经成功完成");
}
```

👉 官方也说明：这种方法**主要用于调试用途** ([api.jquery.com][1])

---

## 四、⚠️ 重要：已废弃替代方案

### 推荐写法（现代写法）

```js
if (dfd.state() === "resolved") {
  console.log("已完成");
}
```

`state()` 返回：

- `"pending"`
- `"resolved"`
- `"rejected"` ([api.jquery.com][3])

---

## 五、对比总结

| 方法           | 是否推荐  | 返回值                              |
| -------------- | --------- | ----------------------------------- |
| `isResolved()` | ❌ 已废弃 | true / false                        |
| `state()`      | ✅ 推荐   | "pending" / "resolved" / "rejected" |

---

## 六、一句话总结

👉 `deferred.isResolved()` 就是：
**判断 Deferred 是否已经成功完成，但现在已经过时，应该用 `deferred.state()` 替代。**
