import { Route, Routes } from 'react-router-dom'
import './App.css'
import PostsList from './Pages/PostsList'
import { NotFound } from './Pages/NotFound'
import Post from './Pages/Post'
import NavBar from './Components/NavBar'
import PostDetails from './Pages/PostDetails'
import Home from './Pages/Home'
import EditPost from './Pages/EditPost'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path={'/post'} element={<Post />}>
          <Route index element={<PostsList />} />
          <Route path={':id'} element={<PostDetails />} />
          <Route path={'edit/:id'} element={<EditPost />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </>
  )
}

export default App
