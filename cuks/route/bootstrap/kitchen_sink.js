'use strict'

module.exports = function (cuk) {

  return {
    method: 'get, post',
    handler: ctx => {
      ctx.render('dev:/bootstrap/kitchen_sink')
    }
  }

}