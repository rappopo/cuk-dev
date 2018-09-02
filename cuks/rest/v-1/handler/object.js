'use strict'

module.exports = function (cuk) {
  const { _ } = cuk.pkg.core.lib
  const result = require('../_result.json')

  return {
    method: {
      find: {
        handler: ctx => {
          return result
        }
      }
    }
  }
}