// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark,handleReadingTime}) => {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id}
                    handleBookmark = {handleBookmark}
                    handleReadingTime = {handleReadingTime}
                    blog={blog}></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}


export default Blogs;