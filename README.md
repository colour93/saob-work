# <p align="center">Saob Work</p>

一个通讯录发电用的 API。

- [Saob Work](#saob-work)
  - [介绍](#介绍)
  - [使用方法](#使用方法)
    - [JSON](#json)
    - [纯文本](#纯文本)
  - [维护](#维护)

## 介绍

很简单，这就是一个发电用的 API（嗯

## 使用方法

### JSON

`GET /api?type=json`

返回如下所示：

```json
{
  "code": 200,
  "data": "你好烧，快超我",
  "repo": "https://github.com/colour93/saob-work",
  "version": "1145-14-19 19:81:00"
}
```

`GET /api/total`

返回如下所示：

```json
{
  "code": 200,
  "data": ["111", "222"],
  "repo": "https://github.com/colour93/saob-work",
  "version": "1145-14-19 19:81:00"
}
```

### 纯文本

`GET /api?type=plain`

直接返回获取到的文本内容，像一言那样）

## 维护

⚠ 允许 NSFW 内容和一点点的血腥暴力，但是**不许鉴证**！

若想参与 `saob.work` 的开发，可以选择编辑 `data/copywriting.txt` 加入自己的烧b文案，格式如下：

```markdown
这是第一段文案
这段文案和上一段文案是连续的，但是显示出来有个换行

这是第二段文案
```

请以 **2 个连续换行** 作为文案分割符。无论换行符是 `\n` 还是 `\r\n` 都不影响编辑。

在提交前请先全文搜索你的文案，请勿提交重复的烧b文案。

