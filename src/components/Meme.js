import { useState } from "react";
import memesData from "../memesData";
export default function Meme() {
let url;
// const [memeImage,setMemeImage]= useState("");

const [meme,setMeme]= useState({

     topText : "",
     bottomText: "",
     randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)



    function getMemeImage() {
      const memesArray = allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
      
  }
    
                                                   
  return (
    //main- imp content,form-for user i/p
    <main>
      <div>
        <p>{url}</p>
        <input type="text" placeholder="Top-text" className="form--input" />
        <input type="text" placeholder="Bottom-text" className="form--input" />
        <button onClick ={getMemeImage} className="form--button">Get a new meme image</button>
      
      <img src={meme.randomImage} alt="meme" className="meme--img"/>
      </div>
    </main>
  );
}
// input type - for user to enter data (data type is text)
//button- to get new meme img
//placeholder - for expected value of input field
//classname - to give style in css and differentiate

