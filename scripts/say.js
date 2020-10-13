'use strict'

hexo.extend.generator.register('say', function (locals) {
  if (!hexo.theme.config.say.enable) return
  return {
    path: 'say/index.html',
    data: locals.posts,
    layout: ["say"]
  }
})
