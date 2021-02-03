const buttons = document.querySelectorAll('a');
buttons.forEach(btn =>{
    btn.addEventListener('click', function(e){

        let x = e.clientX - e.target.offsetleft;
        let y = e.clientY - e.target.offsettop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples); 
        setTimeout(()=> {
            ripples.remove()             
        },1000);
    })
})
