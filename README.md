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

在原Yilia基础上增加的功能(下方是第一个版本添加的功能，详细更新日志：[更新日志](ChangeLogs.md))

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
 首页: /
 主页: https://lete114.top/
 说说: /say/
 导航网: https://nav.lete114.top/
 蝴蝶主题: https://butterfly.lete114.top

# 搜索框描述
search:
 desc: find something…

# 昵称
author: Lete乐特
author_color: '#ff7242' # 左侧栏昵称颜色
footer_author: / # 点击跳转到  输入 '/' 跳转到首页
footer_author_newPage: false # 点击后是否打开新页面

# 图标
favicon: /img/favicon.ico

# 你的头像url
avatar: /img/avatar.png
# 邮箱
mail: lete@lete114.top

# 版权
copy: true #md文件里设置copy:false属性，此文章无版权
# 网站启动年份
Copyright: 2019
# 网站运行时间
run_time:
 enable: true
 create_time: '04/15/2020 12:00:00' #此处修改你的建站时间或者网站上线时间

# 参考：https://getkit.cn/resources/font-awesome/
# 标题icon图标
rotate_sec: '1s' # 旋转速度默认1秒，留空不不旋转
rotate_deg: '-360deg' # 旋转方向 正数顺时针，负数逆时针，留空不旋转
title_prefix_icon: '\f863' # 图标Unicode编码
title_prefix_icon_color: '#00c4b6' # 图标颜色

# SubNav
font_size: 20px # 图标大小
subnav:
 fab fa-github: https://github.com/lete114
 fas fa-book: https://blog.lete114.top
 fas fa-link: https://blog.lete114.top/link/

# 自定义标题切换
amusing_title:
 enable: true
 leave_title: '(つェ⊂) 我藏好了哦~ '
 return_title: '(*´∇｀*) 被你发现啦~ '


## 代码块样式
highlight_theme: mac # default / darker / pale night / light / ocean / mac / mac light / false

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

# ICP备案
ICP:
 enable: false
 icon: /img/icp.png
 url: http://www.beian.miit.gov.cn/
 text:

# CDN加速
CDN:
 enable: false
 icon: https://cdn.jsdelivr.net/gh/lete114/CDN/upyun/%E5%8F%88%E6%8B%8D%E4%BA%91_logo5.png
 url: https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral
 text: 提供加速服务


# 字数统计
word_count:
 enable: true
 wordcount: true # 字数统计
 min2read: true # 阅读时长统计

# 访问量统计功能(不蒜子)
busuanzi:
 enable: true
 read: false # 开启阅读数

# 是否开启文章最新更新时间
update: true



# Content
# 展开全文
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false

# 打赏
reward: true #  md文件里有reward: false属性则当前文章不显示打赏
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


## Artitalk 说说
## https://artitalk.js.org/settings.html
say:
 enable: true
 title: 唠叨唠叨 # 标题
 desc: # 描述(副标题)
 appId: Wxxxxxxxhd1Ba9xxxxxxxxxxYXbMMI #你的 leancloud app id
 appKey: M9PBnxxxxxxxxxxxggr3Kvs #你的 leancloud app key
 serverURL: ''# 如果你是国内版 LeanCloud 用户，此项必填
 lang: ''# 语言设置 默认：zh（中文）选项：en（英语），es（西班牙语）
 pageSize: 5 # 默认值：5 每页显示说说的数量
 shuoPla: ''# 在编辑说说的输入框中的占位符
 avatarPla: ''# 自定义头像 url 的输入框的的占位符
 motion: 0 # 加载动画的开关 选项：0（关闭），1（开启）
 bgImg: ''# 说说输入框背景图片
 cssUrl: ''# 自定义css接口
 atComment: 1 # 评论功能的开关 选项：0（关闭），1（开启）
 color1: '' # 说说背景颜色 1 & 按钮颜色 1
 color2: '' # 说说背景颜色 2 & 按钮颜色 2
 color3: '' # 说说字体颜色 1
 atEmoji: # 自定义表情包(如下示例)
  baiyan: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png
  bishi: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png
  bizui: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png
  chan: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png
  daku: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png
  dalao: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png
  dalian: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png
  dianzan: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png
  doge: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png
  facai: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png
  fadai: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png
  fanu: https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png

# 评论
comments: true #md文件里设置comments:false属性，此文章无评论

# Valine
# https://valine.js.org
valine:
 master: 2a776xxxxxxxxx4cd7f4442e2 # 你的邮箱md5加密(百度搜索md5在线加密)
 friends: ed5bb6xxxxxxxxxab7c3aaee6893b,d24719e3b7a6xxxxxxxxac991457 # 你的小伙伴的md5邮箱加密
 appId: qvkfTxFxxxxxxxxxxn-MdYXbMMI # 你的 leancloud app id
 appKey: WOUxxxxxxxxxyWJrog # 你的 leancloud app key
 pageSize: 5 # 评论列表分页，每页条数。
 lang: zh-CN # i18n: zh-CN/zh-TW/en/ja 语言
 placeholder: 建议使用QQ邮箱，评论头像采用QQ头像，其他邮箱会随机分配头像 #评论框占位符
 recordIP: true # 记录评论者IP
 serverURLs: # 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写)
 emojiCDN:  # 设置表情包CDN，参考自定义表情(https://valine.js.org/emoji.html)
 enableQQ: true # 使昵称框自动获得QQ昵称和QQ头像
 emojiMaps: # 表情包图片


## Artalk
## https://artalk.js.org
Artalk:
 enable: false
 placeholder: 开车不规范，亲人两行泪 # 评论框占位字符
 noComment: 快来沙发！ # 评论为空时显示字符
 sendBtn: 发送 # 发送按钮文字
 defaultAvatar: mp #默认头像类型
 pageKey: location.pathname # 页面唯一标识
 serverUrl: https://artalk.lete114.top # 服务器地址
 cdn: https://dn-qiniu-avatar.qbox.me/avatar/ # 头像CDN地址
 pageSize: 5 # 每次请求获取评论数量数量
 autoLoad: true # 滚动到底部自动加载
 emoticons: '{"滑稽":{"inputType":"image","container":{"原味稽":"https://i.loli.net/2019/02/01/5c53d26b7ae13.png","还是算了":"https://i.loli.net/2020/04/30/riySFlu75fJdG4p.png","蓝纹稽":"https://i.loli.net/2020/04/30/jyh5IVzpqXsHuvU.jpg","随稽应变":"https://i.loli.net/2017/02/05/5896e6ec1d528.jpg","蠕动":"https://i.loli.net/2017/02/05/5896e9712a3c1.gif","束手无稽":"https://i.loli.net/2020/04/30/dF8sTOpgomj7qf5.jpg","微笑默叹以为妙绝":"https://i.loli.net/2019/02/01/5c53daa84f24a.png","喝嘤料":"https://i.loli.net/2019/02/01/5c53d63d8c6af.jpg","暗中观察":"https://i.loli.net/2019/02/01/5c53dd21a2e7b.jpg","高兴":"https://i.loli.net/2019/02/01/5c53d1b9e5f38.jpg","惊稽":"https://i.loli.net/2019/02/01/5c53d1e2ad89f.jpg","可这和我的帅有什么关系":"https://i.loli.net/2017/02/05/5896ece29a8e0.jpg","狱稽":"https://i.loli.net/2020/04/30/cUEQrVYGFiDjqhy.jpg","梆":"https://i.loli.net/2020/04/30/TlAGjm6IvJSMVpq.jpg","吃鱼摆摆":"https://i.loli.net/2017/02/05/5896ec2cb7f39.gif","跃跃欲试 3":"https://i.loli.net/2017/02/05/5896ece2ac5a2.gif","突然滑稽":"https://i.loli.net/2019/02/01/5c53cf2a457f1.jpg","扶墙怂":"https://i.loli.net/2017/02/05/5896ece2ab57a.jpg","阔以":"https://i.loli.net/2020/04/30/7EYyq1TcBKa3eQ2.jpg","不得行":"https://i.loli.net/2020/04/30/KoqBGauX7TEfeyn.jpg","少儿不宜":"https://i.loli.net/2020/04/30/nt2ZWRozUNjBxAK.jpg","稽日可期":"https://i.loli.net/2020/04/30/FmfYcoMJesi2Ddq.jpg","哎":"https://i.loli.net/2020/04/30/ps7PTIANgSErqnU.jpg","别看丢人":"https://i.loli.net/2019/02/01/5c53d4f89ea29.jpg","地稽 2":"https://i.loli.net/2019/02/01/5c53dbae85687.jpg","地稽":"https://i.loli.net/2020/04/30/BnTMX35EPxleVmA.jpg","老阔有点扣":"https://i.loli.net/2020/04/30/fhDXbA9T1zJPlKk.gif","啊哈哈":"https://i.loli.net/2019/02/01/5c53dc2947d84.jpg","无稽可奈":"https://i.loli.net/2020/04/30/UyxTzB2fS3LtH7Q.jpg","老实巴交":"https://i.loli.net/2020/04/30/7DgSoyqwtYBxchE.jpg","紧张":"https://i.loli.net/2017/02/05/5896e8a408253.jpg","摇摆稽":"https://i.loli.net/2019/02/01/5c53d1904dcb2.gif","又不是不能用":"https://i.loli.net/2019/02/01/5c53ce897ab55.jpg","一时滑稽":"https://i.loli.net/2019/02/01/5c53d5d28e22c.jpg","无法接受":"https://i.loli.net/2019/02/01/5c53cee8422fc.jpg","嘤雄豪稽":"https://i.loli.net/2020/04/30/sbtw6o7iKaM4Nmq.jpg","相视双稽":"https://i.loli.net/2019/02/01/5c53d5a093149.jpg","稽皮发麻":"https://i.loli.net/2017/02/05/5896ece2a019f.jpg","地稽 3":"https://i.loli.net/2019/02/01/5c53dbe510bcf.jpg","地稽委屈":"https://i.loli.net/2019/02/01/5c53d76e250da.jpg","地稽抚摸":"https://i.loli.net/2020/04/30/cavZ6nNzMPimLy7.gif","地稽捶打":"https://i.loli.net/2020/04/30/vFVPynXaHR5sitk.gif","绝望":"https://i.loli.net/2019/02/01/5c53dc0ba2303.jpg","气稽败坏":"https://i.loli.net/2019/02/01/5c53d216f3c60.jpg","当场去世":"https://i.loli.net/2020/04/30/sogxHMTFWbE2lrP.jpg","喝酒":"https://i.loli.net/2019/02/01/5c53d78c3f4a5.jpg","老衲摆摊算命":"https://i.loli.net/2017/02/05/5896ece29d8a5.gif","老哥，稳":"https://i.loli.net/2017/02/05/5896ece29ebb0.jpg","自闭稽":"https://i.loli.net/2019/02/01/5c53d6603ee24.jpg","无话可说":"https://i.loli.net/2019/02/01/5c53d6a77b7e4.jpg","跃跃欲试":"https://i.loli.net/2017/02/05/5896e9710dfd5.jpg","跃跃欲试 2":"https://i.loli.net/2019/02/01/5c53dcc057350.jpg","满脑子骚操作":"https://i.loli.net/2020/04/30/xJXcUtO2BryHAsa.gif","稽之舞":"https://i.loli.net/2019/02/01/5c53de1a4d14d.gif","将稽就稽":"https://i.loli.net/2020/04/30/KVwf8qCrZts6WOT.gif"}}}'
 # 表情包 如上示例使用json 空的话使用默认表情包
 # 压缩和验证json：https://www.bejson.com/

# 自定义css js
import:
 css:
  - <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css">
 js:
  -
  #- <script src="https://blog.lete114.top/js/Lete.js"></script>
 style_script:
  -
  - <style>/*修改图标颜色*/ .fa-github{color:#000} .fa-book{color:#709fb0} .fa-link{color:#a37eba} </style>
  # (如上)不想另建css文件引入可以直接写样式

# 百度统计&谷歌统计
analytics:
 baidu: 'ab2d808c5ec8e10d08db3396ec9ac2b9'
 google:

# 404 page
error_404:
 enable: true
 sec: 30
 name_color: '#80bdab'
 color: '#e58a8a'
 text: '404！页面君找不到这个网页！！'
 bg_img: url("https://cdn.jsdelivr.net/gh/lete114/CDN2/img/wei_er_li_te/3.jpg")
 music:
   ### autoplay=自动播放 | loop=循环播放 | controls=显示控件 | muted=静音 | src=音频地址
   ### 不推荐：controls、muted、preload
   ### preload=音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性
  autoplay
  loop
  src="https://656e-env-jxscvzag-1301xxxxxxxxxxxxxxxxxud.la/music/zenyang.mp3"



## --------------------没事就别动下面的配置了--------------------

# slider的设置
slider:
 # 是否默认展开tags板块
 showTags: true

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

```

## 其他项目

HomePage：[https://github.com/lete114/hexo-theme-MengD](https://github.com/lete114/hexo-theme-MengD)

获取屏幕颜色(Java): [https://github.com/lete114/Java.Tools](https://github.com/lete114/Java.Tools)

获取屏幕颜色(C#): [https://github.com/lete114/C.Tools](https://github.com/lete114/C.Tools)

谷歌浏览器插件批量下载器：[https://github.com/lete114/GetThemAll](https://github.com/lete114/GetThemAll)
