'use strict'

const replify = require('replify')

module.exports = function(cuk) {
  const { path, _ } = cuk.lib
  const pkg = cuk.pkg.dev

  pkg.trace('Initializing...')
  const context = {
    helper: cuk.lib.helper
  }

  pkg.trace('Context » %s', _.keys(context).join(', '))

  replify({
    name: 'dev',
    path: path.join(cuk.dir.data, 'tmp')
  }, cuk, context)


  return Promise.resolve(true)
}