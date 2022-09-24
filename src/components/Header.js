import Logo from "../images/troll.png"      //created logo var and imported image 

//source header --proj//src/comp/header
//destination images -- proj/img/png

export default function header(){                               //passed all info and gave classname for css
    return(                                                       //header tag for heading info
        <header className="header">                                     
        <img className="header-image" src={Logo} alt="troll face"/>
        <h2 className="header-title"> Meme Generator</h2>
        <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )
}
//created logo jsx variable and stored img path 