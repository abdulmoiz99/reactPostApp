import axios from "axios"
import { useEffect, useState } from "react"
import blogPost from "../Model/blogPost";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const [post, setPost] = useState<blogPost>();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getBlogs = () => {
            axios.get(`http://localhost:3000/blogs/${id}`)
                .then(response => setPost(response.data))
                .catch(error => console.log(error))
        }
        getBlogs();
    }, [])

    return (
        <>
            <h5>Title: {post?.blogTitle}</h5>
            <h5>Details: {post?.BlogDetails}</h5>
            <button onClick={() => navigate(`/post/edit/${id}`)} >Edit</button >
        </>
    )
}

export default PostDetails