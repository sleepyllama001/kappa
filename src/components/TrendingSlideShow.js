import "./TrendingSlideShow.css"
var slideIndex = 1;

export default function SlideShow() {

    return (
        <div className="title_chapter_description_box">
            <a className="cover" href={process.env.PUBLIC_URL + "Bookdesc"}>
                <img style={{display:'flex'}} className="manga_poster_img" src="img/manga_covers/chainsaw_man.jpg" alt="Chainsaw Man vol 1. cover"/>
                <img style={{display:'none'}} className="manga_poster_img" src="img/manga_covers/trigun_cover.jpeg" alt="Trigun vol 1. cover"/>
                <img style={{display:'none'}} className="manga_poster_img" src="img/manga_covers/berserk.png" alt="Berserk vol 1. cover"/>
                <img style={{display:'none'}} className="manga_poster_img" src="img/manga_covers/onepiece_cover.jpeg" alt="Onepiece vol 1. cover"/>
                <img style={{display:'none'}} className="manga_poster_img" src="img/manga_covers/rezero.jpg" alt="Re:Zero vol 1. cover"/>
            </a>

            <div className="horizontal_div">
                <div className="padding_left_arrow">
                    <button className="arrow_box" onClick={() => plusDivs(-1)}>
                        <img className="arrow" src="img/icons/left_arrow.png" alt="left_arrow"/>
                    </button>
                </div>

                <div id={'slideshow_container'} style={{display: 'flex', justifyContent: 'center'}}>
                    <div className={'slide'} style={{display: 'flex', flexDirection:'row'}}>
                        <div className="manga_info">
                            <div className="padding">
                                <div className="Border">
                                    <div className="Title">
                                        <h1>Chainsaw Man</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Chapter">
                                    <div className="Chapter">
                                        <h2>Chapter 110</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Description">
                                    <div className="Description">
                                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim
                                            tortor. Imperdiet
                                            nulla malesuada pellentesque elit eget gravida cum. Amet venenatis urna
                                            cursus eget nunc
                                            scelerisque viverra.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="horizontal_div">
                                <div className="padding">
                                    <div className="Horror_Border">
                                        <div className="Horror">
                                            <p>Horror</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="padding">
                                    <div className="Comedy_Border">
                                        <div className="Comedy">
                                            <p>Comedy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding_manga_cover">
                            <div className="border_vol_cover">
                                <img className="manga_cover" src="img/manga_covers/chainsaw_man.jpg" alt="Chainsaw Man Vol. 1 Cover"/>
                            </div>
                        </div>
                    </div>

                    <div className={'slide'} style={{display: 'none', flexDirection:'row'}}>
                        <div className="manga_info">
                            <div className="padding">
                                <div className="Border">
                                    <div className="Title">
                                        <h1>Trigun</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Chapter">
                                    <div className="Chapter">
                                        <h2>Chapter 151</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Description">
                                    <div className="Description">
                                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim
                                            tortor. Imperdiet
                                            nulla malesuada pellentesque elit eget gravida cum. Amet venenatis urna
                                            cursus eget nunc
                                            scelerisque viverra.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="horizontal_div">
                                <div className="padding">
                                    <div className="Horror_Border">
                                        <div className="Horror">
                                            <p>Love</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="padding">
                                    <div className="Comedy_Border">
                                        <div className="Comedy">
                                            <p>Peace</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding_manga_cover">
                            <div className="border_vol_cover">
                                <img className="manga_cover" src="img/manga_covers/trigun_cover.jpeg" alt="Trigun Vol. 1 Cover"/>
                            </div>
                        </div>
                    </div>

                    <div className={'slide'} style={{display: 'none', flexDirection:'row'}}>
                        <div className="manga_info">
                            <div className="padding">
                                <div className="Border">
                                    <div className="Title">
                                        <h1>Berserk</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Chapter">
                                    <div className="Chapter">
                                        <h2>Chapter 367</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Description">
                                    <div className="Description">
                                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim
                                            tortor. Imperdiet
                                            nulla malesuada pellentesque elit eget gravida cum. Amet venenatis urna
                                            cursus eget nunc
                                            scelerisque viverra.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="horizontal_div">
                                <div className="padding">
                                    <div className="Horror_Border">
                                        <div className="Horror">
                                            <p>Fantasy</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="padding">
                                    <div className="Comedy_Border">
                                        <div className="Comedy">
                                            <p>Mature</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding_manga_cover">
                            <div className="border_vol_cover">
                                <img className="manga_cover" src="img/manga_covers/berserk.png" alt="Berserk Vol. 1 Cover"/>
                            </div>
                        </div>
                    </div>

                    <div className={'slide'} style={{display: 'none', flexDirection:'row'}}>
                        <div className="manga_info">
                            <div className="padding">
                                <div className="Border">
                                    <div className="Title">
                                        <h1>One Piece</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Chapter">
                                    <div className="Chapter">
                                        <h2>Chapter 1062</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Description">
                                    <div className="Description">
                                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim
                                            tortor. Imperdiet
                                            nulla malesuada pellentesque elit eget gravida cum. Amet venenatis urna
                                            cursus eget nunc
                                            scelerisque viverra.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="horizontal_div">
                                <div className="padding">
                                    <div className="Horror_Border">
                                        <div className="Horror">
                                            <p>Adventure</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="padding">
                                    <div className="Comedy_Border">
                                        <div className="Comedy">
                                            <p>Action</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding_manga_cover">
                            <div className="border_vol_cover">
                                <img className="manga_cover" src="img/manga_covers/onepiece_cover.jpeg" alt="One Piece Vol. 1 Cover"/>
                            </div>
                        </div>
                    </div>

                    <div className={'slide'} style={{display: 'none', flexDirection:'row'}}>
                        <div className="manga_info">
                            <div className="padding">
                                <div className="Border">
                                    <div className="Title">
                                        <h1>Re:Zero</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Chapter">
                                    <div className="Chapter">
                                        <h2>Chapter 512</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="padding">
                                <div className="Border" id="Description">
                                    <div className="Description">
                                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim
                                            tortor. Imperdiet
                                            nulla malesuada pellentesque elit eget gravida cum. Amet venenatis urna
                                            cursus eget nunc
                                            scelerisque viverra.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="horizontal_div">
                                <div className="padding">
                                    <div className="Horror_Border">
                                        <div className="Horror">
                                            <p>Isekai</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="padding">
                                    <div className="Comedy_Border">
                                        <div className="Comedy">
                                            <p>Fantasy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding_manga_cover">
                            <div className="border_vol_cover">
                                <img className="manga_cover" src="img/manga_covers/rezero.jpg" alt="Re:Zero Vol. 1 Cover"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="padding_right_arrow">
                    <button className="arrow_box" onClick={() => plusDivs(+1)}>
                        <img className="arrow" src="img/icons/right_arrow.png" alt="right_arrow"/>
                    </button>
                </div>

            </div>
        </div>
    )
}

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var y = document.getElementsByClassName("manga_poster_img");

    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }

    console.log(x.length)
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "flex";
    y[slideIndex - 1].style.display = "flex";

}