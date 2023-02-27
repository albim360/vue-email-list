const app = Vue.createApp({
    data() {
      return {
        emails: []
      };
    },
    methods: {
      pushEmail: function () {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((risposta) => {
            this.emails.push(risposta.data.response);
            console.log(risposta.data);
          });
      }
    }
  });
  
  app.mount('#app');