
        const app =  Vue.createApp({
            data(){
                return{
                    showSentence: true,
                    title:"John",
                    description:"im a goat and ",
                    sentence:"i am",
                    age:27
                }
            },
            methods: {
           toggleShowSentence(){
               this.showSentence =!this.showSentence
           }
            }
            
            })
            
            app.mount('#app');