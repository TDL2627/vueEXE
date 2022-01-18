
        const app =  Vue.createApp({
            data(){
                return{
                    url:"https://www.instagram.com/cordae/?hl=en",
                    showDiscography:true,
               discographies:[
                   {
                       artist: 'Cordae',
                       album:'Lost Boy',
                       genre:'Rap',
                       img:'assests/1.jpg'

                   },
                   {
                    artist: 'Khalid',
                    album:'Dumb',
                    genre:'R & B',
                    img:'assests/2.jpg'
                   },
                   {
                    artist: 'XXXtentation',
                    album:'?',
                    genre:'Rock'
                   }
               ]
                }
            },
            methods: {
         toggleShowDiscography(){
             this.showDiscography=!this.showDiscography;
         }
            }
            
            })
            
            app.mount('#app');
        