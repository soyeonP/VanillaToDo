const dateContainer = document.querySelector('.js-date')
const dateTitle = dateContainer.querySelector('div .date')
const dayText = dateContainer.querySelector('div .day')

const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const day = today.getDay()
  const sec = today.getSeconds()
  dateTitle.textContent = `${month < 10 ? `0${month}` : month}월 ${
    date < 10 ? `0${date}` : date}일 `
    dayText.textContent = `${days[day]}`
}

export default function dateInit() {
  getDate()
  setInterval(getDate, 1000)
}