import React from "react";
import './hero.css';
import consulting from './images/consulting.jpg'

const Hero=()=>{
    return(
        <div className="hero-section">
        <div className="hero-img">
            <img src={consulting} height={400}></img>
        </div>
        <div className="hero-content">
            <h1>Welcome to the <span>Website...!</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,dolores 
              quam nam odit atque qui deserunt nulla ut enim reprehenderit similique
              consectetur aliquam voluptatem, perspiciatis consequatur, velit laboriosam. Esse, iusto.
            </p>
            <button>Read More</button>
        </div>
        </div>
    )
}
export default Hero