let phone = window.matchMedia("(max-width:700px")
if(phone.matches){
    const bar = document.getElementById('icon-content3');
    const exit = document.getElementById('exit');
    const darken3 = document.getElementById('darken');
    const mainContainer = document.getElementById('main-container');
    const menuContainer = document.getElementById('menu-container');
    const movingText = document.getElementById('hoa-home-info');
    const logo = document.getElementById('logo');
    const men2 = document.getElementById('men2');
    const body = document.getElementsByTagName('body');
    bar.addEventListener('click' , activeMenu);


    function activeMenu(){
        menuContainer.classList.toggle('active');
        darken3.classList.toggle('active');
        mainContainer.classList.toggle('active');
        movingText.classList.toggle('active');
        logo.classList.toggle('active');
        for(let i = 0; i<body.length;i++){
            body[i].classList.toggle("active");
        }
        
    }

    exit.addEventListener('click' , removeMenu);

    function removeMenu(){
        menuContainer.classList.toggle('active');
        darken3.classList.toggle('active');
        mainContainer.classList.toggle('active');
        movingText.classList.toggle('active');
        logo.classList.toggle('active');
        for(let i = 0; i<body.length;i++){
            body[i].classList.toggle("active");
        }
    }

    darken3.addEventListener('click' , removeMenu2);

    function removeMenu2(){
        menuContainer.classList.toggle('active');
        darken3.classList.toggle('active');
        mainContainer.classList.toggle('active');
        movingText.classList.toggle('active');
        logo.classList.toggle('active');
        for(let i = 0; i<body.length;i++){
            body[i].classList.toggle("active");
        }
    }

    men2.addEventListener('click', dropdown);
    const back = document.getElementById('backAll');

    function dropdown(){
        const y = document.getElementsByClassName('title-two');
        const z = document.getElementsByClassName('nav-item2')
        const t = document.getElementById('men3');
        const s = document.getElementById('jordan-link');
        const r = document.getElementById('nike-member-container');
        const q = document.getElementsByClassName('other-menu2');

        back.classList.toggle('active');
        for(let i = 0; i < y.length ; i++){
            y[i].classList.toggle('active');
        }
        for(let i = 0; i < z.length ; i++){
            z[i].classList.toggle('active');
        }
        for(let i = 0; i < q.length ; i++){
            q[i].classList.toggle('active');
        }
        t.classList.toggle('active');
        s.classList.toggle('active');
        r.classList.toggle('active');
        exit.classList.toggle('active');
    }

    back.addEventListener('click', dropdownExit);

    function dropdownExit(){
        const y = document.getElementsByClassName('title-two');
        const z = document.getElementsByClassName('nav-item2')
        const t = document.getElementById('men3');
        const s = document.getElementById('jordan-link');
        const r = document.getElementById('nike-member-container');
        const q = document.getElementsByClassName('other-menu2');

        back.classList.toggle('active');
        for(let i = 0; i < y.length ; i++){
            y[i].classList.toggle('active');
        }
        for(let i = 0; i < z.length ; i++){
            z[i].classList.toggle('active');
        }
        for(let i = 0; i < q.length ; i++){
            q[i].classList.toggle('active');
        }
        t.classList.toggle('active');
        s.classList.toggle('active');
        r.classList.toggle('active');
        exit.classList.toggle('active');
    }


    const titleTwo = document.getElementById('title-two');
    const backMen =document.getElementById('backMen');
    titleTwo.addEventListener('click', dropdownNext);

    function dropdownNext(){
        const x = document.getElementsByClassName('title-two');
        const y = document.getElementsByClassName('title-three');
        const t = document.getElementById('backAll');
        const z = document.getElementById('men3');
        const s = document.getElementsByClassName('content');
        const q = document.getElementById('dropdown');

        for(let i = 0; i < x.length ; i++){
            x[i].classList.toggle('active2');
        }
        for(let i = 0; i < y.length ; i++){
            y[i].classList.toggle('active');
        }
        backMen.classList.toggle('active');
        t.classList.toggle('active');
        z.classList.toggle('active2');
        for(let i = 0; i < s.length ; i++){
            s[i].classList.toggle('active');
        }
        q.classList.toggle('active');
    }

    backMen.addEventListener('click', dropdownNextOut);

    function dropdownNextOut(){
        const x = document.getElementsByClassName('title-two');
        const y = document.getElementsByClassName('title-three');
        const t = document.getElementById('backAll');
        const z = document.getElementById('men3');
        const s = document.getElementsByClassName('content');

        for(let i = 0; i < x.length ; i++){
            x[i].classList.toggle('active2');
        }
        for(let i = 0; i < y.length ; i++){
            y[i].classList.toggle('active');
        }
        backMen.classList.toggle('active');
        t.classList.toggle('active');
        z.classList.toggle('active2');
        for(let i = 0; i < s.length ; i++){
            s[i].classList.toggle('active');
        }
    }


}
else{
    const button = document.querySelector('#signin-button');
    const signin = document.querySelector(".signin");
    const off = document.querySelector("#x");

    button.addEventListener('click', signinform);
    off.addEventListener('click', signinform);

    function signinform(){
        button.classList.toggle("active");
        signin.classList.toggle("active");
        off.classList.toggle("active");
    }

    function mOver(){
        const blur = document.getElementById('main-container');
        
        const dropdown = document.getElementById('dropdown');
        const title = document.getElementsByClassName('title');


        const content = document.getElementsByClassName('content');
        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade3 0.6s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade3 0.6s forwards';
        }

        const men = document.getElementById('men');
        men.style.borderBottom = '2px solid black';

        blur.style.animation = 'delay 0.38s forwards';
        dropdown.style.height = '650px';
        let x = window.matchMedia("(max-width:1600px");
        if(x.matches){
            dropdown.style.height = '550px';
        }
        
        const darken = document.getElementById('darken');
        darken.style.animation = 'darken 0.38s forwards';
    }
    function mOut(){
        const offblur = document.getElementById('main-container');
        const dropdown = document.getElementById('dropdown');

        const men = document.getElementById('men');
        men.style.borderBottom = '';

    
        const title = document.getElementsByClassName('title');
        const content = document.getElementsByClassName('content');

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade4 0.2s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade4 0.2s forwards';
        }

        offblur.style.animation = 'delay2 0.3s forwards'
        dropdown.style.height = '';

        const darken = document.getElementById('darken');
        darken.style.animation = 'darken2 0.3s forwards';
    }
    function mOver2(){
        const blur = document.getElementById('main-container');
        const dropdown2 = document.getElementById('dropdown2');

        const title = document.getElementsByClassName('title2');
        const content = document.getElementsByClassName('content2');

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade3 0.6s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade3 0.6s forwards';
        }

        const women = document.getElementById('women');
        women.style.borderBottom = '2px solid black';


        blur.style.animation = 'delay 0.38s forwards';
        dropdown2.style.height = '650px';
        let x = window.matchMedia("(max-width:1600px");
        if(x.matches){
            dropdown2.style.height = '550px';
        }
    
        const darken = document.getElementById('darken');
        darken.style.animation = 'darken 0.38s forwards';
    }
    function mOut2(){
        const offblur = document.getElementById('main-container');
        const dropdown2 = document.getElementById('dropdown2');

        const women = document.getElementById('women');
        women.style.borderBottom = '';

        const title = document.getElementsByClassName('title2');
        const content = document.getElementsByClassName('content2');

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade4 0.2s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade4 0.2s forwards';
        }
    

        offblur.style.animation = 'delay2 0.3s forwards'
        dropdown2.style.height = '';
    
        const darken = document.getElementById('darken');
        darken.style.animation = 'darken2 0.3s forwards';
    }
    function mOver3(){
        const blur = document.getElementById('main-container');
        const dropdown3 = document.getElementById('dropdown3');

        const title = document.getElementsByClassName('title3');
        const content = document.getElementsByClassName('content3');

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade3 0.6s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade3 0.6s forwards';
        }

        const kid = document.getElementById('kid');
        kid.style.borderBottom = '2px solid black';


        blur.style.animation = 'delay 0.38s forwards';
        dropdown3.style.visibility = 'visible';
        dropdown3.style.opacity = '1';
        dropdown3.style.height = '650px';
        let x = window.matchMedia("(max-width:1600px");
        if(x.matches){
            dropdown3.style.height = '550px';
        }
    
        const darken = document.getElementById('darken');
        darken.style.animation = 'darken 0.38s forwards';
    }
    function mOut3(){
        const offblur = document.getElementById('main-container');
        const dropdown3 = document.getElementById('dropdown3');

        const kid = document.getElementById('kid');
        kid.style.borderBottom = '';

        const title = document.getElementsByClassName('title3');
        const content = document.getElementsByClassName('content3');

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade4 0.2s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade4 0.2s forwards';
        }
    

        offblur.style.animation = 'delay2 0.3s forwards'
        dropdown3.style.visibility = '';
        dropdown3.style.opacity = '';
        dropdown3.style.height = '';
    
        const darken = document.getElementById('darken');
        darken.style.animation = 'darken2 0.3s forwards';
    }
    function mOver4(){
        const blur = document.getElementById('main-container');
        const dropdown4 = document.getElementById('dropdown4');
        const title = document.getElementsByClassName('title4');
        const content = document.getElementsByClassName('content4');

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade3 0.6s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade3 0.6s forwards';
        }

        const customise = document.getElementById('customise');
        customise.style.borderBottom = '2px solid black';

        
        blur.style.animation = 'delay 0.38s forwards';
    
        dropdown4.style.height = '250px';
    
        const darken = document.getElementById('darken');
        darken.style.animation = 'darken 0.38s forwards';
    }
    function mOut4(){
        const offblur = document.getElementById('main-container');

        const title = document.getElementsByClassName('title4');
        const content = document.getElementsByClassName('content4');

        const customise = document.getElementById('customise');
        customise.style.borderBottom = '';

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade4 0.2s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade4 0.2s forwards';
        }
        
        offblur.style.animation = 'delay2 0.3s forwards'
        const dropdown4 = document.getElementById('dropdown4');
        dropdown4.style.height = '';

        const darken = document.getElementById('darken');
        darken.style.animation = 'darken2 0.3s forwards';
    }
    function mOver5(){
        const blur = document.getElementById('main-container');

        const title = document.getElementsByClassName('title5');
        const content = document.getElementsByClassName('content5');

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade3 0.6s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade3 0.6s forwards';
        }
        
        const sale = document.getElementById('sale');
        sale.style.borderBottom = '2px solid black';

        blur.style.animation = 'delay 0.38s forwards';
        const dropdown5 = document.getElementById('dropdown5');
        dropdown5.style.visibility = 'visible';
        dropdown5.style.opacity = '1';
        dropdown5.style.height = '250px';

        const darken = document.getElementById('darken');
        darken.style.animation = 'darken 0.38s forwards';
    }
    function mOut5(){
        const offblur = document.getElementById('main-container');

        const title = document.getElementsByClassName('title5');
        const content = document.getElementsByClassName('content5');

        const sale = document.getElementById('sale');
        sale.style.borderBottom = '';

        for(let i = 0; i < title.length ; i++){
            title[i].style.animation = 'fade4 0.2s forwards';
        }
        for(let a = 0 ; a< content.length ; a++){
            content[a].style.animation = 'fade4 0.2s forwards';
        }
        
        offblur.style.animation = 'delay2 0.3s forwards'
        const dropdown5 = document.getElementById('dropdown5');
        dropdown5.style.visibility = '';
        dropdown5.style.opacity = '';
        dropdown5.style.height = '';

        const darken = document.getElementById('darken');
        darken.style.animation = 'darken2 0.3s forwards';
    }

    function dropdownOpen(){
        const x = document.getElementById('bottom-dropdown');
        const y = document.getElementById('footer');
        const z = document.getElementsByClassName('menu-bottom2');

        for(let i = 0; i<z.length ; i++){
            z[i].style.animation = 'fade3 0.6s forwards';
        }
        x.style.height = '180px';
        y.style.animation = 'transition 0.3s forwards';

    }
    function dropdownOut(){
        const x = document.getElementById('bottom-dropdown');
        const y = document.getElementById('footer');
        const z = document.getElementsByClassName('menu-bottom2');

        for(let i = 0; i<z.length ; i++){
            z[i].style.animation = 'fade4 0.3s forwards';
        }

        x.style.height = '';
        y.style.animation = 'transition2 0.3s forwards';
    }
}











