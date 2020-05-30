import React, { Component,se } from 'react';

class addTodo extends Component {
    state = { 
        const {item, setitem}=this.setState(
            title='',
            detail=''
        );
        const {items, setitems}=this.setState([])
     }


     function add() {
         
         setitems((prestate)=>{
             return ([...prestate],item)
         });
         
     }

     function handlechange(event) {
         const name=event.target.name;
         const value=event.target.value;
         setitem(()=>{
             return ([...item], [name]:value)
         });
         
     }

     function viewitem(id) {
         const itemindex=items.filter((item ,index)=>{
             item.index=id

         });
         const item=items[itemindex];

         return item;
         
     }

    render() { 
        return ( 
            <div>
            <input type='text' value={item.title}/>
            <input type='text' value={item.detail}/>
            <button type='submit'>Add items </button>
        </div>
         );
    }
}
 
