import "./Genre_Checkbox.css"

export default function GenreCheckboxes(genre) {
    return (
        <div>
            <input type={'checkbox'} value={1} className={'genre-checkbox'}/>
            <label htmlFor={'genre-checkbox'} className={'genre-label'}> {genre.genre}</label>
        </div>
    )

}