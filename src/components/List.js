import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CatsList from './CatsList';
//import ComponentsList from './ComponentsList';

const List = ({ history }) => {

    const action = history.action;
    const [cats, setCats] = useState([]);
    const [err, setErr] = useState(false);

    useEffect(() => {

        fetch("/api/images/get?format=json&results_per_page=12&size=small&type=png",{ mode: "cors" }).then((response) => {

            return response.json();

        }).then((data) => {
            localStorage.setItem("cats", JSON.stringify(data))
            setCats(data)
        }).catch((err) => {
            setErr(true)
        })

    }, [action])

    return (
        <Fragment>
            {/* <h2 className="title">The Famous <span className="effect">Components List</span></h2>
            <div className="row">
                {
                    components.map((item) => {
                        const componentNo = item + 1;
                        return <ComponentsList key={componentNo.toString()} componentNo={componentNo} />
                    })
                }
            </div>
            */}

            <h2 className="title">The Famous <span className="effect">Cat List</span></h2>
            <div className="row">
                {
                    err ?
                        <h3>Something went wrong with your request</h3>
                    : cats.length > 0 ? 
                    cats.map((cat, index) => {
                        const catNo = index + 1;
                        return <div className="col-sm-4 col-12 cats" key={cat.id}>
                            <Link to={`/${cat.id}/${catNo}`} className="link">
                                <CatsList catNo={catNo} url={cat.url} />
                            </Link>
                        </div>
                    }):
                    <div className="loader spinner-border text-dark" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
            </div>
        </Fragment>
        
    )

}

export default List;