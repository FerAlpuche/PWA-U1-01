let url = window.location.href;
let swDirect = "/PWA-U1-01/sw.js"

if(navigator.serviceWorker){
    console.log("Ya estuvooo")
    
    if(url.includes('localhost')){
        swDirect = '/sw.js';
    }
    navigator.serviceWorker.register(swDirect);
}else{
    console.log("Cambia de navegador.")
}
