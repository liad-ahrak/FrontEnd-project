import React, { useState , useRef, useEffect} from 'react';
import Layout from './Layout';


const Pagination = ({ postsPerPage, totalPosts, paginate, currPage }) => {
  const pageNumbers = [];
  const [startNum, setStartNum] = useState(0);
  let nextFeed = useRef([0]);
  //we will use this ref only for chack for the first page
  let next2Feed = useRef([0]);
  // updateRef: update the ref that save the feed of the next possible page 
  const updateRef = async (i) => {
    const response = await fetch(`/api/posts?currPage=${i+1}`);
    const data = await response.json();
    nextFeed.current = data.posts;
    const response2 = await fetch(`/api/posts?currPage=${i+2}`);
    const data2 = await response2.json();
    next2Feed.current = data2.posts;
  };
  useEffect(()=>{
    updateRef(currPage);
  });
  // selectPage: sets 'currPage' to be the current page number
  //             sets the pagination
  const selectPage = (pageNumber) => {
    if(pageNumber-1 === currPage && nextFeed.current.length === 0){
      pageNumber = pageNumber-1;
    }
    // let maxPage = Math.ceil(totalPosts / postsPerPage);
    // pageNumber = Math.max(Math.min(maxPage, pageNumber), 0);
    pageNumber = Math.max(pageNumber, 0);
    setStartNum(Math.max(pageNumber - 1, 0));
    currPage = pageNumber;
    paginate(pageNumber);
  }

  
  var offset =  2;
  if(nextFeed.current.length === 0){
    offset = currPage===0? 0 : 1
  }
  if(currPage === 0 && next2Feed.current.length === 0  ){
    offset = 1;
  }
  // Math.min(Math.ceil(totalPosts / postsPerPage), startNum + 2)
  for (let i = startNum; i <= startNum+offset ; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
        <div className='align-center'>
            <button className='pagination'onClick={() => selectPage(currPage - 1)} > previous </button>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => {selectPage(number)}} //href='#'
                     className={currPage == {number} ? 'active' : ''}>
                    {number+1}
                    </a>
                </li>
                ))}
            </ul>
            <button className='pagination' onClick={() => selectPage(currPage + 1)}> next </button>
            <h2>you are now in page {currPage+1} </h2>
            <h2>number of feed in page {currPage+2} are {nextFeed.current.length}</h2>
            {/* <h2>the offset is {offset}</h2>
            <h2>number of feed in page {currPage+2} are {next2Feed.current.length}</h2> */}
        </div>
    <style jsx>{`
        .align-center button{
            background-color: none;
            border: none;
            color: black;
            margin-left: 40px;
            padding-bottom: 50px;
        }

        .pagination{
            display:inline-block;
        }

        .active {
            color: red;
        }
                    
        .align-center{
            text-align: center;
        }
        
        .page-item {
          display: inline-block;
        }
        
        .pagination a {
            color: black;
            float: left;
            padding: 8px 16px;
            text-decoration: none;
            transition: background-color .3s;
        }
          
        .pagination a:active {
            background-color: dodgerblue;
            color: white;
        }
          
        .pagination a:hover:not(.active) {
            background-color: #ddd;
        }
        #light a{
          background-color: rgba(0, 0, 0, 0.05);
        }

        #dark a{
          background-color: rgba(0, 0, 0, 0.55);
        }        
      `}</style>
    </nav>
  );
};
export default Pagination;