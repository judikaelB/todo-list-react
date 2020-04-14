import React from "react";

const todoElement = (props) => {
    return (
        <div className="row bg-secondary rounded mt-2">
            <p className="col-sm-3">{props.element.title}</p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn btn-info btn-xs m-1"
               onClick={() => props.onedit(props.element)} >Edit</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn btn-danger btn-xs m-1"
               onClick={() => props.ondelete(props.element.id)} >Delete</a>
        </div>
    )
};

export default todoElement;