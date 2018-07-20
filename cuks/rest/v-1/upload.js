'use strict'

module.exports = function(cuk) {
  const { _ } = cuk.pkg.core.lib

  return {
    method: {
      create: {
        middleware: 'http:uploadAny',
        handler: ctx => {
          return { success: true, data: {
            body: ctx.request.body,
//            file: ctx.request.file,
            files: ctx.request.files
          }}
        }
      }
    }
  }
}