
        const app =  Vue.createApp({
            data(){
                return{
                    showSentence: true,
                    title:"John",
                    description:"im a goat and ",
                    sentence:"i am",
                    age:27,
                    x:0, 
                    y:0
                }
            },
            methods: {
           toggleShowSentence(){
               this.showSentence =!this.showSentence
           },
           handleEvent(e,number){
            console.log(e,e.type);
            if(number){
                console.log(number)
            }
           },
           handleMouseMove(e){
               this.x=e.offsetX;
               this.y = e.offsetY;
           }
       
            }
            
            })
            
            app.mount('#app');