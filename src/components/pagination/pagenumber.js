import React from 'react';

const Pagenumber = ({ postsPerPage, totalPosts, paginate, setNumberOfPostsPerPage }) => {
  const pageNumbers = [];
  const setpostsPerPage = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  for (let i = 1; i <= 5; i++) {
    setpostsPerPage.push(i * 10);
  }

  return (
    <>
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='!#' className='page-link'>
                    {number}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
        <div>set number of posts per page to display</div>
        <nav>
            <ul className='pagination'>
                {setpostsPerPage.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => setNumberOfPostsPerPage(number)} href='!#' className='page-link'>
                    {number}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    </>
  );
};

export default Pagenumber;