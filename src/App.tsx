import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import PostsList from './Pages/PostsList'
import { NotFound } from './Pages/NotFound'
import PostDetails from './Pages/PostDetails'
import EditPost from './Pages/EditPost'
import Post from './Pages/Post'

function App() {
  return (
    <>
      <nav style={{ margin: 10 }}>
        <NavLink to="/" style={{ padding: "5px" }}>Home</NavLink>
        <NavLink to="/post" style={{ padding: "5px" }} end>About</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<NotFound />}></Route>
        <Route path={'/post'} element={<Post />}>
          <Route index element={<PostsList />} />
          <Route path=':id' element={<PostDetails />} />

        </Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </>
  )
}

export default App
