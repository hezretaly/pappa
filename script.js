const header = document.querySelector('header')
let prevOffset = 0

const debouncer = (cb) => {
  let counter = 0
  return (...args) => {
    counter++
    if(counter % 11 === 0) {
      cb(...args)
      counter = 0
    }
  }
}

const handleScroll = () => {
  const yOffset = prevOffset - window.scrollY
  if (yOffset < 0) {
    header.classList.add('hide')
  } else {
    header.classList.remove('hide')
  }
  prevOffset = window.scrollY
}

window.addEventListener('scroll', debouncer(handleScroll))

