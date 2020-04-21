const body = document.querySelector('body')

const IMG_NUMBER =3

function getImage(imgNumber){
  const img = new Image()
  img.src =`/img/${imgNumber +1}.jpg`
  img.classList.add("bgImage")
  body.prepend(img)
}

function genRandom(){
  const number = Math.floor(Math.random() *3)
  return number
}

export default function bgInit(){
    const randomNumber = genRandom()
    getImage(randomNumber)
} 