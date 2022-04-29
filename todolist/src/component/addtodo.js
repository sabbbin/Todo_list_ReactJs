
import React, { Component,se } from 'react';
import todoList from './todolist';
function addTodo  {
   
        const [item, setitem]=setState({
            title='',
            detail=''
        }
      
        );
        const [items, setitems]=setState([]);
     


    
     
    function add(item) {
         
        setitems((prestate)=>{
            return {...prestate,item}
        });
        
        
    }  ;
     
     function handlechange(event) {
         const name=event.target.name;
         const value=event.target.value;
         setitem((preitem)=>{
             return {
                 ...preitem, [name]:value
             })
         }
         
    

     function viewitem(id) {
         const itemindex=items.filter((item ,index)=>{
             item.index=id

         });
         const item=items[itemindex];

         return item;
         
     }


        return ( 
            <div>
            <input type='text' value={item.title}/>
            <input type='text' value={item.detail}/>
            <button type='submit'>Add items </button>
            <todoList  items={items} />
        </div>
         );
 
}

export default addTodo;
 
