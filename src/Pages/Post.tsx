import { Outlet } from 'react-router-dom'

type Props = {}

const Post = (props: Props) => {
    return (
        <>
            <h1>Posts</h1>
            <Outlet />
        </>
    )
}

export default Post