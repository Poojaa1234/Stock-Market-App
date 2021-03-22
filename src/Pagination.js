import React ,{useState,useEffect} from 'react';

const Pagination = ({showPerPage, onPageChange, totalPages})=>{
    const[counter,setCounter]=useState(1);
    const[numberofButtons]=useState(10);

    useEffect(()=>{
        const value= showPerPage * counter;
        onPageChange(value-showPerPage,value);
    },[counter])
    
    const onBtnClick = (val) =>{
        if(val === "prev"){
            if(counter=== 1){
                setCounter(1)
            } else{
                setCounter(counter -1);
            }
        }
        else if (val === "next"){
            if(Math.ceil(totalPages/showPerPage) === counter){
                setCounter(counter)
            } else{
                setCounter(counter + 1)
            }
        }

    }

    return (
        <>

  <div className="pagination fixed-bottom">

      <a className="page-link" href="#" tabindex="-1" aria-disabled="true" onClick = {()=> onBtnClick('prev')}>Previous</a>
  
    {
            new Array(numberofButtons).fill("").map((element,index)=>{
                return(
                    <a className={`page-link ${index + 1 === counter ? 'active' : null }`}
                     href="#"
                     onClick={()=> setCounter(index+1)}>{index + 1} </a>
                )
            })
        }
      <a className="page-link" href="#" onClick = {()=> onBtnClick('next')}>Next</a>
  </div>
        </>
    )

}

export default Pagination;