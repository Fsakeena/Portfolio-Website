let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


//typing effect
let typed = new Typed('.auto-input' ,{
    strings: ['Student!' , 'YouTuber!','Web Developer!'],
    typedSpeed:100,
    backspeed:100,
    backDelay:2000,
    loop:true,
})