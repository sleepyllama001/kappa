import "./MangaCard_Back.css"
import React from "react";


export default function Back_Card({title, author, genres, image, alt}) {
    return (
        <button className={"Back-Card-Border"}>
            <a className={'Card-Content'} href={process.env.PUBLIC_URL + 'Bookdesc'} style={{textDecoration:'none', color:'black'}}>
                <div className={'cover_back'}>
                    <img className={"covers"} style={{filter:'blur(5px)'}} src={image} alt={alt}/>
                    <div className={'cover_back_text_container'}>
                        <p style={{textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff'}}>
                            Author - {author}
                        </p>
                        <p style={{textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff'}} className={'cover_back_text'}>
                            Genres - {genres[0]}, {genres[1]}
                        </p>
                        <p style={{textShadow: '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff'}} className={'cover_back_text'}>
                            Views - 10.2M
                        </p>
                    </div>
                </div>
                <div className="manga_title_description">
                    <h2>{title}</h2>
                    <p>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </a>
        </button>
    )
}