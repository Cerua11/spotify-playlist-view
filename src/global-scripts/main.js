class InteractiveWebsite{
    constructor(){
        this.heart = document.querySelector(".spotify-container__content-options__heart");
        this.songOneID = document.querySelector(".song-1-id");
        this.songOneImg = document.querySelector(".song-1-src");
        this.init();
    }
    init(){
        console.log("App started");
        this.addClassEventListener();
        this.getJSONFile("songs.json", function(data){
            console.log(data);
            let json = JSON.parse(data);
            console.log(json);
            this.updateContent(json);
        });
    };
    addClassEventListener = (e) => {

        this.heart.addEventListener("click", 
            (e) => {this.heart.classList.add("spotify-container__content-options__heart-active")});
        this.heart.addEventListener("click",
            (e) => { this.heart.classList.remove(".spotify-container__content-options__heart-active")});
    }
    getJSONFile(path, callback){
        let xhrObject = new XMLHttpRequest();
        xhrObject.onreadystatechange = function(){
            if(xhrObject.readyState === 4){
                if(xhrObject.status === 200 || xhrObject.status === 304){
                    if(callback) callback(xhrObject.responseText);
                }
            }
        }
         xhrObject.open("GET",path);
         xhrObject.send();
    }
    updateContent(data){
        const songID = data.id;
        const songImg = data.image;
        updateDOM(songID, songImg);
    }
    updateDOM(id, img){
        this.songOneID.innerHTML = id; 
        this.songOneImg.src = img;
    };
    

}

const interactiveWebsite = new InteractiveWebsite();