import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


const SignUp = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/api/auth/signup', {name, email, password });
    
          if (response) {
            await router.push('/home');
          }
        } catch (error) {
          if (error.response) {
            setErrors([error.response.data.message]);
          } else {
            setErrors(['Error connecting to the server']);
          }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-48">
            <ul>
                {errors.map((error) => (
                <li key={error}>{error}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>


            <label className="flex flex-col text-center mt-6 font-bold">
                Name
                <input 
                type="text" 
                className="my-2 p-2 rounded-md border-2 border-sky-300 text-center"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </label>

            <label className="flex flex-col text-center mt-6 font-bold">
                Email
                <input 
                type="text" 
                className="my-2 p-2 rounded-md border-2 border-sky-300 text-center"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>

            <label className="flex flex-col text-center mt-6 font-bold" >
                Password
                <input 
                className="my-2 p-2 rounded-md border-2 border-sky-300 text-center"
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <div className="flex justify-center items-center">
            <button type="submit" className="mt-4 px-4 bg-teal-500 text-white font-semibold p-2 rounded-md hover:bg-gray-600">Sign Up</button>
            </div>
            </form>
        </div>
    )
}


export default SignUp