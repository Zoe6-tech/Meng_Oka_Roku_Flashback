export default {
    name: " LoginPage",
    
    template:
        `
        <div class="login-form">

        <form action="/views/login.hbs" method="post">

        
        <div class="input-area">
         <i class="fas fa-user"></i>
         <input id="username" type="text" name="username" value="" placeholder="ENTER USERNAME*">
        </div>

        <div class="input-area">
         <i class="fas fa-key"></i>
        
         <input id="password" type="text" name="password" value="" placeholder="ENTER PASSWORD*">
        </div>

         <button type="submit" name="submit">LOG IN</button>
          <router-link to="/">BACK</router-link>
        <a href="index.hbs">BACK</a>
     
        </form>
    </div>
    `,

    data: function() {
        return {
            username: "",
            password: ""
        }
    },

    methods: {
        storeCreds() {
            window.localStorage.setItem("creds", JSON.stringify({name: this.username, pword: this.password}));
        }
    }
}


