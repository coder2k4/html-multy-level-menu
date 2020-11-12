// show menu

{
    const showMenu = (toggleId, navId) => {
        const $toggle = document.getElementById(toggleId)
        const $nav = document.getElementById(navId)

        if ($toggle && $nav) {
            $toggle.addEventListener('click', () => {
                $nav.classList.toggle('show')
                $toggle.classList.toggle('bx-x')
            })
        }
    }
    showMenu('header-toggle', 'nav-menu')
}


{
    const $links = document.querySelectorAll('.nav__link')
    let $openedMenu = []

    function activeLink() {
        $links.forEach(link => link.classList.remove('active'))
        this.classList.add('active')
    }

    $links.forEach(link => link.addEventListener('click', activeLink))
}



