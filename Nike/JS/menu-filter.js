
    const sortContainer = document.getElementById('sort-container');
    const chevronUp = document.getElementById('chevron-up');
    const chevronDown = document.getElementById('chevron-down');
    const sortMenu = document.getElementById('sort-menu');

    

    sort.addEventListener('click' , sortup);
    function sortup(){
        chevronUp.classList.toggle('active');
        chevronDown.classList.toggle('active');
        sortContainer.classList.toggle('active');
        sortMenu.classList.toggle('active');
       
    }
    
    const filter = document.getElementById('filter');
    filter.addEventListener('click', Filter);

    function Filter(){
        const sideMenu = document.getElementById('side-menu-fiter');
        const main = document.getElementsByClassName('main-content');
        const show = document.getElementById('show');
        const hide = document.getElementById('hide');
    
        sideMenu.classList.toggle('active');
        for(let i = 0;i<main.length;i++){
            main[i].classList.toggle('active');
        }
        show.classList.toggle('active');
        hide.classList.toggle('active');
       
    }



