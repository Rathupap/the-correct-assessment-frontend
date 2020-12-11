import React from 'react';

const ComponentsList = ({ componentNo }) => {

    return (
            <div className="col-sm-4 col-12 components">
            <img src={`http://placehold.it/2048&text=Item ${componentNo}`} alt={`Item ${componentNo}`}/>
            <div className="component-content">
                <h4>Title: Item { componentNo }</h4>
                <p>This is the description for item { componentNo }</p>
            </div>
            
        </div>
    )

}

export default ComponentsList;