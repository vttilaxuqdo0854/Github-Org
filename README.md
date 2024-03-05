## Github Org

为了方便邀请用户加入 Github Organization，开发了这个小工具

## 部署

推荐使用 Vercel，点击下面按钮即可进行部署，需要准备好：

> 用于 Github 登录
>
> https://github.com/settings/applications/new
>
> Homepage URL 设置为最终访问域名 url
>
> Authorization callback URL 为 url 后加上 /api/auth/callback/github
>
> example: https://copilot1.bbznop.com/api/auth/callback/github
>

GITHUB_ID=

GITHUB_SECRET=

>
> 用于自动申请组织: ORG_NAME 为组织名，Token 为组织的 Token
>
> https://github.com/settings/personal-access-tokens/new
>
> Resource owner 选择对应组织

ORG_NAME=

Token=

> 用于 NextAuth 部署: openssl rand -base64 32 生成
>

JWT_SECRET=

