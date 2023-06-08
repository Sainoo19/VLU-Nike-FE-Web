function refresh(){
    const x = document.getElementById('gach1');
    const y = document.getElementById('gach2');
    const z = document.getElementById('gach3');

    const main1 = document.getElementById('main-container1');
    const main2 = document.getElementById('main-container2');
    const main3 = document.getElementById('main-container3');

    x.style.borderBottom = 'black 2px solid ';
    y.style.borderBottom = '';
    z.style.borderBottom = '';

    main1.style.opacity = '1';
    main1.style.zIndex = '10'
    main2.style.opacity = '0';
    main2.style.zIndex = '0';
}

function item1(){
    const x = document.getElementById('gach1');
    const y = document.getElementById('gach2');
    const z = document.getElementById('gach3');

    const main1 = document.getElementById('main-container1');
    const main2 = document.getElementById('main-container2');
    const main3 = document.getElementById('main-container3');

    x.style.borderBottom = 'black 2px solid ';
    y.style.borderBottom = '';
    z.style.borderBottom = '';
    main1.style.opacity = '1';
    main1.style.zIndex = '10'
    main2.style.opacity = '0';
    main2.style.zIndex = '0';
    main3.style.opacity = '0';
    main3.style.zIndex = '0';

    const view = document.getElementById('gallery-view');
    view.style.opacity = '1';

    const view2 = document.getElementById('gallery-view2');
    view2.style.opacity = '1';
}

function item2(){
    const x = document.getElementById('gach1');
    const y = document.getElementById('gach2');
    const z = document.getElementById('gach3');

    const main1 = document.getElementById('main-container1');
    const main2 = document.getElementById('main-container2');
    const main3 = document.getElementById('main-container3');

    x.style.borderBottom = 'none'
    y.style.borderBottom = 'black 2px solid ';
    z.style.borderBottom = '';

    main1.style.opacity = '0';
    main1.style.zIndex = '0'
    main2.style.opacity = '1';
    main2.style.zIndex = '10';
    main3.style.opacity = '0';
    main3.style.zIndex = '0';

    const view = document.getElementById('gallery-view');
    view.style.opacity = '1';
    
    const view2 = document.getElementById('gallery-view2');
    view2.style.opacity = '1';
}



function item3(){
    const x = document.getElementById('gach1');
    const y = document.getElementById('gach2');
    const z = document.getElementById('gach3');

    const main1 = document.getElementById('main-container1');
    const main2 = document.getElementById('main-container2');
    const main3 = document.getElementById('main-container3');

    x.style.borderBottom = 'none'
    y.style.borderBottom = '';
    z.style.borderBottom = 'black 2px solid ';

    main1.style.opacity = '0';
    main1.style.zIndex = '0'
    main2.style.opacity = '0';
    main2.style.zIndex = '0';
    main3.style.opacity = '1';
    main3.style.zIndex = '10';

    const container = document.getElementsByClassName('product-container');
    for(let e = 0; e < container.length; e++){
        container[e].style.justifyContent = '';
        container[e].style.marginRight = '';
    }

    const card = document.getElementsByClassName('product-card');
    for(let i = 0 ; i < card.length; i++){
        card[i].style.width = '';
        card[i].style.marginRight = ''
    }
    const info = document.getElementsByClassName('product-info');
    for(let a = 0 ; a < info.length; a++){
        info[a].style.display = '';
    }
    const coming = document.getElementsByClassName('coming');
    for(let b = 0; b < coming.length; b++){
        coming[b].style.display = '';
    }
    const coming2 = document.getElementsByClassName('coming2');
    for(let c = 0; c < coming2.length; c++){
        coming2[c].style.display = '';
    }
    const coming3 = document.getElementsByClassName('coming3');
    for(let d = 0; d < coming3.length; d++){
        coming3[d].style.display = '';
    }

    const view = document.getElementById('gallery-view');
    view.style.visibility = 'visible';
    view.style.opacity = '0';

    const view2 = document.getElementById('gallery-view2');
    view2.style.opacity = '0';
    view2.style.visibility = 'hidden';

    const footer = document.getElementById('footer');
    footer.style.marginTop = '';
}

function galleryView(){
    const container = document.getElementsByClassName('product-container');
    for(let x = 0; x < container.length; x++){
        container[x].style.justifyContent = 'left';
        container[x].style.marginRight = '0px';
    }

    const card = document.getElementsByClassName('product-card');
    for(let i = 0 ; i < card.length; i++){
        card[i].style.width = '16%';
        card[i].style.marginRight = '0.5%'
    }
    const info = document.getElementsByClassName('product-info');
    for(let a = 0 ; a < info.length; a++){
        info[a].style.display = 'none';
    }
    const coming = document.getElementsByClassName('coming');
    for(let b = 0; b < coming.length; b++){
        coming[b].style.display = 'none';
    }
    const coming2 = document.getElementsByClassName('coming2');
    for(let c = 0; c < coming2.length; c++){
        coming2[c].style.display = 'none';
    }
    const coming3 = document.getElementsByClassName('coming3');
    for(let d = 0; d < coming3.length; d++){
        coming3[d].style.display = 'none';
    }

    const view = document.getElementById('gallery-view');
    view.style.visibility = 'hidden';

    const view2 = document.getElementById('gallery-view2');
    view2.style.visibility = 'visible'

    const footer = document.getElementById('footer');
    footer.style.marginTop = '48%';
}


function galleryView2(){
    const container = document.getElementsByClassName('product-container');
    for(let x = 0; x < container.length; x++){
        container[x].style.justifyContent = '';
        container[x].style.marginRight = '';
    }

    const card = document.getElementsByClassName('product-card');
    for(let i = 0 ; i < card.length; i++){
        card[i].style.width = '';
        card[i].style.marginRight = ''
    }
    const info = document.getElementsByClassName('product-info');
    for(let a = 0 ; a < info.length; a++){
        info[a].style.display = '';
    }
    const coming = document.getElementsByClassName('coming');
    for(let b = 0; b < coming.length; b++){
        coming[b].style.display = '';
    }
    const coming2 = document.getElementsByClassName('coming2');
    for(let c = 0; c < coming2.length; c++){
        coming2[c].style.display = '';
    }
    const coming3 = document.getElementsByClassName('coming3');
    for(let d = 0; d < coming3.length; d++){
        coming3[d].style.display = '';
    }

    const view = document.getElementById('gallery-view');
    view.style.visibility = 'visible';

    const view2 = document.getElementById('gallery-view2');
    view2.style.visibility = 'hidden';

    const footer = document.getElementById('footer');
    footer.style.marginTop = '';
}


/*----------------------------------------------------------------------------------------------------------------*/
            /*---------------------------------------------------------------------------------------*/




function hover(){
    const x = document.getElementById('coming');
    const y = document.getElementById('product-info');
    const z = document.getElementById('product-image1');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out(){
    const x = document.getElementById('coming');
    const y = document.getElementById('product-info');
    const z = document.getElementById('product-image1');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover2(){
    const x = document.getElementById('coming2');
    const y = document.getElementById('product-info2');
    const z = document.getElementById('product-image2');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out2(){
    const x = document.getElementById('coming2');
    const y = document.getElementById('product-info2');
    const z = document.getElementById('product-image2');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover3(){
    const x = document.getElementById('coming3');
    const y = document.getElementById('product-info3');
    const z = document.getElementById('product-image3');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out3(){
    const x = document.getElementById('coming3');
    const y = document.getElementById('product-info3');
    const z = document.getElementById('product-image3');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover4(){
    const x = document.getElementById('coming4');
    const y = document.getElementById('product-info4');
    const z = document.getElementById('product-image4');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out4(){
    const x = document.getElementById('coming4');
    const y = document.getElementById('product-info4');
    const z = document.getElementById('product-image4');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover5(){
    const x = document.getElementById('coming5');
    const y = document.getElementById('product-info5');
    const z = document.getElementById('product-image5');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out5(){
    const x = document.getElementById('coming5');
    const y = document.getElementById('product-info5');
    const z = document.getElementById('product-image5');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover6(){
    const x = document.getElementById('coming6');
    const y = document.getElementById('product-info6');
    const z = document.getElementById('product-image6');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out6(){
    const x = document.getElementById('coming6');
    const y = document.getElementById('product-info6');
    const z = document.getElementById('product-image6');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover7(){
    const z = document.getElementById('product-image7');

    z.style.opacity = '0.8';
}
function out7(){
    const z = document.getElementById('product-image7');

    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover8(){
    const x = document.getElementById('coming8');
    const y = document.getElementById('product-info8');
    const z = document.getElementById('product-image8');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out8(){
    const x = document.getElementById('coming8');
    const y = document.getElementById('product-info8');
    const z = document.getElementById('product-image8');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover9(){
    const x = document.getElementById('coming8');
    const y = document.getElementById('product-info9');
    const z = document.getElementById('product-image9');

    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out9(){
    const x = document.getElementById('coming8');
    const y = document.getElementById('product-info9');
    const z = document.getElementById('product-image9');

    y.style.visibility = 'visible';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover10(){
    const x = document.getElementById('coming10');
    const y = document.getElementById('product-info10');
    const z = document.getElementById('product-image10');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out10(){
    const x = document.getElementById('coming10');
    const y = document.getElementById('product-info10');
    const z = document.getElementById('product-image10');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover11(){
    const x = document.getElementById('coming11');
    const y = document.getElementById('product-info11');
    const z = document.getElementById('product-image11');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out11(){
    const x = document.getElementById('coming11');
    const y = document.getElementById('product-info11');
    const z = document.getElementById('product-image11');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover12(){
    const x = document.getElementById('coming12');
    const y = document.getElementById('product-info12');
    const z = document.getElementById('product-image12');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out12(){
    const x = document.getElementById('coming12');
    const y = document.getElementById('product-info12');
    const z = document.getElementById('product-image12');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover13(){
    const x = document.getElementById('coming13');
    const y = document.getElementById('product-info13');
    const z = document.getElementById('product-image13');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out13(){
    const x = document.getElementById('coming13');
    const y = document.getElementById('product-info13');
    const z = document.getElementById('product-image13');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover14(){
    const x = document.getElementById('coming14');
    const y = document.getElementById('product-info14');
    const z = document.getElementById('product-image14');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out14(){
    const x = document.getElementById('coming14');
    const y = document.getElementById('product-info14');
    const z = document.getElementById('product-image14');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover15(){
    const x = document.getElementById('coming15');
    const y = document.getElementById('product-info15');
    const z = document.getElementById('product-image15');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out15(){
    const x = document.getElementById('coming15');
    const y = document.getElementById('product-info15');
    const z = document.getElementById('product-image15');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover16(){
    const x = document.getElementById('coming16');
    const y = document.getElementById('product-info16');
    const z = document.getElementById('product-image16');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out16(){
    const x = document.getElementById('coming16');
    const y = document.getElementById('product-info16');
    const z = document.getElementById('product-image16');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover17(){
    const x = document.getElementById('coming17');
    const y = document.getElementById('product-info17');
    const z = document.getElementById('product-image17');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out17(){
    const x = document.getElementById('coming17');
    const y = document.getElementById('product-info17');
    const z = document.getElementById('product-image17');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover18(){
    const x = document.getElementById('coming18');
    const y = document.getElementById('product-info18');
    const z = document.getElementById('product-image18');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out18(){
    const x = document.getElementById('coming18');
    const y = document.getElementById('product-info18');
    const z = document.getElementById('product-image18');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover19(){
    const x = document.getElementById('coming19');
    const y = document.getElementById('product-info19');
    const z = document.getElementById('product-image19');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out19(){
    const x = document.getElementById('coming19');
    const y = document.getElementById('product-info19');
    const z = document.getElementById('product-image19');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover20(){
    const x = document.getElementById('coming20');
    const y = document.getElementById('product-info20');
    const z = document.getElementById('product-image20');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out20(){
    const x = document.getElementById('coming20');
    const y = document.getElementById('product-info20');
    const z = document.getElementById('product-image20');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover21(){
    const x = document.getElementById('coming21');
    const y = document.getElementById('product-info21');
    const z = document.getElementById('product-image21');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out21(){
    const x = document.getElementById('coming21');
    const y = document.getElementById('product-info21');
    const z = document.getElementById('product-image21');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover22(){
    const x = document.getElementById('coming22');
    const y = document.getElementById('product-info22');
    const z = document.getElementById('product-image22');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out22(){
    const x = document.getElementById('coming22');
    const y = document.getElementById('product-info22');
    const z = document.getElementById('product-image22');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover23(){
    const x = document.getElementById('coming23');
    const y = document.getElementById('product-info23');
    const z = document.getElementById('product-image23');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out23(){
    const x = document.getElementById('coming23');
    const y = document.getElementById('product-info23');
    const z = document.getElementById('product-image23');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover24(){
    const x = document.getElementById('coming24');
    const y = document.getElementById('product-info24');
    const z = document.getElementById('product-image24');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out24(){
    const x = document.getElementById('coming24');
    const y = document.getElementById('product-info24');
    const z = document.getElementById('product-image24');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover25(){
    const x = document.getElementById('coming25');
    const y = document.getElementById('product-info25');
    const z = document.getElementById('product-image25');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out25(){
    const x = document.getElementById('coming25');
    const y = document.getElementById('product-info25');
    const z = document.getElementById('product-image25');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover26(){
    const x = document.getElementById('coming26');
    const y = document.getElementById('product-info26');
    const z = document.getElementById('product-image26');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out26(){
    const x = document.getElementById('coming26');
    const y = document.getElementById('product-info26');
    const z = document.getElementById('product-image26');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/
function hover27(){
    const x = document.getElementById('coming27');
    const y = document.getElementById('product-info27');
    const z = document.getElementById('product-image27');

    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';
    z.style.opacity = '0.8';
}
function out27(){
    const x = document.getElementById('coming27');
    const y = document.getElementById('product-info27');
    const z = document.getElementById('product-image27');

    y.style.visibility = 'visible';
    x.style.visibility = 'hidden';
    z.style.opacity = '';
}
/*---------------------------------------------*/