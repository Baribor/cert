let certContainer;
const contWidth = 900;
const contHeight = 650;

function doResize(w,h) {
    let scale = Math.min(w/(contWidth+15), h/(contHeight+15));
    certContainer.style.transform = `scale(${scale})`
}

window.onload = ()=>{
    certContainer = document.querySelector('.cert-container');
    let width = window.innerWidth;
    let height = window.innerHeight;
    if(height<contHeight || width<contWidth || screen.width<contWidth){
        doResize(width, height);
    }
}


window.addEventListener('resize', ()=>{
    let width = window.innerWidth;
    let height = window.innerHeight;

    if(width < contWidth || height<contHeight){
        doResize(width,height);
    }
});
