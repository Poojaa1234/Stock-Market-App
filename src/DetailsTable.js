import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';
import Item from './Item';
import { useHistory } from "react-router-dom";

function Table() {
  const[company,setCompany]=useState([]);
  const[search,setSearch]=useState("");
  const[showPerPage,setShowPerPage] = useState(5);
  const history = useHistory();
    const [page,setPage] = useState({
        start:0,
        end:showPerPage,
    })
    const onPageChange = (start,end) =>{
        setPage({start:start,end:end})
    }
    const totalPages = 200;
  useEffect(()=>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc
    &per_page=200&page=1&sparkline=false`)
    .then(res=>{
      setCompany(res.data)
    }).catch(error=>{
      console.log(error)
    })
  },[]);

  const onSearchHandler=(event)=>{
    setSearch(event.target.value);
  }

  const filteredCompany = company.filter(com=>
    com.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
     <div className="searchform">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" onChange={onSearchHandler} value={search} />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
     <table cellSpacing={4}>
    <thead>
    <tr> 
    <th>Company Name</th>
    <th>Stock Symbol</th>
    <th>Market Cap</th>
    <th>Current Price</th>
    <th>Actions</th>
    </tr>
    </thead>
    <tbody>
      {filteredCompany.slice(page.start,page.end).map((com,index)=>{
        return(
          <Item key={index}
          name={com.name}
          symbol={com.symbol}
          market_cap={com.market_cap}
          current_price={com.current_price}
          />
        )
      })}
    </tbody>
    </table>

    <Pagination showPerPage={showPerPage} onPageChange={onPageChange}
    totalPages={totalPages} />
    </>
  );
}

export default Table;
