const toDoForm = document.querySelector('.js-toDoForm')
const toDoList = document.querySelector('.toDoList ul')
const toDoInput = toDoForm.querySelector('input')
const completedList = document.querySelector('.doneList ul')

const TODOS_LS = 'toDos'
const COMPLETED_LS = 'comples'
let toDos = []
let comples = []

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}
function saveCompleted() {
  console.log(comples)
  localStorage.setItem(COMPLETED_LS, JSON.stringify(comples))
}

function deleteToDo(event) {
  const btn = event.target
  const li = btn.parentNode.parentNode
  toDoList.removeChild(li)
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id)
  })
  toDos = cleanToDos
  saveToDos()
  console.log(cleanToDos)
}

function deleteCompleted(event) {
  const btn = event.target
  const li = btn.parentNode.parentNode
  completedList.removeChild(li)
  const cleanComples = comples.filter(function(comples) {
    return comples.id !== parseInt(li.id)
  })
  comples = cleanComples
  saveCompleted()
  console.log(cleanComples)
}


function completeToDo(event) {
  const btn = event.target
  const li = btn.parentNode.parentNode
  toDoList.removeChild(li)
  btn.className = "icon-check"
  addToCompleted(li)
}

function writeToDo(text) {
  const li = document.createElement('li')
  const comBtn = document.createElement('a')
  const delBtn = document.createElement('a')
  const comIcon = document.createElement('i')
  const delIcon = document.createElement('i')
  delIcon.className = "icon-cancel"
  comIcon.className = "icon-check-empty"

  comBtn.appendChild(comIcon)
  delBtn.appendChild(delIcon)
  delBtn.addEventListener('click', deleteToDo)
  comBtn.addEventListener('click',completeToDo)

  const span = document.createElement('span')
  const newId = toDos.length + 1
  span.textContent = text
  li.appendChild(comBtn)
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = newId
  toDoList.appendChild(li)
  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj)
  saveToDos()
}

function writeCompleted(text) {
  console.log(text)
  const li = document.createElement('li')
  const comBtn = document.createElement('a')
  const delBtn = document.createElement('a')
  const comIcon = document.createElement('i')
  const delIcon = document.createElement('i')
  delIcon.className = "icon-cancel"
  comIcon.className = "icon-check"

  comBtn.appendChild(comIcon)
  delBtn.appendChild(delIcon)
  delBtn.addEventListener('click', deleteCompleted)

  const span = document.createElement('span')
  const newId = comples.length + 1
  span.textContent = text
  li.appendChild(comBtn)
  li.appendChild(span)
  li.appendChild(delBtn)
  li.id = newId
  completedList.appendChild(li)
  const compleObj = {
    text: text,
    id: newId
  }
  comples.push(compleObj)
  saveCompleted()
}

function addToCompleted(li) {
  writeCompleted(li.querySelector('span').textContent)
}

function sendToWriteToDo(content) {
  writeToDo(content.text)
}

function sendToWriteComple(content) {
  writeCompleted(content.text)
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS)
  const loadedComples = localStorage.getItem(COMPLETED_LS)
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos)
    parsedToDos.forEach(sendToWriteToDo)
  }
  if (loadedComples !== null){
    const parsedComples = JSON.parse(loadedComples)
    parsedComples.forEach(sendToWriteComple)
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
