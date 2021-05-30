var ch=1;
var gh=0;
function isInViewport() {
    const rect = document.getElementsByClassName('lastregister')[0].getBoundingClientRect();
    if( rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ){
        gh=1;
        if(ch===0){
            gsap.fromTo(".bottom-register", { opacity: 1 }, { duration: 1, opacity: 0 });
            ch = 1;
        }
    }
    else{
        if(ch===1 && gh==1){
            gsap.fromTo(".bottom-register", { bottom: '100%', right: '95%', opacity: 0 },
                {duration: 1.5, bottom: '4%', right: '2%', opacity: 1, ease:Power2.easeOut})
            ch=0;
        }
        if(gh==0){
            gsap.to(".bottom-register", { duration: 1, opacity: 1 });
            ch=0;
        }
    }
}

function togcol(){
    document.getElementsByClassName('navbar')[0].classList.toggle('navsk');
}