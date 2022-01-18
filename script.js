
        const app =  Vue.createApp({
            data(){
                return{
               showDiscography:true,
               discographies:[
                   {
                       artist: 'Cordae',
                       album:'Lost Boy',
                       genre:'Rap'

                   },
                   {
                    artist: 'Khalid',
                    album:'Dumb',
                    genre:'R & B'  
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
        