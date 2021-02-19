import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagenumber from './pagenumber';

const Pagination = () => {

    const [post, setpost] = useState([]);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [pageNum, setpageNum] = useState(0);

    useEffect(() =>  {

        const fetchPosts = async () => {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setpost(posts.data);
            console.log(posts.data);
            setpageNum(posts.data.length / postsPerPage);
        }
        fetchPosts();
    }, []);

    // get current posts
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div>
            Pagination
            {
                currentPosts.map(p => {
                    return(
                        <ul key={p.id}>
                            <li key={p.id} className={p.id}>{p.title}</li>
                        </ul>    
                    )
                })
            }
            {pageNum}
            
        </div>
    )
}


export default Pagination;