import React from 'react';
import { AiOutlineHtml5, AiFillHtml5 } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa6';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa6';
import Image1 from '../Assests/markus-spiske-1LLh8k2_YFk-unsplash.jpg'; // Adjust the path if needed

const Projects = () => {
  return (
    <div id='project' className='w-full py-[5rem] px-4 bg-white'>
      <h1 className='text-4xl font-bold text-center mb-16 '>PROJECTS</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
       
        <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300' >
          <div className='w-20 mx-auto bg-gray-200'>
            <AiFillHtml5 color='#00df9a' size={60}/>
          </div>
          <img src='./Dronez.png' alt='Project' className='w-full h-26 mb-8' />
          <p className='text-center text-4xl font-normal '>Dronez</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-blue-300 mx-8 mt-8 '>Exploring Dronez</p>
            <p className='py-2 border-b border-blue-300 mx-8 '>HTML & CSS</p>
          </div>
          <a className='my-6 mx-auto px-6' href="https://terrence-j.github.io/Assignment-2/">
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Project</button>
          </a>
        </div>

        <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 '>
          <div className='w-20 mx-auto bg-gray-200'>
            <FaReact color='#00df9a' size={60}/>
          </div>
          <img src='/crud.png' alt='Project' className='w-full h-26 mb-8' />
          <p className='text-center text-4xl font-normal font-mono'>React Crud</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-blue-300 mx-8 mt-8'>Member management</p>
            <p className='py-2 border-b border-blue-300 mx-8'>React</p>
          </div>
          <a className='my-6 mx-auto px-6 ' href="https://github.com/Terrence-J/REACT-APP">
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Project</button>
          </a>
        </div>

        <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300 '>
          <div className='w-20 mx-auto bg-gray-200'>
            <FaReact color='#00df9a' size={60}/>
          </div>
          <img src='./employee.png' alt='Project' className='w-full h-26 mb-8' />
          <p className='text-center text-4xl font-normal'>Authorization</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-blue-300 mx-8 mt-8'>React</p>
            <p className='py-2 border-b border-blue-300 mx-8'>Local Storage</p>
          </div>
          <a className='my-6 mx-auto px-6 ' href="https://github.com/tshimologong-react-project/employee-manager">
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Project</button>
          </a>
        </div>

        <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300  '>
          <div className='w-20 mx-auto bg-gray-200'>
            <TbBrandJavascript color='#00df9a' size={60}/>
          </div>
          <img src='./questions.png' alt='Project' className='w-full h-26 mb-8' />
          <p className='text-center text-4xl font-normal'>Questions App</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-blue-300 mx-8 mt-8'>React</p>
            <p className='py-2 border-b border-blue-300 mx-8'>Local storage</p>
          </div>
          <a className='my-6 mx-auto px-6 ' href="https://delightful-sunflower-b7ce1c.netlify.app/">
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Project</button>
          </a>
        </div>

        <div className='w-full shadow-xl bg-gray-200 flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
          <div className='w-20 mx-auto bg-gray-200'>
            <FaJava color='#00df9a' size={60}/>
          </div>
          <img src='./school.png' alt='Project' className='w-full h-26 mb-8' />
          <p className='text-center text-4xl font-normal'>School App</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-blue-300 mx-8 mt-8'>React Frontend</p>
            <p className='py-2 border-b border-blue-300 mx-8'>Spring boot backend</p>
          </div>
          <a className='my-6 mx-auto px-6 ' href="https://github.com/tshimologong-react-project/school-website-template">
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>View Project</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
