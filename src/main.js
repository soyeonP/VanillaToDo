import hello from './lib/hello.js'
import date from './lib/date.js'

window.addEventListener(
  'DOMContentLoaded',
  () => {
    hello()
    date()
  },
  false
)
