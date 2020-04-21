const toDoForm = document.querySelector('.js-toDoForm')
const toDoList = document.querySelector('.toDoList ul')
const toDoInput = toDoForm.querySelector('input')

const TODOS_LS = 'toDos'
const toDos = []


function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const btn = event.target
  const li = btn.parentNode
  toDoList.removeChild(li)
//   const cleanToDos = toDos.filter(filterFn(toDo) {
//     return toDo.id !== parseInt(li.id)
//   });
}

function writeToDo(text) {
  const li = document.createElement('li')
  const delBtn = document.createElement('button')
  delBtn.textContent = '❌'
  delBtn.addEventListener('click', deleteToDo)
  const span = document.createElement('span')
  const newId = toDos.length + 1
  span.textContent = text
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = newId
  toDoList.appendChild(li)
  toDoList.appendChild(li)
  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj)
  saveToDos()
}

function sendToWrite(toDo) {
  writeToDo(toDo.text)
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS)
  if (toDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos)
    parsedToDos.forEach(sendToWrite)
  }
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = toDoInput.value
  writeToDo(currentValue)
  toDoInput.value = ''
}

export default function todoInit() {
  loadToDos()
  toDoForm.addEventListener("submit", handleSubmit)
}
