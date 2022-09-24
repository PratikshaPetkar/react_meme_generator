import token from "../images/back.jpg";

export default function event() {

    function handleClick (){
        console.log("I was clicked")                         // function for click on mouse 
    }
 
    function mouseHover(){
        console.log("hover over the image")
    }

  return (

    <div>
      <img onMouseMove={mouseHover}src={token} alt="bacground image" />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
