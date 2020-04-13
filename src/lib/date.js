const dateContainer = document.querySelector('.js-date')
const dateTitle = dateContainer.querySelector('h2')

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const sec = today.getSeconds();
  dateTitle.textContent = ` ${year}-${month}-${day}- test sec: ${sec}`
}

export default function init() {
  getDate()
}
