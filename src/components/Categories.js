import React from 'react'

export const Categories = (props) => {
    return (
        <div className="col px-1 category">
            <a href="">
                <img style={{ width: "100px" }} src={props.img_link} alt="" />
            </a>
        </div>
    )
}
