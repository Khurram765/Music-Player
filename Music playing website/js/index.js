var play=document.getElementById("play")
var audio= new Audio("./audio/Kahani Suno 2.0 - Kaifi Khalil 320 Kbps.mp3")
var range=document.getElementById("range")
var totalDuration=document.getElementById("totalduration")
var currentDuration=document.getElementById("currentduration")
var img=document.getElementById("img")
var songName=document.getElementById("songname")
var singerName=document.getElementById("singername")
var back=document.getElementById("back")
var forward=document.getElementById("forward")
var bars=document.getElementById("bars")
var searchbar=document.getElementById("searchbar")
var i=0
var t
var m=0
var songindex=0
var songList=[
    {
        name:"Kahani Suno 2.0",
        src: "../audio/Kahani Suno 2.0 - Kaifi Khalil 320 Kbps.mp3",
        singer: "Kaifi Khalil",
        image : "../image/kahanisuno.jpg"
    },
    {
        name:"Ashiqui",
        src: "./audio/128-Aashiqui - Cirkus 128 Kbps.mp3",
        singer: "Arijit Singh",
        image : "./image/cirkus.jpg"
    },
    {
        name:"Batien Ye Kabhi Na",
        src: "./audio/Baatein Ye Kabhi Na (Male) - Khamoshiyan 320 Kbps.mp3",
        singer: "Arijit Singh",
        image : "./image/khamoshiyan.jpg"
    },
    {
        name:"Pasoori",
        src: "./audio/Pasoori - Shae Gill 320 Kbps.mp3",
        singer: "Ali Sethi, Zulfiqar Jabbar Khan",
        image : "./image/pasoori.jpg"
    },
    {
        name:"Breathless",
        src: "./audio/Breathless-Shankar-Mahadevan.mp3",
        singer: "Shankar Mahadevan",
        image : "./image/breathless.jpg"
    },
    {
        name:"Ye Tune Kya Kiya",
        src: "./audio/Ye Tune Kya Kiya - Once Upon A Time In Mumbaai Dobara 128 Kbps.mp3",
        singer: "Pritam, Javed Bashir",
        image : "./image/yetunekiakiya.jpg"
    },
    {
        name:"Yeh Raaten Yeh Mausam",
        src: "./audio/Yeh Raaten Yeh Mausam (New Version) Song Sanam.mp3",
        singer: "Sanam, Simran Sehgal",
        image : "./image/yeratien.jpg"
    },
    {
        name:"Tere Sang Yaara",
        src: "./audio/Tere Sang Yaara - Rustom 128 Kbps.mp3",
        singer: "Atif Aslam",
        image : "./image/teresang.jpg"
    },
    {
        name:"Pee Loon Hoto Ki Sargam",
        src: "./audio/Pee Loon Hoto Ki Sargam - Once Upon A Time In Mumbaai 128 Kbps.mp3",
        singer: "Pritam, Mohit Chauhan",
        image : "./image/peelu.jpg"
    },
    {
        name:"Agar Tum Saath Ho",
        src: "./audio/Agar-Tum-Saath-Ho(PagalWorld).mp3",
        singer: "Arijit Singh, Alka Yagnik",
        image : "./image/agartumsth.jpg"
    },
    {
        name:"Par Tere Aage Kuch Bhi Nahi",
        src: "./audio/Par Tere Aage Kuch Bhi Nahi Sab Khak Barabar Mp3 Song Download(atozlyrics.in).mp3",
        singer: "King, Tu Aake Dekhle",
        image : "./image/tereage.jpg"
    },
    {
        name:"Jo Tu Mera Humdard Hai",
        src: "./audio/Jo-Tu-Mera-Humdard-Hai----Arijit-Singh(PagalWorld).mp3",
        singer: "Arijit Singh",
        image : "./image/hamdard.jpg"
    }
]




// On Window OnLoad First Audio is Select As Default Song
window.addEventListener("load",()=>{
    audio=new Audio(songList[0].src)
    img.style.backgroundImage=`url(${songList[songindex].image})`
    songName.innerHTML=songList[songindex].name
    singerName.innerHTML=songList[songindex].singer
    // For setup innerHTML of total song length in minutes
    audio.addEventListener("loadedmetadata",()=>{
        totalDuration.innerHTML= Math.floor(audio.duration/60) + ":" + Math.round(audio.duration%60)
    })
    songList.forEach((sl,ind)=>{

        document.getElementById("songprint").innerHTML+=`
        <li onclick="listfunction(${ind})" class="li">${sl.name}</li>
        
        `
    })
})


// This Function will call when someone click next song button or when current song time is finish
function nextaudio(){
    // For reset all values
    clearInterval(t)
    audio.pause()
    i=0
    range.value=0

    // For adjust index of songs
    if(songindex>=songList.length-1){
        songindex=0
    }else{
        songindex= ++songindex
    }

    // Setup audio images and other thing according to song index
    audio=new Audio(songList[songindex].src)
    img.style.backgroundImage=`url(${songList[songindex].image})`
    songName.innerHTML=songList[songindex].name
    singerName.innerHTML=songList[songindex].singer
    play.classList.remove("fa-pause")
    play.classList.add("fa-play")
    // For setup innerHTML of total song length in minutes
    audio.addEventListener("loadedmetadata",()=>{
        totalDuration.innerHTML= Math.floor(audio.duration/60) + ":" + Math.round(audio.duration%60)
        range.max=audio.duration
    })
    play.click()
}


// This Function will call when someone click previous song button
function previousaudio(){
     // For reset all values
    clearInterval(t)
    audio.pause()
    i=0
    range.value=0

    // For adjust index of songs
    if(songindex<=0){
        songindex=songList.length-1
    }else{
        songindex= --songindex
    }
    console.log(songindex)
    // Setup audio images and other thing according to song index
    audio=new Audio(songList[songindex].src)
    img.style.backgroundImage=`url(${songList[songindex].image})`
    songName.innerHTML=songList[songindex].name
    singerName.innerHTML=songList[songindex].singer
    play.classList.remove("fa-pause")
    play.classList.add("fa-play")
    // For setup innerHTML of total song length in minutes
    audio.addEventListener("loadedmetadata",()=>{
        totalDuration.innerHTML= Math.floor(audio.duration/60) + ":" + Math.round(audio.duration%60)
        range.max=audio.duration
    })
    play.click()
}

// This function will call when someone make changes in range input field
function rangeSetup(){
    // Set audio current time according to range value
    audio.currentTime=range.value
    i=range.value
}

// This Function will call when play button clicks
function playaudio(){
    range.max=audio.duration
    if(audio.paused==true){
        audio.play()
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
        t=setInterval(()=>{
            i= ++i
            console.log(i)
            range.value=i
            document.getElementById("currentmints").innerHTML=Math.floor(audio.currentTime/60)
            document.getElementById("currentsecs").innerHTML=Math.round(audio.currentTime%60)
            if(audio.currentTime>=range.max){
                clearInterval(t)
                audio.addEventListener("loadedmetadata",()=>{
                    totalDuration.innerHTML= Math.floor(audio.duration/60) + ":" + Math.round(audio.duration%60)
                })
                nextaudio()
                // play.click()
            }
        },1000)
    }else{
        audio.pause()
        clearInterval(t)
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    }
    
}

bars.addEventListener("click",()=>{
    document.getElementById("list").style.bottom="0"
})


searchbar.addEventListener("keyup",()=>{
    document.getElementById("songprint").innerHTML=""
    songList.forEach((sl,indd)=>{
        if(sl.name.toLowerCase().includes(searchbar.value.toLowerCase())){
            document.getElementById("songprint").innerHTML+=`
            <li onclick="listfunction(${indd})" class="li">${sl.name}</li>
        
        `
        }
    })
    
})

function listfunction(indexx){
    console.log(songList[indexx])
    clearInterval(t)
    audio.pause()
    i=0
    range.value=0
    songindex=indexx
     // Setup audio images and other thing according to song index
     audio=new Audio(songList[songindex].src)
     img.style.backgroundImage=`url(${songList[songindex].image})`
     songName.innerHTML=songList[songindex].name
     singerName.innerHTML=songList[songindex].singer
     play.classList.remove("fa-pause")
     play.classList.add("fa-play")
     // For setup innerHTML of total song length in minutes
     audio.addEventListener("loadedmetadata",()=>{
         totalDuration.innerHTML= Math.floor(audio.duration/60) + ":" + Math.round(audio.duration%60)
         range.max=audio.duration
     })
     play.click()
     document.getElementById("list").style.bottom="-50%"
     searchbar.value=""
}



document.getElementById("close").addEventListener("click",()=>{
    searchbar.value=""
    document.getElementById("list").style.bottom="-50%"
})
    


