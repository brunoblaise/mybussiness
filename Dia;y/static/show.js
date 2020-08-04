const show = document.querySelector('.pow');
const show6 = document.querySelector('.pow6');
const show5 = document.querySelector('.pow5');
const show4 = document.querySelector('.pow4');
const show3 = document.querySelector('.pow3');
const show2 = document.querySelector('.pow2');
const show1 = document.querySelector('.pow1');

const hide = document.querySelector('.hid1');
const hide1 = document.querySelector('.hid2');
const hide2 = document.querySelector('.hid3');
const hide3 = document.querySelector('.hid4');
const hide4 = document.querySelector('.hid5');
const hide5 = document.querySelector('.hid6');
const hide6 = document.querySelector('.hid7');
const hidde = document.querySelector('main')
let Isopen = false;
show.addEventListener('click', fireThewall)
//show6.addEventListener('click', fireThewall6)
show5.addEventListener('click', fireThewall5)
show4.addEventListener('click', fireThewall4)
show3.addEventListener('click', fireThewall3)
show2.addEventListener('click', fireThewall2)
show1.addEventListener('click', fireThewall1)

function loading(){
    const preload = document.querySelector('.loading')
preload.style.display = 'none';
console.log('go');
}

function fireThewall(){
if(!Isopen){
    hide.style.display="block"
    hidde.style.height="820px"
    Isopen= true;
    console.log('love');
}else{
  hide.style.display="none"
    Isopen= false;
    console.log('l');
    hidde.style.height="420px"
  
}

}
function fireThewall6(){
    if(!Isopen){
        hide1.style.display="block"
        Isopen= true;
        console.log('love');
        hidde.style.height="920px"
      
    }else{
        hide1.style.display="none"
        Isopen= false;
        console.log('l');
        hidde.style.height="420px"
      
    }
   
    }
    function fireThewall5(){
        if(!Isopen){
            hide2.style.display="block"
            Isopen= true;
            console.log('love');
            hidde.style.height="1020px"
         
        }else{
            hide2.style.display="none"
            Isopen= false;
            console.log('l');
            hidde.style.height="420px"
          
        }
     
        }
        function fireThewall4(){
            if(!Isopen){
                hide3.style.display="block"
                Isopen= true;
                console.log('love');
                hidde.style.height="820px"
            }else{
                hide3.style.display="none"
                Isopen= false;
                console.log('l');
              
            }
          
            }
            function fireThewall3(){
                if(!Isopen){
                    hide4.style.display="block"
                    Isopen= true;
                    console.log('love');
                    hidde.style.height="820px"
                }else{
                    hide4.style.display="none"
                    Isopen= false;
                    console.log('l');
                  
                }
               
                }
                function fireThewall2(){
                    if(!Isopen){
                        hide5.style.display="block"
                        Isopen= true;
                        console.log('love');
                        hidde.style.height="820px"
                    }else{
                        hide5.style.display="none"
                        Isopen= false;
                        console.log('l');
                      
                    }
                   
                    }
                    function fireThewall1(){
                        if(!Isopen){
                            hide6.style.display="block"
                            Isopen= true;
                            console.log('love');
                            hidde.style.height="820px"
                        }else{
                            hide6.style.display="none"
                            Isopen= false;
                            console.log('l');
                          
                        }
                       
                        }