const form=document.querySelector('form');
const nombre=document.querySelector("#nombre");
const apellido=document.querySelector("#apellido");
const email=document.querySelector("#email");
const comentario=document.querySelector("#comentario");
const btn=document.querySelector("#btn");
btn.setAttribute=('disabled', true);


form.addEventListener("click", function(e){
    e.preventDefault();
    console.log('click');
    if(nombre.value && apellido.value && email.value && comentario.value){
        btn.disabled=false;
    }
    
})

