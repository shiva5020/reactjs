import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Pagenumber from './pagenumber';
import axios from 'axios';

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // set posts per page
  const setNumberOfPostsPerPage = number => setpostsPerPage(number);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagenumber
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        setNumberOfPostsPerPage={setNumberOfPostsPerPage}
      />
    </div>
  );
};

export default Pagination;


















































// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Pagenumber from './pagenumber';

// const Pagination = () => {

//     const [post, setpost] = useState([]);

//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(10);
//     const [pageNum, setpageNum] = useState(0);
//     const [pagenumers, setpagenumbers] = useState([]);

//     useEffect(() =>  {

//         const fetchPosts = async () => {
//             const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
//             setpost(posts.data);
//             console.log(posts.data);
//             setpageNum(posts.data.length / postsPerPage);
//             pagenumberexecution();
//         }
//         fetchPosts();
//     }, []);

//     // get current posts
    
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

//     const pagenumberexecution = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= pageNum; i++) {
//             pageNumbers.push(i);
//             console.log("pagiantion");
//         }
//         setpagenumbers(pageNumbers);
//     }

//     return (
//         <div>
//             Pagination
//             {
//                 currentPosts.map(p => {
//                     return(
//                         <ul key={p.id}>
//                             <li key={p.id} className={p.id}>{p.title}</li>
//                         </ul>    
//                     )
//                 })
//             }
//             <nav>
//                 <ul className='pagination'>
//                     {pagenumers.map(number => (
//                         <li key={number} className='page-item'>
//                             <a className='page-link'>
//                             {number}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>       
//         </div>
//     )
// }


// export default Pagination;