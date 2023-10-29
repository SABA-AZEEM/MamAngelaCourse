window.onload = function () {
    // Your JavaScript code here
    const checkboxEl=document.querySelectorAll('.checkbox');
    const readEl=document.querySelectorAll('.read')
    checkboxEl.forEach((item,idx)=>{
        item.addEventListener('change',()=>{
            if(item.checked){
                    readEl[idx].classList.add('read-input');
                
            }else{
                    readEl[idx].classList.remove('read-input');
            }
            });
    })
};



//for render page
document.querySelector('.today').addEventListener('click',()=>{
    window.location.href='/';
})
document.querySelector('.work').addEventListener('click',()=>{
    window.location.href='/work';
})