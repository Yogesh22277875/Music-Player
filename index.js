
let song=document.querySelector(".song");
let range=document.querySelector(".range")
let controlIcon=document.querySelector("#controlicon");
let songName=document.querySelector(".songname");
let singerName=document.querySelector(".singername");
let current=document.querySelector(".current");
let duration=document.querySelector(".duration");

let songs=[
  {name:"52 Bars", path:"songs/52_Bars_Karan_Aujla.mp3", singer:"karan Aujla"},
{name:"Alarm", path:"songs/Alarm-320kbps.mp3", singer:"cheema"},
{name:"Antidote", path:"songs/ANTIDOTE - RemixBooth.In.mp3", singer:"Karan Aujla"},
{ name:"Big Things", path:"songs/Big Things-320kbps.mp3", singer:"jordan sindhu"},
{ name:"Supreme", path:"songs/Supreme_320(PagaiWorld.com).mp3", singer:"Shubh"}
]


let currentSong=0;

function onLoad(index) {
 song.src=songs[index].path;
 songName.innerText=songs[index].name;
 singerName.innerText=songs[index].singer;
}

onLoad(currentSong);

song.onloadedmetadata = function() {
  range.max=song.duration;
  range.value=song.currentTime;
}

function playPause() {
  if (controlIcon.classList.contains("fa-play")){
    song.play();
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
     setInterval(()=>{range.value=song.currentTime ;
    //  duration.innerText = song.duration;
  //current.innerText = song.currentTime;
     }
    ,500)
  
  }
  else {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
  }

}



 range.oninput = function() {
 song.currentTime=range.value;
  }

  song.onended = function () {
  //controlIcon.classList.remove("fa-pause");
  //controlIcon.classList.add("fa-play");
forward();
}

function forward(){
 currentSong = (currentSong + 1) % songs.length;
  onLoad(currentSong);
   if (controlIcon.classList.contains("fa-play")) {
    song.pause();
   }
   else {
    song.play();
   }
}

function backword(){
 currentSong = (currentSong - 1 + songs.length) % songs.length;


  onLoad(currentSong);
   if (controlIcon.classList.contains("fa-play")) {
    song.pause();
   }
   else {
    song.play();
   }
}