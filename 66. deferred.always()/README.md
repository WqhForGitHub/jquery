`deferred.always()` 是 **jQuery Deferred（延迟对象）**中的一个常用方法，核心作用可以一句话概括：

👉 **无论成功（resolve）还是失败（reject），都会执行的回调函数**

---

## 一、基本概念

在 jQuery 的异步体系中：

- `.done()` → 成功时执行
- `.fail()` → 失败时执行
- `.always()` → **不管成功还是失败都执行**

`always()` 本质就是一个“最终一定执行”的钩子。 ([W3cubDocs][1])

---

## 二、语法

```js
deferred.always( alwaysCallbacks [, alwaysCallbacks ] )
```

- 参数可以是：
  - 单个函数
  - 或函数数组

- 返回值：仍然是 Deferred 对象（支持链式调用） ([GeeksforGeeks][2])

---

## 三、核心特点

### 1️⃣ 无论成功 / 失败都会执行

```js
var d = $.Deferred();

d.always(function () {
  console.log("一定会执行");
});

d.resolve(); // 或 d.reject();
```

✔ 不管 `resolve()` 还是 `reject()`，都会触发

---

### 2️⃣ 执行顺序按注册顺序

```js
d.always(fn1).always(fn2);
```

执行顺序：

```
fn1 → fn2
```

---

### 3️⃣ 可以链式调用

```js
$.get("/api")
  .done(function () {
    console.log("成功");
  })
  .fail(function () {
    console.log("失败");
  })
  .always(function () {
    console.log("结束");
  });
```

👉 输出顺序：

- 成功：成功 → 结束
- 失败：失败 → 结束

---

### 4️⃣ 会接收 resolve/reject 的参数（但不建议依赖）

`always()` 会拿到 `.resolve()` 或 `.reject()` 传入的参数，但：

⚠️ 成功和失败的参数结构不同，所以**不建议在 always 里处理数据** ([W3cubDocs][1])

👉 推荐：

- 处理数据 → `.done()` / `.fail()`
- 收尾逻辑 → `.always()`

---

## 四、典型使用场景

### ✅ 场景1：关闭 loading / loading spinner

```js
$.ajax({
  url: "/api/data",
}).always(function () {
  $("#loading").hide(); // 不管成功失败都要隐藏
});
```

---

### ✅ 场景2：清理资源 / 释放状态

```js
d.always(function () {
  isLoading = false;
});
```

---

### ✅ 场景3：统一日志记录

```js
d.always(function () {
  console.log("请求已结束");
});
```

---

## 五、和 `.done()` / `.fail()` / `.then()` 区别

| 方法        | 触发时机            | 用途         |
| ----------- | ------------------- | ------------ |
| `.done()`   | 成功                | 处理返回数据 |
| `.fail()`   | 失败                | 错误处理     |
| `.always()` | 成功 + 失败         | 收尾操作     |
| `.then()`   | 成功/失败分别传回调 | 更灵活控制   |

👉 一个直观理解：

- `.done()` = try
- `.fail()` = catch
- `.always()` = finally

---

## 六、一个完整 Demo

```js
function test(success) {
  var d = $.Deferred();

  setTimeout(function () {
    if (success) {
      d.resolve("成功数据");
    } else {
      d.reject("错误信息");
    }
  }, 1000);

  return d;
}

test(true)
  .done(function (res) {
    console.log("成功:", res);
  })
  .fail(function (err) {
    console.log("失败:", err);
  })
  .always(function () {
    console.log("一定执行");
  });
```

---

## 七、总结一句话

👉 `deferred.always()` = **“无论结果如何都执行的最终回调（类似 finally）”**
