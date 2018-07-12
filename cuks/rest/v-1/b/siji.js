'use strict'

module.exports = function(cuk) {
  const { _ } = cuk.pkg.core.lib

  return {
    method: {
      findOne: {
        handler: ctx => {
          var a = ctx.__('dev:key', 'KUNCI 1', 'KUNCI 2', 'KUNCI 3')
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
          return { success: true, data: { ok: true }}
        }
      }
    }
  }
}