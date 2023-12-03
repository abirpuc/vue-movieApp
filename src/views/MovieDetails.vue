<template>
    <div class="movie-details">
        <img :src="movie.Poster" alt="" class="poster">
        <div>
            <h1 class="title">Title: {{ movie.Title }}</h1>
            <h2>Type:<span>{{ movie.Type }}</span></h2>
        <h4>Actors: <span id="actors">{{ movie.Actors }}</span></h4>
        <h4>Director: <span>{{ movie.Director }}</span></h4>
        <h4>Writer: <span>{{ movie.Writer }}</span></h4>
        <h4>Language: <span>{{ movie.Language }}</span></h4>
        <h4>Rating: <span>{{ movie.imdbRating }}</span></h4>
        <h4>RunTime: <span>{{ movie.Runtime }}</span></h4>
        <h4>MetaScore: <span>{{ movie.Metascore }}</span></h4>
        <h4>Released: <span>{{ movie.Released }}</span></h4>
        <h4>BoxOffice: <span>{{ movie.BoxOffice }}</span></h4>
        <h4>Awards: <span>{{ movie.Awards }}</span></h4>
        <h4>Description: <span>{{ movie.Plot }}</span></h4>
        <p>website: <a :href=" movie.Website">{{ movie.Website }}</a></p>
        </div>

    </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
import env from '@/env.js'
    export default {
        setup(){
            const movie = ref({})
            const route = useRoute()

            onBeforeMount(() =>{
                fetch(`http://www.omdbapi.com/?apikey=${env.api_key}&i=${route.params.id}&plot=full`)
                .then(res => res.json())
                .then(data => {
                    movie.value = data
                    console.log(movie.value);
                })
            })

            return {
                movie
            }
        }
    }
</script>

<style scoped>
.poster{
    width:100%;
    height: 500px;
    margin-bottom: 30px;
}
    .movie-details{
        margin: 20px 100px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    h4{
        margin: 10px 0;
    }
</style>