'use strict'

module.exports = function(cuk) {

  return {
    method: {
      findOne: {
        handler: ctx => {
          a = 2
          return {
            success: true,
            data: {
              a: 1,
              b: 2
            }
          }
        }
      }
    }
  }
}