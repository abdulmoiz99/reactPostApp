import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import PostsList from './Pages/PostsList'
import { NotFound } from './Pages/NotFound'
import PostDetails from './Pages/PostDetails'
import Post from './Pages/Post'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
      <NavBar />
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
