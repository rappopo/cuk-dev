'use strict'

module.exports = function(cuk) {

  return {
    handler: ctx => {
      ctx.render('dev:/component')
    }
  }

}