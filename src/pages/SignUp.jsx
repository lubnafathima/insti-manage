import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Logo from '../assets/logo/logo.png'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'students', // default role
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError('Full name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up')
      }

      // Store the JWT token
      localStorage.setItem('token', data.token)

      // Redirect to sign-in page after successful signup
      navigate('/sign-in')
    } catch (error) {
      console.error('Signup error:', error)
      setError(error.message || 'Failed to create account')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-slate-50   flex flex-col justify-center items-center md:p-10 p-6 font-[Helvetica] tracking-wide">
      <div className="md:w-[50%] sm:w-96 rounded-xl shadow-md p-10 border">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="InstiManage Logo" className="h-6 w-auto" />
          <h1 className="text-4xl font-semibold my-8">Sign up</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className='flex justify-between gap-4'>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Smith"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded p-2 bg-gray-50"
                disabled={isLoading}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border rounded p-2 bg-gray-50"
                disabled={isLoading}
              >
                <option value="students">Student</option>
                <option value="teachers">Teacher</option>
                <option value="parents">Parent</option>
                <option value="institutes">Institute</option>
              </select>
            </div>
          </div>

          <div className='flex justify-between gap-4'>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="border rounded p-2 bg-gray-50"
                disabled={isLoading}
                required
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="border rounded p-2 bg-gray-50"
                disabled={isLoading}
                required
              />
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long
              </p>
            </div>
          </div>

          <button
            type="submit"
            className={`text-sm rounded font-semibold tracking-wider p-2 text-white 
              ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA]'
              } 
              text-center transition-colors duration-300`}
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <p className="text-sm text-center text-slate-600">
            Already have an account?{' '}
            <Link to="/sign-in" className="underline text-black">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
