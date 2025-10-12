import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-white/70 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-sm'>
        <div className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-800'>
                홍승관
            </h1>

            <div className='flex items-center space-x-6 text-gray-700 font-medium'>
                <a
                    href='#about'
                    className='hover:text-black transition-colors duration-200'
                >
                    소개
                </a>
                <a
                    href='#projects'
                    className='hover:text-black transition-colors duration-200'
                >
                    프로젝트
                </a>
                <a
                    href='https://github.com/hong-seung-kwan'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border border-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-100 transition'
                >
                    Github
                </a>
            </div>

        </div>
    </nav>
  )
}

export default Navbar