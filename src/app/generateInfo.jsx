//test gpt 3.5 use
"use server";
import OpenAI from "openai";

const openai=new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const danceVids = [
"https://www.youtube.com/embed/z4n56_6BUro?si=tKp_oLZziVFGxJdO" ,
"https://www.youtube.com/embed/9POXYWLcvYI?si=bhAin496zBiZ3ro-" ,
"https://www.youtube.com/embed/SgiLOzFQh14?si=cPwsLcliqSmlvDnl" ,
"https://www.youtube.com/embed/zTciRj7UUlk?si=XvGdoC8FcHqBjmC0",
"https://www.youtube.com/embed/UBYqv21c0Yk?si=okTOOnpAWgRrwb47" ,
"https://www.youtube.com/embed/IaZEGDiQeCw?si=OtsDTShHbRoU3gGk" ,
"https://www.youtube.com/embed/XNhfV_53W7A?si=ZjBZW8ETZw38RRT4" ,
"https://www.youtube.com/embed/zV1qLYukTH8?si=vp6La1JEw5gJQaml" ,
"https://www.youtube.com/embed/Wz8b2xff7s0?si=--Vv8lxNMRfWMpJa" ,
"https://www.youtube.com/embed/BLjwluzYtM4?si=SL-MawYMmkouHz12" ,
"https://www.youtube.com/embed/jcW7Z9y5twQ?si=AulzMMJRN66l8m1L" ,
"https://www.youtube.com/embed/QoqpD8jLoBw?si=KYyQFIRuIEw1zhiH" ,
"https://www.youtube.com/embed/lV7WxL0QUOk?si=yzn9jYRDKLw7g2k6" ,
"https://www.youtube.com/embed/YbRX_cdTap8?si=fhgFTFgtcdPxRVHu" ,
"https://www.youtube.com/embed/3T7MWJ9J8Q0?si=EDoQ2LP4OGs0W4sY" ,
"https://www.youtube.com/embed/bAiUYG-aWfM?si=iFs2MxdRTx6In53J" ,
"https://www.youtube.com/embed/8x7xRDfWRqc?si=m4O4U5sXhfCMTgzN" ,
"https://www.youtube.com/embed/kckR6wf5xe8?si=u65ddYerZPIZI33H" ,
"https://www.youtube.com/embed/OXjyeKwXp3o?si=JdmwT10L8LkfwtAu"

  ];

  const danceNames = [
    "Brazilian samba dance",
    "Italian tarantella",
    "Bharatanatyam",
    "Waltz",
    "Kathak",
    "Breakdancing",
    "Flamenco",
    "Ballet",
    "Capoeira",
    "Hula",
    "Kizomba",
    "Moribayasa",
    "Soukous",
    "Kuchipudi",
    "Sabar",
    "Jota",
    "Dabke",
    "Tinikling",
    "Ghoomar"
  ];
  
const index=Math.floor(Math.random() * danceVids.length-1)
const dance=danceNames[index]
const video=danceVids[index]
require("dotenv").config();
const generateInformation = async() => {
const describeDance = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    //messages: [{role:"user", content:"return ONLY the name of a dance style from any country in the world. feel free to choose more unique or less known dance types, as long as you would be able to describe them in the future. include every region of the world and make sure the distribution of dance styles given when this prompt is ran multiple times is pretty much even. again, return only ONE dance style and ONLY the name of the style"}],
    messages: [{role:"user", content:"Describe "+dance+" to someone unfamiliar with the dance who wants to learn more about it and the culture it comes from in a short paragraph. First describe the dance, then talk about the cultural background of the dance and how it's often performed."}],
    max_tokens:150,
    temperature:1.2
})

const about = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role:"user", content:"What country does the dance style "+dance+" originate from? Inform me about its culture, how it influenced the development of "+dance+" and any other important information I need to know about that country in a 4-6 sentence paragraph."}],
    max_tokens:220,
    temperature:1.2
    })

//console.log(about.choices[0].message.content)
const info=[dance, describeDance.choices[0].message.content, video, about.choices[0].message.content]
console.log(info[3])
return info
}

export{generateInformation}