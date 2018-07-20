'use strict'

module.exports = function(cuk) {
  const result = require('./_result.json')

  return {
    method: {
      find: {
        handler: ctx => {
          a = 2
          return result
        }
      }
    }
  }
}