import React, { useState } from 'react';
import Layout from './Layout';

const Pagination = ({ postsPerPage, totalPosts, paginate, currPage=1}) => {
  const pageNumbers = [];
  const [startNum, setStartNum] = useState(1);

  for (let i = startNum; i <= Math.min(Math.ceil(totalPosts / postsPerPage), startNum + 2); i++) {
    pageNumbers.push(i);
  }
  console.log(currPage)
  return (
    <nav>
        <div className='align-center'>
            <button className='pagination'onClick={() => setStartNum( Math.min(Math.ceil(totalPosts / postsPerPage), startNum - 3) > 0 ? Math.min(Math.ceil(totalPosts / postsPerPage), startNum - 3) : 1 )} > previous </button>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => {currPage = {number}; return paginate(number)}} href='#'
                     className={currPage == {number} ? 'active' : ''}>
                    {number}
                    </a>
                </li>
                ))}
            </ul>
            <button className='pagination' onClick={() => setStartNum(startNum + 3 > Math.ceil(totalPosts / postsPerPage) ? startNum : startNum + 3)}> next </button>
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