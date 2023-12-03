<template>
    <div class="home">
        <div class="feature-card">
            <router-link to="/movie/woei938293">
                <img src="https://m.media-amazon.com/images/M/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_SX300.jpg"
                    alt="" class="featured-img">
                <div class="details">
                    <h3>Boruto: Naruto Next Generations</h3>
                    <p> Naruto was a young shinobi with an incorrigible knack for mischief. He achieved his dream to become the greatest ninja in the village and his face sits atop the Hokage Monument. But this is not his story. A new generation of ninja are ready to take the stage, led by Naruto's own son, Boruto.</p>
                </div>
            </router-link>
        </div>
    </div>

    <form @submit.prevent="searchMovie()" class="search-box">
        <input type="text" placeholder="what are you looking for?" v-model="search" id="input">
        <input type="submit" value="Search" id="btn">
    </form>
    <div class="movie-list">
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
            <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
                <div class="product-image">
                    <img :src="movie.Poster" :alt="movie.Title" />
                </div>
                <div class="single-details">
                    <div class="type">{{ movie.Type }}</div>
                    <p class="y">{{ movie.Year }}</p>
                    <h3>{{ movie.Title }}</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import env from '../env'
export default {
    name: 'HomePage',
    setup() {
        const search = ref("");
        const movies = ref([])

        const searchMovie = () => {
            if (search.value != "") {
                fetch(`http://www.omdbapi.com?apikey=${env.api_key}&s=${search.value}`)
                    .then(res => res.json())
                    .then(data => {
                        movies.value = data.Search
                        search.value = ""
                        console.log(movies.value);
                    })
            }
        }

        return {
            search,
            movies,
            searchMovie
        }
    }
}
</script>

<style scoped>
.home{
    margin-top: 30px;
}
.feature-card {
    position: relative;
    margin: 0 auto;
} 

.feature-img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;

    position: relative;
    z-index: 0;
}

.details {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background-color: rgba(41, 39, 39, 0.25);
    padding: 16px;
    z-index: 1;
}

h3 {
    color: #fff;
    margin-bottom: 16px;
}

p {
    color: #fff
}

.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    flex-direction: column;
    gap: 20px;
}

#input {
    width: 70%;
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 10px;
}

#btn {
    width: 150px;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #42B883;
    color: white;
}

.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    gap: 10px;
}

.movie-link {
    box-shadow: 5px 6px 8px rgba(0, 0, 0, 0.5);
    position: relative;
}

.product-image {
    width: 300px;
    height: 400px;
}

.product-image img {
    width: 100%;
    height: 100%;
}

.single-details {
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
}

.type {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    color: white;
    font-size: 20px;
    background: #42B883;
    padding: 10px;
    width: 80px;
}
</style>