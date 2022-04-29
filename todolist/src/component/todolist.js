import React, { Component } from 'react';


function todoList(props) {
    const items= props.items;
    return(
        items.map((item)=>{
            <li>{item.title}</li>

        })

    );
}

export default todoList;