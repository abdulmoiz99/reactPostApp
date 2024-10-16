import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const updatePost = (e: Event) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/blogs/${id}`, {
            blogTitle: title,
            BlogDetails: details
        })
            .then(response => navigate('/post'))
            .catch(error => console.log(error))
    }
    const [title, SetTitle] = useState("");
    const [details, setDetails] = useState("");

    return (
        <>
            <h5>Edit Post</h5>
            <form onSubmit={updatePost}>
                <p>Title :
                    <input
                        value={title}
                        onChange={(e) => SetTitle(e.target.value)}
                    />
                </p>
                <p>Details:
                    <input
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </p>
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default EditPost