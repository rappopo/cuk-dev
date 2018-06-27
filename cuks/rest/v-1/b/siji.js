'use strict'

module.exports = function(cuk) {
  const { _ } = cuk.lib

  return {
    method: {
      findOne: {
        middleware: 'i18n:translation',
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
        middleware: 'http:uploadAny',
        handler: ctx => {
          console.log(ctx.req.body)
          console.log(ctx.req.files)
          console.log(ctx.request.body)
          return { success: true, data: { ok: true }}
        }
      }
    }
  }
}