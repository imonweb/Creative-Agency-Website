class Menu {
  constructor(){
    this.menuIcon = document.querySelector(".toggle")
    this.navigation = document.querySelector(".navigation")
    this.events()
  }

  events(){
    this.menuIcon.addEventListener("click", () => this.toggleMenu())
  }

  toggleMenu(){
    this.navigation.classList.toggle("navigation--active")
    this.menuIcon.classList.toggle("toggle--active")
  }


}

export default Menu