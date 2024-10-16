import axios from "axios"
import { useEffect, useState } from "react"
import blogPost from "../Model/blogPost";
import { Link } from "react-router-dom";

const PostsList = () => {
    const [post, setPost] = useState<blogPost[]>([]);
    useEffect(() => {
        const getBlogs = () => {
            axios.get('http://localhost:3000/blogs')
                .then(response => setPost(response.data))
                .catch(error => console.log(error))
        }
        getBlogs();
    }, [])

    return (
        <>
            <ul>
                {post.map((p) => (
                    <li key={p.id}>
                        <Link to={`/post/${p.id}`}>
                            <h3>{p.blogTitle}</h3>
                        </Link>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default PostsList