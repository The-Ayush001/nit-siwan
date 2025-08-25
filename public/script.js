let img = document.querySelectorAll('.images')
let back_btn = document.querySelector('#left_back')
let next_btn = document.querySelector('#right_next')
console.log(img)
let active_img = 0;
img[active_img].classList += 'isActive'


const nextimage = () => {
  img[active_img] .className = 'images';
  const length = img.length; //image index number
  console.log(length)
  if(active_img < length-1){
    active_img++;
    console.log(active_img)
  }
  else{
    active_img = 0;
    console.log(active_img)
  }
  img[active_img]. classList += 'isActive'
}

next_btn.addEventListener('click', nextimage)  //click the button the next image come

back_btn.addEventListener('click', () => {
  if(active_img !== 0 ){
     active_img--;
    console.log('back image')
    console.log(active_img)
  }
  img[active_img]. classList += 'isActive'

})

setInterval (() =>{
  nextimage();
},5000)