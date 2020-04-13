const dateContainer = document.querySelector('.js-date')
const dateTitle = dateContainer.querySelector('h2')

export default function date() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  dateTitle.textContent = ` ${year}-${month}-${day} `
}
