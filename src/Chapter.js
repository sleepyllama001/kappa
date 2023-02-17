import { useEffect, useState } from "react";
import "./booty.css";
import Menu from "./components/Menu";
import Phonemenu from "./Phonemenu";

const Chapter = () => {

    const [theme, setTheme] = useState('light');
    const Darkmode = () => {
        if (theme === 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    };

    const PageAutomator = (holder) => {
        let initialText = "/img/kaoru_hana/page1.jpeg";
        
        // valid.src = initialText
        
        
        for(let i = 0; i < 25; i++){
            let str_one = "/img/kaoru_hana/page";
            let source = '' + i;
            let end = ".jpeg";
            let concat = str_one + source + end;
            let valid = document.createElement("img");
            valid.src = concat;
            valid.id = "mangapanels";
            console.log(concat);
            console.log(i);
            let consoler = document.getElementById("pages");
            if(valid != null){
                console.log(valid);
                console.log(consoler);
                document.getElementById("pages").appendChild(valid);
            }
        }
    }
    useEffect(() => {
        {PageAutomator(5)};
    }, [])
   

    return( 
    
    <div className={`App ${theme}`}>
    <div>
        <div className="menu_container">
    <Menu>
    </Menu>
    </div>
    <div>
        <Phonemenu>
            
        </Phonemenu>
    </div>
    <button onClick={Darkmode}></button>
    <div className="top_bar">
    <div className="reading_options">
        <select name="Chapter" id="chapter_dropdown">
            <option value="Chapter 1">Chapter 1</option>
            <option value="Chapter 2">Chapter 2</option>
        </select>
    </div>
    <div className="Next_Prev">
        <a className="previous_button">Prev</a>
        <a className="next_button">Next</a>
    </div>
    <label className="Load_all_images">
        <div className="left">Load all images at once?</div>
      <input type="checkbox"></input>
      <span className="slider"></span>
    </label>
    </div>

    <div id="pages">
        

    </div>
   
    </div>
    </div>
    
  )};
  //See if we can make a function to autopropogate the chapter dropdown, if not we can manually do it then
  export default Chapter;