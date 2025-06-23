import React from 'react'

const Header = () => {
    return (
        <header className='sticky top-0 z-50 bg-gradient-to-r from-indigo-500/55 via-pink-500/55 to-orange-400/55 shadow-lg mb-5 glass'>
            <a href='/' className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3'>
                <img
                    src='/pwa-64x64.png'
                    alt='SunSyncs Logo'
                    className='size-10 rounded-full'
                />
                <h1 className='text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-400 bg-clip-text text-transparent'>
                    Sun Syncs
                </h1>
            </a>
        </header>
    )
}

export default Header