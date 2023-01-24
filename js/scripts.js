const { createApp } = Vue

createApp({
  data() {
    return {
        lista: [
            {text: 'Fare la spesa', 
            done: true
        },
            {text: 'Portare il cane fuori', 
            done: false
        },
            {text: 'Pulire la cantina', 
            done: false
        }
        ]
    }
    
  },
  methods: {


  }
}).mount('#app')