const { createApp } = Vue;

createApp({
    data(){
        return {
            message: 'Hello Vue',
            imgClass: 'img-fluid',
            imgUrl: 'img/david-bowie.jpeg',
        }
    }
}).mount('#app');