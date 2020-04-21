import dateInit from './lib/date.js'
import todoInit from './lib/todo.js'
import bgInit from './lib/background.js'

window.addEventListener(
  'DOMContentLoaded',
  () => {
    dateInit()
    todoInit()
    bgInit()
  },
  false
)
