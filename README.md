## Github Org

为了方便邀请用户加入 Github Organization，开发了这个小工具

## 部署

推荐使用 Vercel，点击下面按钮即可进行部署，需要准备好：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchawaa%2FGithub-Org&env=GITHUB_ID,GITHUB_SECRET,ORG_NAME,Token,JWT_SECRET&envDescription=%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E6%A0%B7%E4%BE%8B&envLink=https%3A%2F%2Fgithub.com%2Fchawaa%2FGithub-Org%2Fblob%2Fmain%2F.env.example)

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

JWT_SECRET=


## 注意事项

1. Token 需要是组织 Token，另外需要给一个权限：

![image](https://github.com/godimessy1/Github-Org/assets/162074038/13d3a76a-884a-4d99-8beb-2a4930b56a34)

2. 组织的 Personal access tokens 设置要初始化一下不然选不到组织

