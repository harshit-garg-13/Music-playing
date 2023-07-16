// probleme jo icone play button hai bo pregress bar ke sath sync nhi karre hai 
console.log('hello in my world')
let index = 1;
let audioElement = new Audio('songs/1.mp3');
let pb = document.getElementById('pb');
let playsong = Array.from(document.getElementsByClassName('playsong'));
let progress = document.getElementById('progress');
let gifimg = document.getElementsByClassName('gifimg');
let name1 = document.getElementById('name')
let photo = document.getElementById('sl')
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname: "xyz1", filepath: "songs/1.mp3", coverpath: "1.jpg"},
    {songname: "xyz2", filepath: "songs/2.mp3", coverpath: "2.jpg"},
    {songname: "xyz3", filepath: "songs/3.mp3", coverpath: "3.jpg"},
    {songname: "xyz4", filepath: "songs/4.mp3", coverpath: "4.jpg"},
    {songname: "xyz5", filepath: "songs/5.mp3", coverpath: "5.jpg"},
    {songname: "xyz6", filepath: "songs/6.mp3", coverpath: "6.jpg"},
    {songname: "xyz7", filepath: "songs/7.mp3", coverpath: "7.jpg"},
    {songname: "xyz8", filepath: "songs/8.mp3", coverpath: "8.jpg"},
 ]
 photo.src = songs[index-1].coverpath;
//  function add( a, b){
//   return a+b;
//  }
//  const add=(a,b)=>a+b;


 songitem.forEach((element,i)=>{
  element.getElementsByTagName('img')[0].src = songs[i].coverpath;
  element.getElementsByClassName('songname')[0].innerText= songs[i].songname;
  element.getElementsByClassName('playsong')[0].addEventListener('click',(l)=>{
  })
 })
 pb.addEventListener('click', ()=>{
  indi= index.toString();
   if(audioElement.paused || audioElement.currentTime<=0)
   {
    audioElement.play();
    pb.classList.remove('fa-circle-play');
    pb.classList.add('fa-circle-pause');
    gifimg[0].style.opacity=1;
    document.getElementById(indi).classList.remove('fa-circle-play');
    document.getElementById(indi).classList.add('fa-circle-pause');
   }
   else{
    audioElement.pause();
    pb.classList.remove('fa-circle-pause');
    pb.classList.add('fa-circle-play');
    gifimg[0].style.opacity= 0;
    document.getElementById(indi).classList.remove('fa-circle-pause');
     document.getElementById(indi).classList.add('fa-circle-play');
   }
 })


audioElement.addEventListener('timeupdate', ()=>{
    progressbar = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progress.value = progressbar;
})

progress.addEventListener('change', ()=>{
  audioElement.currentTime = progress.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
playsong.forEach((element)=>{
  element.classList.remove('fa-circle-pause');
  element.classList.add('fa-circle-play');
})
}

playsong.forEach((element)=>{
  element.addEventListener('click',(butt)=>{
    var j = index;
   index = parseInt(butt.target.id);
    makeAllPlays();
    name1.innerText = songs[index-1].songname;
    photo.src = songs[index-1].coverpath;
    // audioElement.currentTime=0;
    if(j!=index){
      audioElement.src = `songs/${index}.mp3`;
    }
    if(audioElement.paused || audioElement.currentTime<=0 || j!=index)
    {butt.target.classList.remove('fa-circle-play');
    butt.target.classList.add('fa-circle-pause');
    audioElement.play();
    pb.classList.remove('fa-circle-play');
    pb.classList.add('fa-circle-pause');
    }
    else
    {
      
    butt.target.classList.remove('fa-circle-pause');
    butt.target.classList.add('fa-circle-play');
    
    
    audioElement.pause();
    // audioElement.currentTime=progressbar;
    
    pb.classList.remove('fa-circle-pause');
    pb.classList.add('fa-circle-play');
    }
  })
})

document.getElementById('fb').addEventListener('click', ()=>{
  indi2= (index+1).toString();
  indi= index.toString();
  if(index>=8){
      index = 8
      photo.src = songs[index-1].coverpath;
      audioElement.currentTime=0;
  }
  else{
     document.getElementById(indi).classList.remove('fa-circle-pause');
     document.getElementById(indi).classList.add('fa-circle-play');
     document.getElementById(indi2).classList.remove('fa-circle-play');
     document.getElementById(indi2).classList.add('fa-circle-pause');
      index += 1;
      audioElement.src = `songs/${index}.mp3`;
     name1.innerText = songs[index-1].songname;
     photo.src = songs[index-1].coverpath;
  audioElement.currentTime = 0;
  audioElement.play();
  pb.classList.remove('fa-circle-play');
  pb.classList.add('fa-circle-pause');
  }
 
  

})
document.getElementById('bb').addEventListener('click', ()=>{
  indi2= (index-1).toString();
  indi= index.toString();
  if(index<=1){
      index = 1
      audioElement.currentTime=0;
      audioElement.src = `songs/${index}.mp3`;
      photo.src = songs[index-1].coverpath;
  }
  else{
     document.getElementById(indi).classList.remove('fa-circle-pause');
     document.getElementById(indi).classList.add('fa-circle-play');
     document.getElementById(indi2).classList.remove('fa-circle-play');
     document.getElementById(indi2).classList.add('fa-circle-pause');
      index -= 1;
      audioElement.src = `songs/${index}.mp3`;
     name1.innerText = songs[index-1].songname;
     photo.src = songs[index-1].coverpath;
  audioElement.currentTime = 0;
  audioElement.play();
  pb.classList.remove('fa-circle-play');
  pb.classList.add('fa-circle-pause');
  }
 
  

})










        

