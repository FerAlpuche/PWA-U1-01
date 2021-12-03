self.addEventListener('install',(event)=>{
    console.log("SW: Instalado")
});

self.addEventListener('activate',(event)=>{
    console.log("SW: Activado y controlando la app")
});

self.addEventListener('fetch',(event)=>{
    if(event.request.url.includes('.jpg')){
        let newResp = fetch('/PWA-U1-01/img/cat1.jpg');        
        console.log("Imagen")
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')){
        let newResponse = new Response(`body{
            background-color: black !important;
            color: blue !important;
        }`, {
            headers:{
                'Content-Type':'text/css'
            }
        });
        event.respondWith(newResponse);
    }
});

