import ShowBlog from './components/ShowBlog'
import AddBlog from './components/AddBlog'

export default [
  {
    path: '/',
    name: 'ShowBlog',
    component: ShowBlog
  }, {
    path: '/addblog',
    name: 'AddBlog',
    component: AddBlog
  }
]
