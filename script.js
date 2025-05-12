let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 0.8
    text_speak.pitch=0.5
    text_speak.volume =10
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
    let hours= day.getHours()
    if (hours >= 0 && hours < 12){
        speak("Good Morning Sir")
    }
    else if( hours >= 12 && hours <16){
        speak("Good Afternoon Sir")
    }
    else if( hours >= 16 && hours <20){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Night Sir")
    }
}
window.addEventListener(`load`,()=>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult =(event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
    
} 

btn.addEventListener("click" , ()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

btn.addEventListener("click" , ()=>{
    setTimeout(() => {
            btn.style.display = "flex";
            voice.style.display = "none";
        }, 8000); // Delay of 8 seconds 
})



function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"


    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir , how can i help you?");
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant , created by sarthak sir");
    }
    else if(message.includes("open youtube")){
        speak("openning youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("openning google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open instagram")){
        speak("openning instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open calculator")){
        speak("openning calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("openning whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else if(message.includes("i love u ")){
        speak("i love u to sarthak sir")
    }
    else if(message.includes("thank you ")){
        speak("welcome sir")
    }
    else{
        let finalText ="this is what i found on internet regarding" + message.replace("shifra" , "")||message.replace("shipra" , "")
        speak(finalText)
        window.open(`https://www.google.co.in/search?q=${message.replace("shipra" , "")}` , "__blank")
    } 
}
    

