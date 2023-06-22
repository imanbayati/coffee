const upBtn = document.querySelector('.up__btn')

window.addEventListener('scroll' , ()=>{
    if (scrollY > 50) {
        upBtn.style.bottom = '3rem'
    }else{
        upBtn.style.bottom = '-3rem'
  
    }
})

upBtn.addEventListener('click' , () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
})












import {Header} from '../components/header/header.js'

window.customElements.define('header-menu', Header)

