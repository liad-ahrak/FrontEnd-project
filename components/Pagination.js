import React, { useState } from 'react';
import Layout from './Layout';


const Pagination = ({ postsPerPage, totalPosts, paginate, currPage }) => {

  // selectPage: sets 'currPage' to be the current page number
  //             sets the pagination
  const selectPage = (pageNumber) => {
    let maxPage = Math.ceil(totalPosts / postsPerPage);
    pageNumber = Math.max(Math.min(maxPage, pageNumber), 1);
    setStartNum(Math.max(pageNumber - 1, 1));
    currPage = pageNumber;
    paginate(pageNumber);
  }

  const pageNumbers = [];
  const [startNum, setStartNum] = useState(1);

  for (let i = startNum; i <= Math.min(Math.ceil(totalPosts / postsPerPage), startNum + 2); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
        <div className='align-center'>
            <button className='pagination'onClick={() => selectPage(currPage - 1)} > previous </button>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => {selectPage(number)}} href='#'
                     className={currPage == {number} ? 'active' : ''}>
                    {number}
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