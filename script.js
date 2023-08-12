console.log("Welcome to spotify");

let songindex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogress= document.getElementById('myprogress');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname:"Believer-Imazine Dargons" , filePath: "songs/1.mp3" , coverpath: "covers/1.jpg" },
    {songname:"BYE-Aditya Bhardwaj" , filePath: "songs/2.mp3" , coverpath: " covers/2.jpg" },
    {songname:"ROZ-Ritviz" , filePath: "songs/3.mp3" , coverpath: " covers/3.jpg" },
    {songname:"AAJ Na-Ritviz" , filePath: "songs/4.mp3" , coverpath: "covers/4.jpg" },
    {songname:"TUM-TUM-Enemy" , filePath: "songs/5.mp3" , coverpath: "covers/5.jpg" },
    {songname:"Let me love you" , filePath: "songs/6.mp3" , coverpath: "covers/1.jpg" },
    {songname:"Shape of You" , filePath: "songs/7.mp3" , coverpath: "covers/1.jpg" },
    {songname:"Sanak" , filePath: "songs/8.mp3" , coverpath: "covers/1.jpg" },
    {songname:"abcd" , filePath: "songs/9.mp3" , coverpath: "covers/1.jpg" },
    {songname:"Closure" , filePath: "songs/10.mp3" , coverpath: "covers/1.jpg" },
]
songitem.forEach((element , i)=> {

    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText= songs[i].songname;
});

// audioElement.play();

masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate' , ()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value= progress;
})

myprogress.addEventListener('change' , ()=>{
    audioElement.currentTime= myprogress.value*audioElement.duration/100;
})
const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeALLPlays()
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songname;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex += 1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
    audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -= 1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
    audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})

