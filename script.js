let MenuBtn=document.getElementById("Menubtn")
MenuBtn.addEventListener('click',function(e)
{
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
let typed=new Typed('.auto',
{
    strings:['Front-end Developer!','Designer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})

let type=new Typed('.autto',
{
    strings:['Portfolio!','Projects!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
let ty=new Typed('.abut',
{
    strings:['About Me!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
let t=new Typed('.frnt',
{
    strings:['Front-end Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
let p=new Typed('.skl',
{
    strings:['My Skills!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
let tt=new Typed('.cnt',
{
    strings:['Contact Me!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
