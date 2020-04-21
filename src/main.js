import dateInit from './lib/date.js'
import todoInit from './lib/todo.js'

window.addEventListener(
  'DOMContentLoaded',
  () => {
    dateInit()
    todoInit()
  },
  false
)
