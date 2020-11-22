import React from 'react';


function Switch(props) {
    return (
        <div className="switch">

            <div>
                <button className="change-grid-button" id="change-grid" style={{marginRight: "10px" }}
                        onClick={props.switchGrid}>Grid
                </button>
            </div>
            <div>
                <button className="change-table-button" id="change-table"
                        onClick={props.switchTable}>Table
                </button>
            </div>
        </div>
    )
}


 export {Switch}

