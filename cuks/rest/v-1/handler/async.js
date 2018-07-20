'use strict'

module.exports = function(cuk) {
  const { _ } = cuk.pkg.core.lib
  const result = require('../_result.json')

  const getResult = () => {
    return Promise.resolve(result)
  }

  return {
    method: {
      find: {
        handler: async ctx => {
          try {
            return await getResult()
          } catch(e) {
            throw e
          }
        }
      }
    }
  }
}