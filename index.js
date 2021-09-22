const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

//Adding a event listener
//When we click on the button the index is gonna increment 
next.addEventListener('click', () =>{
  currentActive++

  /* To check if the index is not gonna pass through the last one*/
  if(currentActive > circles.length){
    currentActive = circles.length
  }

  update()
})

//Adding a event listener
//When we click on the button the index is gonna increment 
prev.addEventListener('click', () =>{
  currentActive--

  /* To check if the index is not gonna pass through the last one*/
  if(currentActive < 1){
    currentActive = 1
  }

  update()
})

function update(){
  //Navigate through each index
  circles.forEach((circle, index) =>{
    if(index < currentActive){
      circle.classList.add('active') //Activate the active action if is true
    } else {
      circle.classList.remove('active') //Remove the active action if is false
    }
  })

  //To activate the blue line bar
  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  //To activate the button 'prev' when currentActive is more than 1
  //If the currentActive is equal to the total, disable the 'next' button
  //Then activate both of them if  the 2 options is not true.
  if(currentActive === 1){
    prev.disabled = true
  } else if(currentActive === circles.length){
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}