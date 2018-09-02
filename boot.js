'use strict'

const replify = require('replify')

module.exports = function (cuk) {
  const { path, _, helper } = cuk.pkg.core.lib
  const pkg = cuk.pkg.dev

  const context = {
    cuk: cuk,
    helper: cuk.pkg.core.lib.helper
  }

  helper('core:trace')('|  |- Exported context => cuk, %s', _.keys(context).join(', '))

  replify({
    name: 'dev',
    path: path.join(cuk.dir.data, 'tmp')
  }, null, context)


  return Promise.resolve(true)
}