(() => {
  'use strict';
  new class {
    constructor() {
      this.init = () => {
        try {
          const transparent = document.querySelector('a[data-name="Pagaleve Transparente"]')
          if (!transparent) return
          const innerText = transparent.children[0].innerHTML
          transparent.children[0].innerHTML = innerText + ' transparente'
          console.log('text applied')
        } catch (error) {
          console.log('error', 'Erro', error)
        }
      }
    }
  }().init()
})()
