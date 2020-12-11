import React, { Fragment } from 'react';

const CatsList = ({ url, catNo, id }) => {

    return (
            <Fragment>
                <div className="cat-image" style={{ backgroundImage: `url(${url})`}}>
                
                </div>
                <div className="cat-content">
                    <h4>Cat { catNo }</h4>
                    <p>This is the description for the Cat { catNo }</p>
                </div>
            </Fragment>
    )

}

export default CatsList;