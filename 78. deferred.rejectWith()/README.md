`deferred.rejectWith()` 是 jQuery 里 **Deferred 对象**的一个方法，可以用一句话概括：

👉 **让异步任务“失败”，并且可以自定义回调函数里的 `this`（上下文）和参数。**

---

## 一、通俗理解

你可以把 Deferred 想成一个“任务”：

- 成功 → `resolve()`
- 失败 → `reject()`

而：

- `reject()`：只是简单地“失败”
- `rejectWith()`：**失败 + 指定“用谁当 this + 传什么参数”**

---

## 二、核心作用（重点）

```js
deferred.rejectWith(context, args);
```

它做了三件事：

1. ❌ 把 Deferred 状态变成 **rejected（失败）**
2. 📞 调用所有 `.fail()` 注册的回调函数
3. 🎯 **指定回调函数里的 this 和参数**

👉 也就是说：

- `context` → 决定 `this`
- `args` → 传给 `.fail()` 的参数

📌 官方定义也是：在拒绝 Deferred 时，用指定的 context 和参数调用失败回调 ([docs.w3cub.com][1])

---

## 三、和 reject() 的区别（非常关键）

| 方法                        | 区别                     |
| --------------------------- | ------------------------ |
| `reject(args)`              | 只能传参数               |
| `rejectWith(context, args)` | **可以指定 this + 参数** |

👉 本质关系：

```js
reject(args);
// ≈
rejectWith(this, args);
```

---

## 四、代码示例（秒懂）

```js
var dfd = $.Deferred();

dfd.fail(function (msg) {
  console.log(this.name); // 👈 this 来自 context
  console.log(msg);
});

// 使用 rejectWith
dfd.rejectWith(
  { name: "错误对象" }, // context
  ["出错了"], // args
);
```

### 输出：

```
错误对象
出错了
```

---

## 五、对比一下 reject()

```js
var dfd = $.Deferred();

dfd.fail(function (msg) {
  console.log(this); // 👈 默认是 deferred 或 window
  console.log(msg);
});

dfd.reject("出错了");
```

👉 这里你 **无法控制 this 是谁**

---

## 六、什么时候用 rejectWith？

👉 一句话：**当你需要控制 fail 回调里的 this 时**

常见场景：

- 想让回调里的 `this` 指向某个对象
- 想模拟类似“面向对象”的错误上下文
- 写复杂库/框架时（高级用法）

---

## 七、一句话总结

👉 `rejectWith()` =
**“让任务失败 + 指定回调里的 this + 传参数”**
