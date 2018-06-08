'use strict'

module.exports = function(cuk) {

  return {
    handler: ctx => {
      let n = ctx.session.views || 0
      ctx.session.views = ++n
      ctx.body = n + ' views'
    }
  }

}