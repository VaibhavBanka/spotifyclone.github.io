console.log("Spotify");
let songin=0;
let audioe=new Audio('songs/Wishlist.mp3');
let playelement=document.getElementById
('playbutton');
let progressbar=document.getElementById
('progressbar');
progressbar.value=0;
let lyric="Welcome to Spotify";
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let msong=document.getElementById('msong');
let songs=[
    {songname:"WishList",filepath:"songs/1.mp3",coverPath:"images/wishlist.jpg"},
    {songname:"Main Rang Sharbaton Ka",filepath:"songs/2.mp3",coverPath:"images/Main_rang.jpg"},
    {songname:"Saathiyan",filepath:"songs/4.mp3",coverPath:"images/singham.jpeg"},
    {songname:"Rasiya",filepath:"songs/5.mp3",coverPath:"images/rasiya.jpg"},
    {songname:"Iktara",filepath:"songs/3.mp3",coverPath:"images/iktara.jpg"},
    {songname:"Deewangi Deewangi",filepath:"songs/6.mp3",coverPath:"images/om.jpeg"},
];
songitem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;  //[0]tells that first image in the div
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
});
//Handle play/pause
playelement.addEventListener('click',()=>{
    if(audioe.paused || audioe.currentTime<=0){
        audioe.play();
        playelement.classList.remove('fa-play-circle');
        playelement.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        let nod=document.getElementsByTagName('i');
        console.log(nod);
    }
    else{
        audioe.pause();
        playelement.classList.remove('fa-pause-circle');
        playelement.classList.add('fa-play-circle');
        gif.style.opacity=0;
        makeall();
        
    }
});

//Listen to events
audioe.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioe.currentTime/audioe.duration)*100);
    progressbar.value=progress;
});
// to make the changes in the progress bar when the song is playing
progressbar.addEventListener('change',()=>{
    audioe.currentTime=progressbar.value*audioe.duration/100;
});
const makeall=()=>{
    Array.from(document.getElementsByClassName('songplays')).forEach((e)=>{
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-play-circle');
})
}
let colourchange=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        Array.from(document.getElementsByClassName('songitem')).forEach((item) => {
            item.style.backgroundColor = 'white';
        });
        e.currentTarget.style.background='#ccc9c8';
    });
});
}
colourchange();


Array.from(document.getElementsByClassName('songplays')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioe.paused){
            makeall();
            songin=parseInt(e.target.id)
            // e.target gives the element that is clicked
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            gif.style.opacity=1;
            audioe.src=`songs/${songin}.mp3`;
            msong.innerText=songs[songin-1].songname;
            audioe.currentTime=0;
            audioe.play();
            playelement.classList.remove('fa-play-circle');
            playelement.classList.add('fa-pause-circle');
        }
        else{
            gif.style.opacity=0;
            audioe.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            playelement.classList.remove('fa-pause-circle');
            playelement.classList.add('fa-play-circle');
        }
        
    });
});
document.getElementById('forward').addEventListener('click',()=>{
    console.log(songin);
    if(songin>5){
        document.getElementById(songin.toString()).classList.remove('fa-pause-circle');
        document.getElementById(songin.toString()).classList.add('fa-play-circle');
        document.getElementById(songin.toString()).parentNode.parentNode.style.background='white';
        songin=1;
        document.getElementById(songin.toString()).classList.remove('fa-play-circle');
        document.getElementById(songin.toString()).classList.add('fa-pause-circle');
        document.getElementById(songin.toString()).parentNode.parentNode.style.background='#ccc9c8';
    }   
    else{
        let currents=songin.toString();
        let currente=document.getElementById(currents);
        currente.classList.remove('fa-pause-circle');
        currente.classList.add('fa-play-circle');
        currente.parentNode.parentNode.style.background='white';
        songin+=1
        let next=songin.toString();
        let nexte=document.getElementById(next);
        nexte.classList.remove('fa-play-circle');
        nexte.classList.add('fa-pause-circle');
        nexte.parentNode.parentNode.style.background='#ccc9c8'
    }
    gif.style.opacity=1;
    audioe.src=`songs/${songin}.mp3`;
    msong.innerText=songs[songin-1].songname;
    audioe.currentTime=0;
    playelement.classList.remove('fa-play-circle');
    playelement.classList.add('fa-pause-circle');
    audioe.play();
});
console.log(songin);
document.getElementById('previous').addEventListener('click',()=>{
    console.log(songin);
    if(songin<=1){
        document.getElementById(songin.toString()).classList.remove('fa-pause-circle');
        document.getElementById(songin.toString()).classList.add('fa-play-circle');
        document.getElementById(songin.toString()).parentNode.parentNode.style.background='white';
        songin=6;
        document.getElementById(songin.toString()).classList.remove('fa-play-circle');
        document.getElementById(songin.toString()).classList.add('fa-pause-circle');
        document.getElementById(songin.toString()).parentNode.parentNode.style.background='#ccc9c8';
    }
    else{
        let currents=songin.toString();
        let currente=document.getElementById(currents);
        currente.classList.remove('fa-pause-circle');
        currente.classList.add('fa-play-circle');
        currente.parentNode.parentNode.style.background='white';
        songin-=1
        let pre=songin.toString();
        let pree=document.getElementById(pre);
        pree.classList.remove('fa-play-circle');
        pree.classList.add('fa-pause-circle');
        pree.parentNode.parentNode.style.background='#ccc9c8'
    }
    gif.style.opacity=1;
    audioe.src=`songs/${songin}.mp3`;
    msong.innerText=songs[songin-1].songname;
    audioe.currentTime=0;
    audioe.play();
    playelement.classList.remove('fa-play-circle');
    playelement.classList.add('fa-pause-circle');
});
audioe.addEventListener('ended',()=>{
    if(songin>5){
        document.getElementById(songin.toString()).classList.remove('fa-pause-circle');
        document.getElementById(songin.toString()).classList.add('fa-play-circle');
        document.getElementById(songin.toString()).parentNode.parentNode.style.background='white';
        songin=1;
        document.getElementById(songin.toString()).classList.remove('fa-play-circle');
        document.getElementById(songin.toString()).classList.add('fa-pause-circle');
        document.getElementById(songin.toString()).parentNode.parentNode.style.background='#ccc9c8';
    }   
    else{
        let currents=songin.toString();
        let currente=document.getElementById(currents);
        currente.classList.remove('fa-pause-circle');
        currente.classList.add('fa-play-circle');
        currente.parentNode.parentNode.style.background='white';
        songin+=1
        let next=songin.toString();
        let nexte=document.getElementById(next);
        nexte.classList.remove('fa-play-circle');
        nexte.classList.add('fa-pause-circle');
        nexte.parentNode.parentNode.style.background='#ccc9c8'
    }
    gif.style.opacity=1;
    audioe.src=`songs/${songin}.mp3`;
    msong.innerText=songs[songin-1].songname;
    audioe.currentTime=0;
    playelement.classList.remove('fa-play-circle');
    playelement.classList.add('fa-pause-circle');
    audioe.play();
});
