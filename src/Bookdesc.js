import "./Bookdesc.css";
import "./booty.css"
import Menu from "./components/Menu";

const Bookdesc = () => {
    const myFunction = () => {
        console.log("kappa");

        let x = document.getElementById("myLinks");
        if(x == null){
            console.log(x);
        }
        else{

        
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
      }

    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="menu_container">
                <Menu/>
            </div>

            <div className="phone_menu">
                <div className="topnav">
                    <img className="phone_logo" src="img/icons/manganato_logo.png"/>
                    <div id="myLinks">
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>

                    <a href="#" className="icon" onClick={() => {myFunction()}}>
                        <i className="fa fa-bars"></i>
                    </a>
                    <div className="padding_book_desc">
                        <a id="night-mode">
                            <div className="night_mode">
                                <embed className="moon" type="image/png" src={"img/icons/crescent.png"}/>
                                    <h2>Night Mode</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>


            <div className="container">

                <div></div>
                <div className="subcontainer_book">
                    <div className="button_grid">
                    <a className="bookmark_button">Bookmark?</a>
                    <a className="status_button">Status: Ongoing</a>
                    </div>
                    <img src="/img/manga_covers/chainsaw_man.jpg" className="book_pic"></img>
                    <p className="book_text">Description: Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on fighting against devils whenever they become a threat to Japan. The second arc of the story focuses on Asa Mitaka, a high school student who enters into a contract with Yoru the War Devil, who forces her to hunt down Chainsaw Man in order to reclaim the devils stolen from her.</p>
                    <ul className="book_categories">
                        <li>Author: Tatsumaki Fujimoto</li>
                        <li>Categories: Comedy, Drama, Action, Thriller</li>
                        <li>Status: Ongoing</li>
                    </ul>
                    <div className="subsubcontainer_book">
                        <img src="/img/icons/star_rating.jpeg" className="book_stars"></img>
                    </div>

                </div>


                <div className="sidebar_manga">
                <div className="horizontal_divs">
                                <div className="Manga_Card_Border">
                                    <img className="covers" src="/img/manga_covers/mob_psycho_cover.png" alt="Mob Psycho 100 Vol 1. Cover"/>
                                        <div className="manga_title_chapters">
                                            <h2 className="manga_title_title">Mob Psycho 100</h2>
                                            <p className="manga_title_chapters_chapters">Chapter 125</p>
                                            <p className="manga_title_chapters_chapters">Chapter 124</p>
                                            <p className="manga_title_chapters_chapters">Chapter 123</p>
                                        </div>
                                </div>
                                </div>
                                <div className="horizontal_divs">
                                <div className="Manga_Card_Border">
                                    <img className="covers" src="/img/manga_covers/mob_psycho_cover.png" alt="Mob Psycho 100 Vol 1. Cover"/>
                                        <div className="manga_title_chapters">
                                            <h2 className="manga_title_title">Mob Psycho 100</h2>
                                            <p className="manga_title_chapters_chapters">Chapter 125</p>
                                            <p className="manga_title_chapters_chapters">Chapter 124</p>
                                            <p className="manga_title_chapters_chapters">Chapter 123</p>
                                        </div>
                                </div>
                                </div>
                                <div className="horizontal_divs">
                                <div className="Manga_Card_Border">
                                    <img className="covers" src="/img/manga_covers/mob_psycho_cover.png" alt="Mob Psycho 100 Vol 1. Cover"/>
                                        <div className="manga_title_chapters">
                                            <h2 className="manga_title_title">Mob Psycho 100</h2>
                                            <p className="manga_title_chapters_chapters">Chapter 125</p>
                                            <p className="manga_title_chapters_chapters">Chapter 124</p>
                                            <p className="manga_title_chapters_chapters">Chapter 123</p>
                                        </div>
                                </div>
                                </div>
                                </div>
            </div>

        </div>
)}

export default Bookdesc;