import React, { useState, useEffect, Fragment } from 'react';
import CatsList from './CatsList';

const audio = new Audio(process.env.PUBLIC_URL + "/meow.mp3");

const CatDetails = ({ match, history }) => {

    const [cat, setCat] = useState(true);
    const [filteredCat, setFilteredCat] = useState([]);
    const catNo = match.params.no;
    const id = match.params.id;

    const meow = () => {

        setCat(!cat)
        cat ? audio.play() : audio.pause()
        
    }

    useEffect(() => {

        const cats = JSON.parse(localStorage.getItem("cats")) || [];

        const filteredCats = cats.filter((cat) => {
            return cat.id === id
        }) 

        setFilteredCat(filteredCats)

    }, [id])

    audio.addEventListener("ended", () => {

        setCat(true)
        
    })

    return (
        <Fragment>
            <div className="row justify-content-center details">
                <div className="col-md-7 col-12">
                    <svg onClick={ () => history.goBack() } width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left back-button" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </div>
                {
                    filteredCat.length > 0 ?filteredCat.map((cat, index) => (

                        <div className="col-12 col-md-7 cats cat-detail" key={cat.id}>
                            <CatsList catNo={catNo} url={cat.url} />
                        </div>
                    )):
                    <Fragment>
                        <h3>We are unable to find a cat with the id {id} in our database.</h3>
                        <p>In the meantime please play our favourite cat sound.</p>
                    </Fragment>
                }
                
            </div>
            <div className="row justify-content-center meow-button">
                <div className="col-md-6 col-12">
                    <button type="button" onClick={meow} className="btn btn-primary btn-lg">{ cat ? "Play Meow Meow": "Pause Meow Meow" }</button>
                </div>
            </div>
        </Fragment>
    )

}

export default CatDetails;