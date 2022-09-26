import "./App.css";                            //css file for styling
import Header from "./components/Header";       //imported header component
import Meme from "./components/Meme";

//source -- app--prj//src
//destination --header--prj/src/comp/header

export default function App() {          //created function to render components
  return (                              //checked header components 
    <div className="App">               
      <Header />
      <Meme/> 
                              
    </div>
  );
}
