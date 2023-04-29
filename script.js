const bulb = document.getElementById('bulb');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    if(btn.innerText.includes('on')){
        bulb.src = "pic_bulbon.gif";
        btn.innerText = 'Turn off';
    } else{
        bulb.src = "pic_bulboff.gif";
        btn.innerText = 'Turn on';
    }
})