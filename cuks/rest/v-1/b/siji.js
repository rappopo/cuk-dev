'use strict'

module.exports = function(cuk) {

  return {
    method: {
      findOne: {
        handler: ctx => {
          return {
            success: true,
            data: {
              a: 1,
              b: 2
            }
          }
        }
      },
      create: {
        middleware: 'http:bodyParser',
        handler: ctx => {
          return { success: true, data: { ok: true }}
        }
      }
    }
  }
}