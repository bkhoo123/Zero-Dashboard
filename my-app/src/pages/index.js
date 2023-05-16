import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../../public/images/Zero_Dash Logo.png'
import axios from 'axios'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  return (
    <main className={`${inter.className} bg-slate-200 h-screen w-screen pt-20`}>
       <div className="flex flex-col justify-center items-center">
        <div className="text-3xl font-bold mb-8">eBay Business Dashboard</div>

        <Image
        className="rounded-md"  
        src={Logo}
        height={500}
        width={500}
        />


        <div className="mt-8 flex flex-row gap-8">
          <button onClick={() => router.push("/login")} className='bg-teal-500 p-2 px-4 rounded-md text-white font-semibold hover:bg-gray-600'>Login</button>
          <button onClick={() => router.push("/signup")} className='bg-teal-500 p-2 px-4 rounded-md text-white font-semibold hover:bg-gray-600'>Sign Up</button>
        </div>

       </div>
    </main>
  )
}
