import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';



(() => {
    // add our VueRouter here



    const vm = new Vue({
        data: {
            allMovies: [],
       
        },

        created: function(){

    
            fetch('/api/movies') // http://localhost:5050/api/movies
            .then(res => res.json())
            .then(data => {
                //show the data in table form
                console.table(data);
                this.allMovies = data;
            })
            .catch(err => console.error(err));
        },

        methods: {

        },
      
        components:{
            moviethumb :TheMovieThumb

        }

    }).$mount("#app");

})();