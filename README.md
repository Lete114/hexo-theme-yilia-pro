hexo-theme-yilia-pro
================
Yilia 是崇尚简约优雅，以及极致的性能


Yilia 是由 **[litten](https://github.com/litten)** 在2014年9月开发

Yilia-Pro 由 **[Lete乐特](https://github.com/lete114)** 在2020年9月进行优化更新

                        
## 使用

#### 安装

``` bash
git clone https://github.com/lete114/hexo-theme-yilia-pro.git themes/Yilia-Pro
```

#### 配置

修改hexo根目录下的 `_config.yml` ： `theme: Yilia-Pro`

## 配置

在原Yilia基础上增加的功能

1. 标题前添加图标(可旋转)
2. 自定义图标
3. 自定义图标大小
4. 添加主题样式(搞自由度定制)
5. 代码块样式(default | darker | pale night | light | ocean | mac | mac light)
6. 代码框(default | darker | pale night | light | ocean | mac | mac light)
7. 字数统计
8. 阅读时长统计
9. 访问量统计(不蒜子)
10. 文章最新更新时间
11. 自定义标题切换
12. 自定义搜索框desc
13. 网站启动年份
14. 网站运行时间
15. ICP备案
16. CDN加速
17. 版权声明
18. Valine评论系统(移除其他评论系统、目前只有valine、计划未来添加其他评论系统)
19. 自定义引入css、js
20. 百度分析&谷歌分析
21. 页脚自定义字体颜色
22. 自定义文章封面
23. 页脚小红心
24. 其他细节优化


>如果你有好的主意或者新功能欢迎与我交流
>
>下面是配置文件全部内容

``` yml
# Header
menu:
  首页: https://yilia.lete114.top
  主页: https://lete114.top/
  导航网: https://nav.lete114.top/
  蝴蝶主题: https://butterfly.lete114.top


# 参考：https://getkit.cn/resources/font-awesome/
# 标题icon图标
rotate_sec: '1s' # 旋转速度默认1秒，留空不不旋转
rotate_deg: '-360deg' # 旋转方向 正数顺时针，负数逆时针，留空不旋转
title_prefix_icon: '\f863' # 图标Unicode编码
title_prefix_icon_color: '#00c4b6' # 图标颜色

# SubNav
font_size: 20px # 图标大小
subnav:
  iconfont icon-youxiang: mailto:lete@lete114.top
  iconfont icon-github3: https://github.com/lete114
  iconfont icon-icon_doc_fill: https://blog.lete114.top
  iconfont icon-lianjie: https://blog.lete114.top/link/
  iconfont icon-csdn: https://me.csdn.net/Lott0419
  iconfont icon-zhihu: https://www.zhihu.com/people/lete114


# 图标
favicon: /img/favicon.ico

#你的头像url
avatar: /img/avatar.png

# 样式定制 - 一般不需要修改，除非有很强的定制欲望…
themes:
  entirety_color: '#e58a8a' # 主题色
  article_more: '#4d4d4d' # 展开更多
  # 背景图片
  bg_img: url("https://cdn.jsdelivr.net/gh/lete114/CDN2/img/wei_er_li_te/3.jpg")
  mobile_bg_img: url("https://cdn.jsdelivr.net/gh/lete114/CDN/Use/JAKWhn.png")
  article: rgba(255,255,255,.7) # 文章透明度
  rightside: '#ccc' # 右侧按钮背景颜色
  a_color: '#00c4b6' # 超链接颜色
  a_color_hover: '#e58a8a'
  scrollbar_color: '#e58a8a' # 滚动条
  slider: '#e58a8a' # 所有文章板块背景，使用渐变色直接 slider: 'linear-gradient(200deg,#fff,#e58a8a)'
  footer_text: '#212121' # 页脚文字颜色
  footer_text_a:
  selection_text_bg: '#00c4b6 '  # 选中文字的背景颜色
  selection_text: '#fff'
  mobile_nav: '#00c4b6' # 头像下方导航文字颜色
  pc_nav: '#00c4b6'

## 代码块样式
highlight_theme: mac # default / darker / pale night / light / ocean / mac / mac light / false


# 是否开启字数统计
word_count:
 enable: true
 wordcount: true # 字数统计
 min2read: true # 阅读时长统计

# 是否开启访问量统计功能(不蒜子)
busuanzi:
 enable: true
 read: false # 开启阅读数

# 是否开启文章最新更新时间
update: true

# 自定义标题切换
amusing_title:
  enable: true
  leave_title: '(つェ⊂) 我藏好了哦~ '
  return_title: '(*´∇｀*) 被你发现啦~ '

# 搜索框描述
search:
  desc: find something…

# 昵称
author: Lete乐特
author_color: '#ff7242' # 左侧栏昵称颜色
footer_author: / # 点击跳转到  输入 '/' 跳转到首页
footer_author_newPage: false # 点击后是否打开新页面


# 网站启动年份
Copyright: 2019
# 网站运行时间
run_time:
 enable: true
 create_time: '04/15/2020 12:00:00' #此处修改你的建站时间或者网站上线时间

# ICP备案
ICP:
  enable: true
  icon: /img/icp.png
  url: http://www.beian.miit.gov.cn/
  text: 

# CDN加速
CDN:
  enable: false
  icon: https://cdn.jsdelivr.net/gh/lete114/CDN/upyun/%E5%8F%88%E6%8B%8D%E4%BA%91_logo5.png
  url: https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral
  text: 提供加速服务


# 是否需要修改 root 路径
# 如果您的网站存放在子目录中，例如 http://yoursite.com/blog，
# 请将您的 url 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
root: https://yilia.lete114.top/

# Content
# 展开全文
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false

# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: '谢谢你请我吃糖果'
# 支付宝二维码图片地址，跟你设置头像的方式一样。比如：/assets/img/alipay.jpg
alipay: https://cdn.jsdelivr.net/gh/lete114/CDN@2.0/Use/zfb.png
# 微信二维码图片地址
weixin: https://cdn.jsdelivr.net/gh/lete114/CDN@2.0/Use/wzf.png

# 目录
# 目录设定：0-不显示目录； 1-文章对应的md文件里有toc:true属性，才有目录； 2-所有文章均显示目录
toc: 2
# 根据自己的习惯来设置，如果你的目录标题习惯有标号，置为true即可隐藏hexo重复的序号；否则置为false
toc_hide_index: true
# 目录为空时的提示
toc_empty_wording: '目录，不存在的…'

#是否开启分享
share_jia: true


# 版权
copy: 2 #0-关闭版权； 1-文章对应的md文件里有copy:true属性，才有版权； 2-所有文章均有版权
# 评论
comment: 2 #0-关闭评论； 1-文章对应的md文件里有comment:true属性，才有评论； 2-所有文章均有评论


# valine
# https://valine.js.org
valine:
  master: 2a77xxxxxxxxxxxxxx4cd7f4442e2 # 你的邮箱md5加密(百度搜索md5在线加密)
  friends: ed5bb6xxxxxxxxxxxxxb7c3aaee6893b,d24719xxxxxxxxxxxxx51909bac991457 # 你的小伙伴的md5邮箱加密
  appId: qvkfTxxxxxxxxxxxxn-MdYXbMMI # 你的 leancloud app id
  appKey: WOURxxxxxxxxxxxtwTyWJrog # 你的 leancloud app key
  pageSize: 5 # 评论列表分页，每页条数。
  lang: zh-CN # i18n: zh-CN/zh-TW/en/ja 语言
  placeholder: 建议使用QQ邮箱，评论头像采用QQ头像，其他邮箱会随机分配头像 #评论框占位符
  recordIP: true # 记录评论者IP
  serverURLs: # 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写)
  emojiCDN: https://cdn.jsdelivr.net/gh/lete114/CDN2/emoji/valine/  # 设置表情包CDN，参考自定义表情(https://valine.js.org/emoji.html)
  enableQQ: true # 使昵称框自动获得QQ昵称和QQ头像

# slider的设置
slider:
  # 是否默认展开tags板块
  showTags: false

# 智能菜单
# 如不需要，将该对应项置为false
# 比如
#smart_menu:
#  friends: false
smart_menu:
  innerArchive: '所有文章'
  #friends: '友链'
  #aboutme: '关于我'

friends:
  友情链接1: http://localhost:4000/
  友情链接2: http://localhost:4000/
  友情链接3: http://localhost:4000/
  友情链接4: http://localhost:4000/
  友情链接5: http://localhost:4000/
  友情链接6: http://localhost:4000/

aboutme: 很惭愧<br><br>只做了一点微小的工作<br>谢谢大家



# 自定义css js
import:
  css:
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css">
#    - <link rel="stylesheet" href="https://blog.lete114.top/css/index.css">
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@master/butterfly/css/iconfont.min.css">
  js:
    -
    #- <script src="https://blog.lete114.top/js/Lete.js"></script>
  style_script:
    -
    - <style>/*修改github图标颜色*/ .icon-github3{color:#000} /*修改博客图标颜色*/ .icon-icon_doc_fill{color:#e58a8a} </style>
    # (如上)不想另建css文件引入可以直接写样式

# 百度统计&谷歌统计
analytics:
  baidu: 'ab2d808c5ec8e10d08db3396ec9ac2b9'
  google:
```

## 其他项目

HomePage：[https://github.com/lete114/hexo-theme-MengD](https://github.com/lete114/hexo-theme-MengD)

获取屏幕颜色(Java): [https://github.com/lete114/Java.Tools](https://github.com/lete114/Java.Tools)

获取屏幕颜色(C#): [https://github.com/lete114/C.Tools](https://github.com/lete114/C.Tools)

谷歌浏览器插件批量下载器：[https://github.com/lete114/GetThemAll](https://github.com/lete114/GetThemAll)
