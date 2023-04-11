
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem')); 

let songs=[
{name:"Kesariya",cover:"covers/kesariya.jpg",file:"songs/1.mp3"},
{name:"Apna Bana Le",cover:"covers/bhediya.jpg",file:"songs/2.mp3"},
{name:"Bandeya",cover:"covers/bandeya.jpg",file:"songs/3.mp3"},
{name:"Mann Meri Jaan",cover:"covers/meri.jpg",file:"songs/4.mp3"},
{name:"Maiya Mainu",cover:"covers/mainu.jpg",file:"songs/5.mp3"},
{name:"Shayad",cover:"covers/shayad.jpg",file:"songs/6.mp3"},
{name:"Kesariya",cover:"covers/kesariya.jpg",file:"songs/1.mp3"}

];

songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText=songs[i].name;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100
})

const makeallPlay = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime <= 0){
            makeallPlay();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].name;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity=1;
        }else{
        makeallPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-play');
        e.target.classList.remove('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].name;
        audioElement.currentTime = 0;
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        gif.style.opacity=0;
        }
        

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].name;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;

})

document.getElementById('back').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].name;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;

})
