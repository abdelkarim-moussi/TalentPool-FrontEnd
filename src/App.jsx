import JobList from './components/JobList'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='bg-green-50'>
      <NavBar />
      <JobList />
      <LoginForm />
    </div>
  )
}

export default App
