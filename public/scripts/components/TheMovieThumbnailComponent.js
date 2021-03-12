export default {
    name : "TheMovieThumbnail",

    props: ["movie"],

    template:`
    <div class="movie-thumb">
        <img @click="loadPlayer(movie)" :src='"images/" + movie.movies_cover' alt="movie thumb">
        <h4 >{{ movie.movies_title }}</h4>
        
    </div>
    `,

    methods:{
        loadPlayer(){
            debugger;
            console.log("You hit an image");
        }
    }
}