const template = document.createElement('template')

template.innerHTML= `<li class="nav__item">
                        <a href="#" class="nav__link">
                            <i class="menu__icon"></i>
                            <span class="menu__text"></span>
                        </a>
                    </li>
                    <link type="text/css" rel="stylesheet" href="components/header/header.css">
                    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.0.0/fonts/remixicon.css" rel="stylesheet">
                    `

class Header extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){
        this.shadowRoot.querySelector('.menu__text').innerHTML = this.getAttribute('title')
        this.shadowRoot.querySelector('.menu__icon').classList.add(this.getAttribute('icon')) 
    }

    static observedAttribute(){
        return ['title' , 'icon']
    }
}

export {Header}