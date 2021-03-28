import '../styles/styles.css'
import Menu from './modules/Menu'
 
let menu = new Menu();

if(module.hot){
  module.hot.accept()
}

/*  Toggle Menu */

/*
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener("click", () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

*/