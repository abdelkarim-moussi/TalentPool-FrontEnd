import JobList from './components/JobList'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import RegisterForm from './components/RegisterForm'

const App = () => {
  return (
    <div className='bg-green-50'>
      <NavBar />
      <JobList />
      <LoginForm />
      <RegisterForm />
    </div>
  )
}

export default App
