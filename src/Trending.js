import "./Trending.css";
import React, {useState} from "react";

// Assets
import genres from "./assets/Genres.json";
import mangaData from "./assets/MangaInfo.json";

// Components
import Menu from "./components/Menu";
import GenreCheckboxes from "./components/Genre_Checkbox";
import MangaCard_Back from "./components/MangaCard_Back";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Trending() {
    const [filterOpen, setFilterOpen] = useState(false);

    function openFilter() {
        setFilterOpen(true);
    }

    function closeFilter() {
        setFilterOpen(false)
    }

    function afterOpenFilter() {}

    return (
        <div>
            <Menu />

            <div className={'body Flex-Row'} id={'trending-body'}>
                <div id={'filter_options'} className={'Flex-Column'}>
                    <div className={'Justify-Center'}>
                        <h1 className={'White-Text'}>Filter Categories</h1>
                    </div>

                    <div className={'Justify-Start Flex-Column Pad-Left-2'}>
                        <h2 className={'White-Text'}>Genres</h2>

                        <div id={'genre-checkbox-container'}>
                            {genres.map((item, _) => (
                                <GenreCheckboxes genre={item.genre} />
                            ))}
                        </div>

                        <h2 className={'White-Text'}>Sort By</h2>

                        <select style={{width:'20vw'}}>
                            <option value="" disabled selected>Sort By...</option>
                            <option value="1">Trending</option>
                            <option value="2">Recently Updated</option>
                            <option value="3">New</option>
                        </select>
                    </div>

                </div>

                <div id={'content-box'} className={'Flex-Column Align-Center'}>
                    <div id={'Search-Bar'} className="positioning_search">
                        <div className="Search_Bar_Box">
                            <img src="img/icons/search_icon.png" className="search_icon" alt="Search_Icon"/>
                            <div className="Search_Manga_box">
                                <input type="text" id="search_input" placeholder={'Search Manga'}/>
                            </div>
                        </div>
                    </div>

                    <div className="positioning_filter">
                        <button className="filter_box" id={'filter-modal-button'} onClick={openFilter}>
                            <img id="Funnel" src="img/icons/funnel.png" alt="Funnel icon"/>
                            <p>Filter</p>
                            <img id="Down-Arrow" src="img/icons/down_arrow.png" alt="Down Arrow icon"/>
                        </button>
                        <Modal
                            className={"Modal-Body-Filter"}
                            isOpen={filterOpen}
                            onAfterOpen={afterOpenFilter}
                            onRequestClose={closeFilter}
                            style={customStyles}
                            contentLabel="Example Modal">
                            <div>
                                <div className={'Justify-Center'}>
                                    <h1 className={'White-Text'}>Filter Categories</h1>
                                </div>

                                <div className={'Justify-Start Flex-Column Pad-Left-2'}>
                                    <h2 className={'White-Text'}>Genres</h2>

                                    <div id={'genre-checkbox-container'}>
                                        {genres.map((item, _) => (
                                            <GenreCheckboxes genre={item.genre} />
                                        ))}
                                    </div>

                                    <h2 className={'White-Text'}>Sort By</h2>

                                    <select style={{width:'20vw'}}>
                                        <option value="" disabled selected>Sort By...</option>
                                        <option value="1">Trending</option>
                                        <option value="2">Recently Updated</option>
                                        <option value="3">New</option>
                                    </select>
                                </div>
                            </div>
                        </Modal>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", paddingLeft:'2vw', marginLeft:'1vw', marginTop:'2vh'}}>
                        {mangaData.map((item, _) => (
                            <div style={{paddingRight: "2vw", paddingBottom: "3vh"}}>
                                <MangaCard_Back title={item.title} author={item.author} genres={item.genres}
                                                image={item.image} alt={item.alt}/>
                            </div>

                        ))}
                    </div>

                    <div style={{display:'flex', justifyContent:'center'}}>
                        <a id={'more_btn'} href={process.env.PUBLIC_URL + 'Trending'} style={{textDecoration:'none'}}>
                            <p>More ></p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}