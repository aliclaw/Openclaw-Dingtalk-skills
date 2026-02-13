# 🤖 OpenClaw DingTalk Skills

[![GitHub stars](https://img.shields.io/github/stars/aliclaw/openclaw-dingtalk-skills)](https://github.com/aliclaw/openclaw-dingtalk-skills/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/aliclaw/openclaw-dingtalk-skills)](https://github.com/aliclaw/openclaw-dingtalk-skills/network)
[![License](https://img.shields.io/github/license/aliclaw/openclaw-dingtalk-skills)](https://github.com/aliclaw/openclaw-dingtalk-skills/blob/main/LICENSE)

**钉钉（ DingTalk ）与 OpenClaw AI 助手集成的官方 Skills 集合。**

本项目提供了完整的钉钉 API 封装，使 OpenClaw 能够：
- 📋 查询组织架构和人员信息
- 📅 管理日历和日程
- 📄 处理审批流程
- 💬 发送消息和文件
- 📚 查询知识库
- 🔔 监控实时事件

## 📦 Skills 列表

| Skill | 功能描述 | 脚本数量 |
|-------|---------|---------|
| [dingtalk-api](dingtalk-api) | 钉钉 API 基础配置和工具函数 | 2 |
| [dingtalk-calcalendar](dingtalk-calcalendar) | 日历/日程管理 | 6 |
| [dingtalk-groupmessage](dingtalk-groupmessage) | 群消息 webhook 发送 | 1 |
| [dingtalk-hrinfo](dingtalk-hrinfo) | 人事信息查询（花名册） | 3 |
| [dingtalk-knowledge-base](dingtalk-knowledge-base) | 知识库 Wiki 管理 | 4 |
| [dingtalk-monitorstream](dingtalk-monitorstream) | Stream 模式实时监控 | 1 |
| [dingtalk-openConversationId](dingtalk-openConversationId) | 获取会话 ID | 1 |
| [dingtalk-peopleinfo](dingtalk-peopleinfo) | 组织架构和人员查询 | 4 |
| [dingtalk-process-search](dingtalk-process-search) | 审批流程搜索 | 4 |
| [dingtalk-sendfile-announce](dingtalk-sendfile-announce) | 发送文件到工作通知 | 1 |
| [dingtalk-sendfile-chat](dingtalk-sendfile-chat) | 发送文件到私聊 | 1 |
| [dingtalk-sendfiletogroup](dingtalk-sendfiletogroup) | 发送文件到群聊 | 1 |
| [dingtalk-sendmessage](dingtalk-sendmessage) | 发送私信/主动消息 | 2 |
| [dingtalk-sendtoannounce](dingtalk-sendtoannounce) | 发送工作通知消息 | 1 |

## 🚀 快速开始

### 1. 安装 Skills

将 skills 复制到 OpenClaw workspace：

```bash
cp -r dingtalk-* /path/to/openclaw/workspace/skills/
```

### 2. 配置钉钉应用

在 OpenClaw 配置文件 `~/.openclaw/openclaw.json` 中添加：

```json
{
  "channels": {
    "dingtalk": {
      "enabled": true,
      "clientId": "你的AppKey",
      "clientSecret": "你的AppSecret",
      "robotCode": "你的RobotCode",
      "corpId": "你的CorpID",
      "agentId": "你的AgentID",
      "dmPolicy": "open",
      "groupPolicy": "open",
      "messageType": "markdown"
    }
  }
}
```

### 3. 重启 OpenClaw Gateway

```bash
openclaw gateway restart
```

## 📖 使用示例

### 查询组织架构

```bash
node dingtalk-peopleinfo/scripts/org_full_with_people.js
```

### 发送私信

```bash
node dingtalk-sendmessage/scripts/send_robot_private_by_name.js "张三" "Hello!"
```

### 查询审批流程

```bash
node dingtalk-process-search/scripts/list_process_by_user.js "user_id"
```

### 查询知识库

```bash
node dingtalk-knowledge-base/scripts/list_workspaces.js
```

## 📁 项目结构

```
openclaw-dingtalk-skills/
├── dingtalk-api/           # 基础 API 工具
├── dingtalk-calcalendar/   # 日历管理
├── dingtalk-groupmessage/  # 群消息
├── dingtalk-hrinfo/       # 人事信息
├── dingtalk-knowledge-base/ # 知识库
├── dingtalk-monitorstream/ # 实时监控
├── dingtalk-openConversationId/ # 会话 ID
├── dingtalk-peopleinfo/    # 组织架构
├── dingtalk-process-search/ # 审批流程
├── dingtalk-sendfile-announce/ # 文件公告
├── dingtalk-sendfile-chat/ # 私聊文件
├── dingtalk-sendfiletogroup/ # 群聊文件
├── dingtalk-sendmessage/   # 发送消息
├── dingtalk-sendtoannounce/ # 工作通知
├── LICENSE
├── README.md
└── SPONSORS.md
```

## 💝 赞助支持

本项目完全免费开源，如果您觉得有用，欢迎赞助支持！

### 🇨🇳 微信赞助

<img src=".sponsors/wechat-qr.png" alt="微信赞助二维码" width="200">

### 🇨🇳 支付宝赞助

<img src=".sponsors/alipay-qr.png" alt="支付宝赞助二维码" width="200">

### 🌟 GitHub Sponsors

[![GitHub Sponsors](https://img.shields.io/badge/GitHub-Sponsors-blue?style=for-the-badge&logo=github)](https://github.com/sponsors/aliclaw)

您的赞助将用于：
- ☕ 咖啡和开发时间
- 🖥️ 服务器和域名费用
- 📚 文档和维护工作
- 🚀 新功能开发

## 🤝 贡献指南

欢迎提交 PR 和 Issue！

1. Fork 本项目
2. 创建分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📧 联系方式

- GitHub: [@aliclaw](https://github.com/aliclaw)
- 项目: [openclaw-dingtalk-skills](https://github.com/aliclaw/openclaw-dingtalk-skills)

---

**Made with ❤️ by aliclaw**
