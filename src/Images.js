import React, { useState } from 'react';
import Glogo from './Assets/GOOGL.png';
import Fblogo from './Assets/FB.png';
import Alogo from './Assets/AMZN.png';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const data = [
    {
        id: "1",
        name: 'Google',
        image: Glogo,
    },
    {
        id: "2",
        name: 'Microsoft',
        image: Fblogo,
    },
    {
        id: "3",
        name: 'Amazon',
        image: Alogo,
    }
]
const Images = ()=>{
    const [images, setImages] = useState(data);

    function handleOnDragEnd(result) {
    
        if (!result.destination) return;
        const items = Array.from(images);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setImages(items);
    }
    return(
        <>
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="images">
        {(provided)=>(
        <ul className="images" {...provided.droppableProps} ref={provided.innerRef} >
        {images.map(({id, name, image},index) =>(
       
            <Draggable key={id} draggableId={id} index={index}>
            {(provided)=>(
                <li className="d-inline" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <img src={image} alt={name} 
        style={{height:"50px",width:"50px", marginLeft:"20px",marginTop:"5px"}} />
        </li>
        )}
        </Draggable>
        ))}
    {provided.placeholder}
    </ul>
        )}
       
    </Droppable>
    </DragDropContext>
    </>
    )

}
export default Images;