import React from 'react'
import "./Home.scss"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";

const apiKey = "aba00920b35233ad77e7669b4530a746"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular= "popular"
const topRated = "top_rated"

const Card = ({img}) => (
    <img className='card' src={img} alt="cover" />
)

const Row = ({title, arr=[

]})=>(

    <div className='row'>
        <h2>{title}</h2>
        <div>
       {
        arr.map((item, index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>

        ))
       }
    
        </div>
    </div>
)

const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [genre, setGenre] = useState([])
    

    useEffect(() => {
    
        const fetchUpcoming = async() => {
         const { data:{results} }= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
         setUpcomingMovies(results)

        };

        const fetchNowPlaying = async() => {
         const { data:{results} }= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
         setNowPlayingMovies(results)

        };

        const fetchPopular = async() => {
         const { data:{results} }= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
         setPopularMovies(results)

        };

        const fetchTopRated = async() => {
         const { data:{results} }= await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
         setTopRatedMovies(results)

        };
        const getAllGenre = async() => {
            // https://api.themoviedb.org/3/genre/movie/list?api_key=aba00920b35233ad77e7669b4530a746
         const { data:{genres} }= await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
         setGenre(genres)

        };

        getAllGenre()

        fetchUpcoming()
        fetchNowPlaying()
        fetchPopular()
        fetchTopRated()

    }, [])
    return (
        <section className='home'>

            <div className="banner">
                <img src="https://wallpaperboat.com/wp-content/uploads/2021/12/19/79926/spider-man-no-way-home-12.jpg" alt="" />
                <h1>Spiderman</h1>
                <h3>No Way Home</h3>
                <div className='top-ten'>Top <br></br> 10</div>
                <h4> #3 in Movies Today</h4>
                <p>With Spider-Man's identity now revealed, our friendly neighborhood web-slinger <br></br> is unmasked and no longer able to separate his normal life as Peter Parker <br></br> from the high stakes of being a superhero.</p>
                <div className='buttons-container'> 
                    <button className='play-button'> <FaPlay/> Play</button>
                <button className='info-button'><AiOutlineInfoCircle/> More Info</button>
                </div>

            </div>

            <Row title={"Popular Movies"} arr={popularMovies} />
            <Row title={"Upcoming Movies"} arr={upcomingMovies} />
            <Row title={"Top Rated Movies"} arr={topRatedMovies} />
            <Row title={"Now Playing Movies"} arr={nowPlayingMovies} />
            

            <div className='genreBox'>

                {genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
                ))}
            </div>
            

        </section>
 
  )
}

export default Home