
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
                       img:'assests/1.jpg',
                       myFav:true

                   },
                   {
                    artist: 'Khalid',
                    album:'Dumb',
                    genre:'R & B',
                    img:'assests/2.jpg',
                    myFav:false
                   },
                   {
                    artist: 'XXXtentation',
                    album:'?',
                    genre:'Rock',
                    img:'assests/3.jpg',
                    myFav:true
                   }
               ]
                }
            },
            methods: {
         toggleShowDiscography(){
             this.showDiscography=!this.showDiscography;
         },
         toggleFav(discography){
             discography.myFav =!discography.myFav;
            }
        },
         computed:{
             filteredDiscographies(){
                 return this.discographies.filter((discography) =>discography.myFav);
             }
         }
        
            
            })
            
            app.mount('#app');
        