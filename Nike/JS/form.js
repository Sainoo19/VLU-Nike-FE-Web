

window.addEventListener('click', function(event){
    let form = document.getElementById('textbox');
    
    form.classList.add('your-class');
    if(event.target != form){
        form.classList.remove('your-class');
    }
});
window.addEventListener('click', function(event){
    let form2 = document.getElementById('textbox2');
    form2.classList.add('your-class');
    if(event.target != form2){
        form2.classList.remove('your-class');
    }
});

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        reloadPage();
    }   
}

const signinForm = document.getElementById('signin');
if(signinForm.style.opacity.toString="1"){
    window.addEventListener('keydown',function(e){
        if(e.key === "Enter"){
            e.preventDefault();
            submit();
            submit2();
        }
    })
}


function submit(){
    let user = document.getElementById('textbox').value;
    let y = document.getElementById('textbox2').value;
    let z = document.getElementById('textbox');
    let t = document.getElementById('textbox2');
    const error = document.getElementById('error');
    const error2 = document.getElementById('error2');
   

    if (user == ""){
        z.style.border = "1px solid red";
        document.getElementById('error').innerHTML= "Please enter username";
        error.style.marginTop = '12px';
        error.style.marginBottom = '4px'
        signin.style.top = '22%';
        let laptopDisplay = window.matchMedia("(max-width:1600px");
        if(laptopDisplay.matches){
            signin.style.top = '18%';
        }

    }else{
        z.style.border = "";
        document.getElementById('error').innerHTML= "";
        error.style.marginTop = '';
        error.style.marginBottom = ''
        signin.style.top = '24%';
       
    }

    if (y == ""){
        t.style.border = "1px solid red";
        document.getElementById('error2').innerHTML= "Please enter a password.";
        error2.style.marginTop = '12px';
        error2.style.marginBottom = '4px'
     
    }else{
        t.style.border = "";
        document.getElementById('error2').innerHTML= "";
        error2.style.marginTop = '';
        error2.style.marginBottom = ''
        signin.style.top = '24%';
        
    }
    
    if(user != "" && y!=""){
        sessionStorage.setItem("reloading", "true");
        document.location.reload();
        localStorage.setItem('username', user)
        reloadPage();
       
    }
}
 
function getName(){
    return localStorage.getItem("userName");
}

function reloadPage(){
    let x = document.getElementById('join');
    let y = document.getElementById('signin-button');
    let z = document.getElementById('hi');
    let t = document.getElementById('gachdung2');
    let menu = document.getElementById('header-menu');

    x.style.display = 'none';
    y.style.display = 'none';
    z.style.visibility = 'visible';
    z.style.position = 'initial';
    t.style.display = 'none';
    menu.style.marginRight = '4px';

    var user = getName();
    document.getElementById('hi').innerHTML = 'Hi, ' + localStorage.getItem('username') + '<i class="far fa-user"></i>';

}

function resetform(){
    document.getElementById('textbox').value = '';
    document.getElementById('textbox2').value = '';
    document.getElementById('keep').checked = false;
    let z = document.getElementById('textbox');
    let t = document.getElementById('textbox2');

    
    z.style.border = "";
    document.getElementById('error').innerHTML= "";
    error.style.marginTop = '';
    error.style.marginBottom = ''
    t.style.border = "";
    document.getElementById('error2').innerHTML= "";
    error2.style.marginTop = '';
    error2.style.marginBottom = ''
    signin.style.top = '';
}

function usermenuOpen(){
    let x = document.getElementById('user-menu');

    x.style.visibility = 'visible';
    x.style.height = '310px';
}
function usermenuOut(){
    let x = document.getElementById('user-menu');

    x.style.visibility = '';
    x.style.height = '';
}


function submit2(){
    let user = document.getElementById('textbox').value;
    let y = document.getElementById('textbox2').value;
    let z = document.getElementById('textbox');
    let t = document.getElementById('textbox2');

    let signin2 = document.getElementById('signin2');
    const error = document.getElementById('error');
    const error2 = document.getElementById('error2');

    if (user == ""){
        z.style.border = "1px solid red";
        document.getElementById('error').innerHTML= "Please enter username";
        error.style.marginTop = '12px';
        error.style.marginBottom = '4px'
        signin2.style.top = '';
        let laptopDisplay = window.matchMedia("(max-width:1600px");
        if(laptopDisplay.matches){
            signin2.style.top = '18%';
        }

    }else{
        z.style.border = "";
        document.getElementById('error').innerHTML= "";
        error.style.marginTop = '';
        error.style.marginBottom = ''
        signin2.style.top = '';
       
    }

    if (y == ""){
        t.style.border = "1px solid red";
        document.getElementById('error2').innerHTML= "Please enter a password.";
        error2.style.marginTop = '12px';
        error2.style.marginBottom = '4px'
     
    }else{
        t.style.border = "";
        document.getElementById('error2').innerHTML= "";
        error2.style.marginTop = '';
        error2.style.marginBottom = ''
        signin2.style.top = '24%';
        
    }
    
    if(user != "" && y!=""){
        sessionStorage.setItem("reloading", "true");
        location.href = 'info.html'
        localStorage.setItem('username', user)
        reloadPage();
       
    }
}