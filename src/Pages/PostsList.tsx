import axios from "axios"
import { useEffect, useState } from "react"
import blogPost from "../Model/blogPost";
import { Link } from "react-router-dom";

type Props = {}

const PostsList = (props: Props) => {
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
                {post.map((p, index) => (
                    <li key={index}>
                        <Link to={'/post/1'}>
                            <h3>{p.blogTitle}</h3>
                        </Link>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default PostsList