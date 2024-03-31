import React from 'react'
import background from "../assets/background.svg"
import logo from "../assets/logo.svg"
import github from "../assets/github.svg"
import twitter from "../assets/twitter.svg"
import discord from "../assets/discord.svg"
import Google from "../assets/google.svg"
import linkedin from "../assets/linkedin.svg"
import githubmobile from "../assets/githubmobile.svg"
import twittermobile from "../assets/twittermobile.svg"
import linkedinmobile from "../assets/linkedinmobile.svg"
import discordmobile from "../assets/discordmobile.svg"
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
    <div className='hidden sm:flex md:flex lg:flex'>
      {/* this is for ths sm devices */}
      <div className='sm:flex sm:h-[50px] sm:w-[full] sm:bg-blue-500'>

      </div>
  <div className="bg-cover bg-center  relative bg-no-repeat md:h-auto lg:h-auto    sm:w-[250px] md:w-[400px] lg:w-[712px]" style={{backgroundImage: `url(${background})`}}>
    <div className='absolute left-12 top-12'>
       <img src={logo} alt='logo'/>
    </div>
    <div className='flex justify-center items-center h-screen ml-[-80px]'>
        {/* strock pending */}
    <h1 className='text-[#FFFF] font-bold text-7xl stroke-[#0000] font-mont'>BASE</h1>
</div>
{/* soscial media icons */}
    <div className='flex justify-center space-x-10 ml-[-100px] pb-12 '>
    <div> <img src={github}></img> </div>
    <div> <img src={twitter}></img> </div>
    <div> <img src={linkedin}></img> </div>
    <div> <img src={discord}></img> </div>
    </div>

</div>  
{/* sign in section */}
<div className='flex justify-center m-auto  items-center border-black h-screen'>
<div>
   <div>
    <h1 className='text-[#000] font-bold py-3 text-4xl font-mont'>Sign In</h1>
    <h4 className='text-[#000] font-lato '>sign in to your account</h4>
    <div className='flex py-3 space-x-5'>
    <button className='shadow-md py-1 px-7 flex font-thin items-center text-[#9999] rounded-lg'> <img src={Google} className='mr-2' /> Sign in with Google</button>
    <button className='shadow-md py-1 px-7 flex items-center font-thin text-[#9999] rounded-lg'> <FaApple className='mr-2' />  in with Apple</button>
</div>

   </div>
   <div class="w-[400px] py-10 mx-auto mt-8 p-5 bg-white rounded-lg shadow-lg">
  
    <form>
        <div class="mb-4 ">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-none  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#EAEAEA]" placeholder='yours@gmail.com' required/>
        </div>
        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-none border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#EAEAEA]"  required/>
        </div>
        <div class="flex justify-between items-center mb-4">
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          
        </div>
        <div className=''>
      <Link to='/upload'>
        <button type="submit" className="inline-block bg-[#605BFF] text-white px-4 py-2 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Sign In
        </button>
      </Link>
    </div>
    </form>
</div>

   <div className='flex items-center justify-center mt-5'>
<p>Don't have an account? <a className=' text-blue-600' href=''>Register here</a> </p>
   </div>
  </div>
  </div>
    </div>

    {/*nav for the  mobile design */}
    <div className='h-[80px] w-[full] bg-[#605BFF] sm:hidden md:hidden lg:hidden'>
      <div className='flex'>
      <img className='m-5' src={logo} style={{ width: '35px' }} alt='mobile icon'/>
      <h3 className='flex items-center  font-mont text-white  text-2xl'>Base</h3>
      </div>
      {/* sign in section for mobile devices */}
      <div>
       <div className='px-7'>
       <div  className='mt-5'>
          <h1 className='text-[#000000] text-3xl font-mont font-semibold'>Sign In</h1>
          <p className='text-[#000] font-lato py-2' >Sign in to your account</p>
          <div className='flex pt-8 space-x-10'>
    <button className='flex shadow-md rounded-lg  text-[#9999] py-1 justify-center items-center px-3' > 
      <img src={Google} className='' /> 
     <span className='ml-1 text-[12px]'>Sign in with Google  </span>
      </button>
      <button className='flex shadow-md rounded-lg text-[#9999]  py-1 justify-center items-center px-5' > 
      <FaApple />
     <span className='ml-1 text-[12px]'> in with Apple </span>
      </button>
</div>
<div class="w-[300px] py-10 mx-auto mt-8 p-5 bg-white rounded-lg shadow-lg">
  
  <form>
      <div class="mb-4 ">
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-none  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#EAEAEA]" placeholder='yours@gmail.com' required/>
      </div>
      <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-none border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#EAEAEA]"  required/>
      </div>
      <div class="flex justify-between items-center mb-4">
          <a href="#" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
        
      </div>
      <div className=''>
    <Link to='/upload'>
      <button type="submit" className="inline-block bg-[#605BFF] text-white px-4 py-2 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Sign In
      </button>
    </Link>
  </div>
  </form>
</div>
<div className='flex items-center justify-center mt-5'>
<p className='text-[#9999] font-lato'>Don't have an account? </p> 
   </div>
   <div className='flex items-center justify-center mt-5'>
   <p><a className=' text-[#346BD4]' href=''>Register here</a> </p>
   </div>
        </div>
        {/* social media icons for mobile devices */}
      <div className='mx-auto mt-20 pb-10'>
      <div className='flex justify-center  space-x-5  '>
    <div> <img src={githubmobile}></img> </div>
    <div> <img src={twittermobile}></img> </div>
    <div> <img src={linkedinmobile}></img> </div>
    <div> <img src={discordmobile}></img> </div>

    </div>
      </div>
       </div>
    
      </div>
    </div>
    </>
  )
}

export default SignIn
