/// Main JavaScript File
/// Here we import all the global JavaScript files we need for our project.

class SpotifyFunctions{
    constructor(){
        const heart = document.getElementsByTagName(".spotify-container__content-options__heart");
        this.heart.addEventListener("click", () =>{
            console.log("elo");
            this.heart.style.backgroundColor = "red";
        });
    }
   
    };


const Spotify = new SpotifyFunctions();
