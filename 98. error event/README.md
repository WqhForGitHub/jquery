我给你用**大白话**解释一下 jQuery 里的 `error event`，保证你一看就懂 👇

---

## 一、error event 是干嘛的？

一句话总结：

👉 **当元素加载失败时触发的事件**

最常见场景就是：

- 图片加载失败（路径错了）
- 资源加载失败（文件不存在）

比如：

```html
<img src="xxx.png" />
```

如果 `xxx.png` 不存在，就会触发 `error` 事件。 ([jQuery API 文档][1])

---

## 二、.on("error") 是什么意思？

```js
$(元素).on("error", function () {
  // 出错时执行这里
});
```

👉 通俗理解：

**“一旦出错，就执行我写的这段代码”**

---

### 举个简单例子

```js
$("#book")
  .on("error", function () {
    alert("图片加载失败！");
  })
  .attr("src", "missing.png");
```

👉 发生了什么：

1. 先绑定错误处理函数
2. 再去加载图片
3. 图片不存在 → 触发 error
4. 弹出提示

---

## 三、核心记忆点（非常重要）

### 1️⃣ 必须“先绑定，再触发”

```js
// ❌ 错误写法（可能监听不到）
.attr("src", "missing.png")
.on("error", fn)
```

```js
// ✅ 正确写法
.on("error", fn)
.attr("src", "missing.png")
```

👉 因为事件可能一瞬间就发生了 ([jQuery API 文档][1])

---

### 2️⃣ error 主要用于“资源加载失败”

常见用法：

- 图片兜底
- 替换默认图

```js
$("img").on("error", function () {
  $(this).attr("src", "default.png");
});
```

👉 意思：加载失败 → 用默认图代替

---

### 3️⃣ 小心死循环

```js
$(this).attr("src", "default.png");
```

如果 `default.png` 也不存在：

👉 又会触发 error → 无限循环 😅

---

## 四、.trigger("error") 是啥？

```js
$(元素).trigger("error");
```

👉 通俗说：

**“手动让 error 事件发生一次”**

就像：

```js
主动模拟一次报错;
```

---

## 五、不要用在 window 上（容易踩坑）

```js
$(window).on("error", ...)
```

👉 ❌ 不推荐

因为：

- window 的 error 是 JS 报错
- 参数规则完全不一样 ([jQuery API 文档][1])

👉 正确用法：

```js
window.onerror = function () {};
```

---

## 六、和 Ajax 的 error 区别（顺便提醒）

别混淆：

### 1️⃣ DOM error（你现在学的）

👉 图片 / 资源加载失败

### 2️⃣ Ajax error

👉 请求失败（接口报错） ([jQuery API 文档][2])

---

## 七、总结一句话

👉 **error event = 元素加载失败时的“报警器”**
