import axios from "axios"
import { useEffect, useState } from "react"
import blogPost from "../Model/blogPost";
import { Link } from "react-router-dom";

const PostDetails = (props: Props) => {
    const [post, setPost] = useState<blogPost>();
    useEffect(() => {
        const getBlogs = () => {
            axios.get('http://localhost:3000/blogs/1')
                .then(response => setPost(response.data))
                .catch(error => console.log(error))
        }
        getBlogs();
    }, [])

    return (
        <>
            <h1>{post?.blogTitle}</h1>

        </>
    )
}

export default PostDetails