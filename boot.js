'use strict'

const replify = require('replify')

module.exports = function(cuk) {
  const { path, _, helper } = cuk.lib
  const pkg = cuk.pkg.dev

  const context = {
    helper: cuk.lib.helper
  }

  helper('core:bootTrace')('%A Exported context %K cuk, %s', null, null, _.keys(context).join(', '))

  replify({
    name: 'dev',
    path: path.join(cuk.dir.data, 'tmp')
  }, cuk, context)


  return Promise.resolve(true)
}