`deferred.notifyWith()` 是 **jQuery Deferred 对象中用于“进度通知（progress）”的高级方法**，相比 `notify()`，它可以**指定回调执行时的 this 上下文**。

---

# 一、基本语法

```js
deferred.notifyWith(context, [args]);
```

**参数说明：**

- `context`：回调函数执行时的 `this` 指向
- `args`：传给 progress 回调的参数（数组形式）

👉 作用：触发所有通过 `.progress()` / `.then()` 注册的 **progressCallbacks** ([api.jquery.com][1])

---

# 二、核心理解（一句话）

👉 `notifyWith = notify + 自定义 this`

---

# 三、基本用法示例

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <button id="start">开始任务</button>
    <div id="log"></div>

    <script>
      $(function () {
        var dfd = $.Deferred();

        // 监听进度
        dfd.progress(function (percent) {
          $("#log").append(
            "<p>进度：" + percent + "% ，this.name=" + this.name + "</p>",
          );
        });

        $("#start").click(function () {
          var contextObj = { name: "任务A" };

          let progress = 0;

          var timer = setInterval(function () {
            progress += 20;

            // 关键：指定 this
            dfd.notifyWith(contextObj, [progress]);

            if (progress >= 100) {
              clearInterval(timer);
              dfd.resolve();
            }
          }, 500);
        });
      });
    </script>
  </body>
</html>
```

---

# 四、运行效果

点击按钮后：

```
进度：20% ，this.name=任务A
进度：40% ，this.name=任务A
...
```

👉 说明：

- `this` 被成功绑定为 `{ name: "任务A" }`
- 参数 `progress` 正确传入

---

# 五、和 notify() 的区别

| 方法                        | 是否可指定 this | 参数形式 |
| --------------------------- | --------------- | -------- |
| `notify(args)`              | ❌ 不可         | 普通参数 |
| `notifyWith(context, args)` | ✅ 可           | 数组     |

👉 可以理解为：

```js
dfd.notify(args);
// ≈
dfd.notifyWith(window, [args]);
```

([japanitguide.com][2])

---

# 六、典型使用场景

### 1️⃣ 进度条更新

```js
dfd.notifyWith(uploadTask, [percent]);
```

### 2️⃣ 多任务区分上下文

```js
dfd.notifyWith(task1, [10]);
dfd.notifyWith(task2, [50]);
```

### 3️⃣ 模拟异步阶段

```js
dfd.notifyWith(step1, ["初始化"]);
dfd.notifyWith(step2, ["处理中"]);
```

---

# 七、重要注意点

⚠️ 1. 只用于“进行中”状态

- resolve / reject 后调用无效 ([api.jquery.com][1])

⚠️ 2. 只触发 progress 回调

```js
dfd.progress(...)
```

⚠️ 3. 通常只应由创建者调用
避免外部代码乱改状态 ([api.jquery.com][1])

---

# 八、总结

👉 `notifyWith()` 的本质：

- 触发“进度回调”
- 允许：
  - 自定义 `this`
  - 传递多个参数（数组）

✔ 比 `notify()` 更灵活
✔ 常用于复杂异步流程或进度控制
