下面把 **Attribute Contains Selector `[name*="value"]`** 用**通俗易懂的中文**给你讲清楚 👇

---

## 一、它是干嘛的？

👉 简单一句话：

**选中“属性值里面包含某段字符串”的元素**

比如：

```js
$("input[name*='man']");
```

意思就是：

👉 找所有 `<input>` 标签
👉 只要它的 `name` 属性里 **包含 "man" 这个字符串**
👉 就选中它 ✅

📌 注意：
不是等于，也不是开头，而是——**只要“包含”就行** ([api.jquery123.com][1])

---

## 二、举个最直观的例子

HTML：

```html
<input name="man-news" />
<input name="milkman" />
<input name="letterman2" />
<input name="newmilk" />
```

jQuery：

```js
$("input[name*='man']").val("有 man 的都会被选中");
```

---

## 三、哪些会被选中？

| name值     | 是否匹配 | 原因     |
| ---------- | -------- | -------- |
| man-news   | ✅       | 包含 man |
| milkman    | ✅       | 包含 man |
| letterman2 | ✅       | 包含 man |
| newmilk    | ❌       | 没有 man |

👉 核心：**只要出现过 “man” 就行**

---

## 四、用人话理解

可以把它理解成：

👉 `"模糊搜索 / 包含匹配"`

类似你在搜索框输入关键词：

- 搜 “man”
- 只要内容里 **有这个词的一部分**
- 都会被找到

---

## 五、和其他选择器对比（很重要）

| 写法            | 含义                 |
| --------------- | -------------------- |
| `[name*="man"]` | **包含**（最宽松）   |
| `[name^="man"]` | 以 man 开头          |
| `[name$="man"]` | 以 man 结尾          |
| `[name="man"]`  | 完全等于             |
| `[name~="man"]` | 单词匹配（空格分隔） |

👉 `[name*="man"]` 是最“宽松”的一种 ([jQuery API][2])

---

## 六、一个小提醒（面试常考）

⚠️ 它是：

👉 **区分大小写的**

```js
$("input[name*='Man']"); // 和 'man' 不一样
```

---

## 七、总结一句话

👉 `[name*="value"]` 就是：

**“只要属性值里包含 value，就选中它”**
