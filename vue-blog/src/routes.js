import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

export default [
  {
    path: '/',
    name: 'ShowBlog',
    component: ShowBlog
  }, {
    path: '/addblog',
    name: 'AddBlog',
    component: AddBlog
  }, {
    path: '/blog/:id',
    name: 'SingleBlog',
    component: SingleBlog
  }
]
