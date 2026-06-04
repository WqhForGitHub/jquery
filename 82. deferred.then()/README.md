我用**大白话 + 类比 + 代码思路**帮你把 `deferred.then()` 一次讲透 👇

---

# 一、先一句话理解

👉 `deferred.then()` 本质就是：

**“事情成功了做啥，失败了做啥，中途进度做啥” + 还能继续链式处理**

---

# 二、用生活例子理解（非常重要）

把 Deferred 想象成：

👉 你点外卖

| 状态   | 对应            |
| ------ | --------------- |
| 做好了 | resolve（成功） |
| 取消了 | reject（失败）  |
| 正在做 | notify（进度）  |

那么 `.then()` 就是：

👉 **你提前说好：**

- 做好了 → 我开吃 🍔
- 失败了 → 我投诉 😡
- 正在做 → 我看看进度 ⏳

---

# 三、基本语法（通俗版）

```js
deferred.then(成功函数, 失败函数, 进度函数);
```

对应：

```js
.then(
  doneFilter,     // 成功时执行
  failFilter,     // 失败时执行
  progressFilter  // 进度通知时执行
)
```

---

# 四、最核心特点（重点！）

## 1️⃣ then 会返回一个“新 Promise”

👉 不是原来的 deferred

👉 可以继续链：

```js
deferred.then(fn1).then(fn2).then(fn3);
```

📌 这就是“链式调用”

---

## 2️⃣ then 可以“加工数据”（重点）

比如：

```js
var d = $.Deferred();

var newPromise = d.then(function (value) {
  return value * 2;
});

d.resolve(5);
```

👉 最终得到的是：

```
5 → 10
```

📌 官方说法：可以“过滤 / 转换值” ([jQuery123 API][1])

---

## 3️⃣ then 可以返回新的异步任务（高级）

```js
$.ajax(url1).then(function (data) {
  return $.ajax(url2);
});
```

👉 意思是：

1. 先请求 url1
2. 成功后再请求 url2
3. 最终结果是 url2

📌 这就是“链式异步流程” ([jQuery123 API][1])

---

## 4️⃣ then 只会执行一个分支

```js
.then(success, fail)
```

👉 要么成功，要么失败，不会同时执行 ([Stack Overflow][2])

---

# 五、和 done / fail 的区别（关键）

很多人卡在这里 👇

## ❌ done / fail

只是“监听”

```js
deferred.done(fn);
deferred.fail(fn);
```

👉 不改变数据
👉 不返回新 Promise

---

## ✅ then

是“加工 + 传递 + 链式”

👉 可以：

- 改值
- 返回新 Promise
- 串流程

---

# 六、超通俗总结（记住这个）

👉 `then` = **升级版 done + fail**

多了三个能力：

1. ✅ 能改返回值
2. ✅ 能串异步
3. ✅ 能链式调用

---

# 七、一个完整通俗例子

```js
var d = $.Deferred();

d.then(function (val) {
  console.log("第一步:", val);
  return val + 1;
}).then(function (val) {
  console.log("第二步:", val);
});

d.resolve(1);
```

输出：

```
第一步: 1
第二步: 2
```

👉 就像流水线一样一层一层处理

---

# 八、一句话终极总结

👉 `deferred.then()` 就是：

**“处理成功/失败 + 加工结果 + 串联下一步”的核心方法**
