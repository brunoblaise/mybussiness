const write = document.getElementById('write');
const gobu= document.querySelector('.go');
const preload = document.querySelector('.loading')
 

gobu.addEventListener('click', togo);
function togo(event){
    event.preventDefault();
if(write.value === 'html'){
    window.location.href ="piano.html"
}else if(write.value === 'css'){
    window.location.href ="video.html"
}else{
  
        window.location.href ="../error pages/index.html"
    
}
}



function loading(){
    preload.style.display = 'none';
    console.log('go');
}
