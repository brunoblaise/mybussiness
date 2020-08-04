const  correct = document.querySelector('#we')
const  wrong1 = document.querySelector('#wo')
const  wrong2 = document.querySelector('#wi')
const continu = document.querySelector('.continue')
const continu1 = document.querySelector('.nex')
const continu2 = document.querySelector('.nx')
const continu3 = document.querySelector('.ne')
const continu4 = document.querySelector('.n')
const next1 = document.querySelector('#qe')
const next2 = document.querySelector('#qi')
const next3 = document.querySelector('#qu')
const next4 = document.querySelector('#qa')
const next = document.querySelector('#qo')
const que1 = document.querySelector('.body')
const corect = document.querySelector('#w')
const wong = document.querySelector('#w1')
const wong1 = document.querySelector('#w2')
const won = document.querySelector('.won')
const corect1 = document.querySelector('#w4')
const wong2 = document.querySelector('#w3')
const wong3 = document.querySelector('#w5')
const que2 = document.querySelector('.goto')
const que3 = document.querySelector('.goto1')
const que4 = document.querySelector('.goto2')
const que5 = document.querySelector('.goto3')

const corect2 = document.querySelector('#w6')
const wong4 = document.querySelector('#w7')



const corect3 = document.querySelector('#w8')
const wong5 = document.querySelector('#w9')
const wong6 = document.querySelector('#w10')

let Iscorret = false;
let Iscorect = false;
let Iscorect1 = false;
let Iscorect2 = false;
let Iscorect3 = false;

correct.addEventListener('click', correctOne)
wrong1.addEventListener('click',wrongOne)
wong.addEventListener('click',wongOne)
wong1.addEventListener('click',wongOn)
wrong2.addEventListener('click', wrongne)
corect.addEventListener('click',correctTwo)

wong2.addEventListener('click',wongne)
wong3.addEventListener('click',wongn)
corect1.addEventListener('click',correctThree)

wong5.addEventListener('click',wongno)
wong6.addEventListener('click',wongnu)
corect3.addEventListener('click',correctFive)

wong4.addEventListener('click',wongni)
corect2.addEventListener('click',correctFour)

next.addEventListener('click', nextShow)
next1.addEventListener('click', nextSho)
next2.addEventListener('click', nextSh)
next3.addEventListener('click', nextS)
next4.addEventListener('click', nextSo)
 function correctOne(){
if(!Iscorret ){
     
   Iscorret = true; 
   correct.classList.add('correct');
      wrong1.style.borderColor = '#e53935';
      wrong2.style.borderColor = '#e53935';
      continu.style.display ='block'
   
}else{
   alert('please click  continue')
}
 }

 function correctTwo(){
   if(!Iscorect){
      Iscorect = true; 
      corect.classList.add('correct');
         console.log('uuuu')
         wong.style.borderColor = '#e53935';
         wong1.style.borderColor =  '#e53935';
           continu1.style.display ='block'
      
   }else{
      alert('please click continue')
   }
    }

    function wongOne(){
      if(!Iscorect){
         Iscorect = true; 
      wong.classList.add('wrong');
            console.log('uuuu')
            corect .style.borderColor = '#3eb38c';
            wong1.style.borderColor = '#e53935';
            continu1.style.display ='block'
      }else{
         alert('please click continue')
      }
       }

       function wongOn(){
         if(!Iscorect){
            Iscorect = true; 
         wong1.classList.add('wrong');
               console.log('uuuu')
               corect .style.borderColor = '#3eb38c';
               wong.style.borderColor = '#e53935';
               continu1.style.display ='block'
            
         }else{
            alert('please click continue')
         }
          }








          function correctFive(){
            if(!Iscorect3){
               Iscorect3 = true; 
               corect3.classList.add('correct');
                  console.log('uuuu')
                  wong5.style.borderColor = '#e53935';
                  wong6.style.borderColor =  '#e53935';
                    continu4.style.display ='block'
               
            }else{
               alert('please click continue')
            }
             }
         
             function wongno(){
               if(!Iscorect3){
                  Iscorect3 = true; 
               wong5.classList.add('wrong');
                     console.log('uuuu')
                     corect3.style.borderColor = '#e53935';
                     wong6.style.borderColor = '#e53935';
                     continu4.style.display ='block'
               }else{
                  alert('please click continue')
               }
                }
         
                function wongnu(){
                  if(!Iscorect3){
                     Iscorect3 = true; 
                  wong6.classList.add('wrong');
                        console.log('uuuu')
                        corect3.style.borderColor = '#e53935';
                        wong5.style.borderColor = '#e53935';
                        continu4.style.display ='block'
                     
                  }else{
                     alert('please click continue')
                  }
                   }




















          function correctThree(){
            if(!Iscorect1){
               Iscorect1 = true; 
               corect1.classList.add('correct');
                  console.log('uuuu')
                  wong2.style.borderColor = '#e53935';
                  wong3.style.borderColor =  '#e53935';
                    continu2.style.display ='block'
               
            }else{
               alert('please click continue')
            }
             }
         
             function wongne(){
               if(!Iscorect1){
                  Iscorect1 = true; 
               wong2.classList.add('wrong');
                     console.log('uuuu')
                     corect1.style.borderColor = '#3eb38c';
                     wong3.style.borderColor = '#e53935';
                     continu2.style.display ='block'
               }else{
                  alert('please click continue')
               }
                }
         
                function wongn(){
                  if(!Iscorect1){
                     Iscorect1 = true; 
                  wong3.classList.add('wrong');
                        console.log('uuuu')
                        corect .style.borderColor = '#3eb38c';
                        wong2.style.borderColor = '#e53935';
                        continu2.style.display ='block'
                     
                  }else{
                     alert('please click continue')
                  }
                   }

                   


          function correctFour(){
            if(!Iscorect2){
               Iscorect2 = true; 
               corect2.classList.add('correct');
                  console.log('uuuu')
                  wong4.style.borderColor = '#e53935';
                    continu3.style.display ='block'
               
            }else{
               alert('please click continue')
            }
             }
         
             function wongni(){
               if(!Iscorect2){
                  Iscorect2 = true; 
               wong4.classList.add('wrong');
                     console.log('uuuu')
                     corect2.style.borderColor = '#3eb38c';
                     continu3.style.display ='block'
               }else{
                  alert('please click continue')
               }
                }
         
         



 function wrongOne(){
   if(!Iscorret ){
    wrong1.classList.add('wrong')
    correct.style.borderColor = '#3eb38c';
    wrong2.style.borderColor = '#e53935';
    continu.style.display ='block'
   }else{
      alert('please click  continue')
   }

 }

 function wrongne(){
   if(!Iscorret ){
   correct.style.borderColor = '#3eb38c';
    wrong2.classList.add('wrong')
    wrong1.style.borderColor = '#e53935';
    continu.style.display ='block'
   }else{
      alert('please click  continue')
   }
 }
 function nextShow(){
que1.style.display = 'none'
que2.style.display = 'block'
next.style.display = 'none'
 }
 function nextSho(){
   que1.style.display = 'none'
   que2.style.display = 'none'
   que3.style.display = 'block'
   next1.style.display = 'none'
    }

    function nextSh(){
      que1.style.display = 'none'
      que2.style.display = 'none'
      que3.style.display = 'none'
      que4.style.display = 'block'
      next1.style.display = 'none'
      next2.style.display = 'none'
       }

       function nextS(){
         que1.style.display = 'none'
         que2.style.display = 'none'
         que3.style.display = 'none'
         que5.style.display = 'block'
         que4.style.display = 'none'
         next1.style.display = 'none'
         next2.style.display = 'none'
         next3.style.display = 'none'
          }


          function nextSo(){
            que1.style.display = 'none'
            que2.style.display = 'none'
            que3.style.display = 'none'
            que5.style.display = 'none'
            que4.style.display = 'none'
            next1.style.display = 'none'
            next2.style.display = 'none'
            next3.style.display = 'none'
            won.style.display = 'block'
            next4.style.display = 'none'
             }