import '../styles/styles.css'
import Menu from './modules/Menu'

let menu = new Menu();

if(module.hot){
  module.hot.accept()
}