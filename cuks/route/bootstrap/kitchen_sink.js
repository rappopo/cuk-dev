'use strict'

module.exports = function(cuk) {

  return {
    middleware: 'log:httpJson',
    handler: ctx => {
      ctx.render('dev:/bootstrap/kitchen_sink')
    }
  }

}