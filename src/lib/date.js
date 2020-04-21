const dateContainer = document.querySelector('.js-date')
const dateTitle = dateContainer.querySelector('h2')
const dayText = dateContainer.querySelector('h4')

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const day = today.getDay()
  const sec = today.getSeconds()
  dateTitle.textContent = `${year}. ${month < 10 ? `0${month}` : month}. ${
    date < 10 ? `0${date}` : date} `
    dayText.textContent = `${days[day]}`
}

export default function dateInit() {
  getDate()
  setInterval(getDate, 1000)
}