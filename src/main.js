import hello from './lib/hello.js'
import dateInit from './lib/date.js'
import todoInit from './lib/todo.js'

window.addEventListener(
  'DOMContentLoaded',
  () => {
    hello()
    dateInit()
    todoInit()
  },
  false
)
