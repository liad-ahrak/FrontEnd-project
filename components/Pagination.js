import React, { useState } from 'react';
import Layout from './Layout';


const Pagination = ({ postsPerPage, totalPosts, paginate, currPage }) => {

  const getData = async (i) => {
    const response = await fetch(`/api/posts?currPage=${i}`);
    const data = await response.json();
    data.posts;
  };
  // selectPage: sets 'currPage' to be the current page number
  //             sets the pagination
  const selectPage = (pageNumber) => {
    if (getData(pageNumber) === null || getData(pageNumber) === undefined || getData(pageNumber).length === 0){
      pageNumber = pageNumber-1;
    }
    // let maxPage = Math.ceil(totalPosts / postsPerPage);
    // pageNumber = Math.max(Math.min(maxPage, pageNumber), 0);
    pageNumber = Math.max(pageNumber, 0);
    setStartNum(Math.max(pageNumber - 1, 0));
    currPage = pageNumber;
    paginate(pageNumber);
  }

  const pageNumbers = [];
  const [startNum, setStartNum] = useState(0);
   
  
  var maxI = 2
  // console.log('check type of data')
  // console.log( typeof getData(startNum+1))
  if (getData(startNum+1).length === 0){
    // console.log(  getData(startNum+1))
    maxI = 0;
  }
  else{
    if(getData(startNum+2).length === 0){
      // console.log( typeof getData(startNum+2))
      // console.log( getData(startNum+1))
      maxI = 1
    }
  }
  // Math.min(Math.ceil(totalPosts / postsPerPage), startNum + 2)
  for (let i = startNum; i <= startNum+maxI ; i++) {
    //console.log('add',i);
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
        
      `}</style>
    </nav>
  );
};
export default Pagination;