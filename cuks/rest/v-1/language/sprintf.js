'use strict'

module.exports = function (cuk) {
  const { _ } = cuk.pkg.core.lib

  return {
    middleware: 'i18n:translation',
    method: {
      find: {
        handler: ctx => {
          return {
            success: true,
            data: [{
              key: 'key',
              msg: ctx.ts('dev:key', 1, 2, 3)
            }]
          }
        }
      }
    }
  }
}