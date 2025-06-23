import { Facebook, Github, Linkedin, Mail, User } from 'lucide-react'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { MdWhatsapp } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='w-full bg-slate-950/50 backdrop-blur-3xl skeleton py-4 mt-10 fixed bottom-0'>
            <div className='max-w-[2580px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>

                <div className='text-sm'>
                    &copy; {new Date().getFullYear()} {''}
                    <div className='tooltip'>
                        <div className='tooltip-content'>
                            <div className='animate-bounce bg-gradient-to-r from-primary via-error to-info inline-block text-transparent bg-clip-text -rotate-10 text-2xl font-black'>Hello Viewer!</div>
                        </div>
                        <a href='https://prantikghosh.vercel.app' target='_blank' className='hover:underline hover:underline-offset-8 transition-all'>
                            Prantik Ghosh
                        </a>
                    </div> {''}
                    | All Rights Reserved.
                </div>

                <div className='flex space-x-4 mt-4 md:mt-0'>
                    <a href='https://prantikghosh.vercel.app' className='btn btn-circle btn-sm btn-primary tooltip sm:tooltip-left' target='_blank' data-tip='Portfolio'>
                        <User size={22} />
                    </a>
                    <a href='https://github.com/tbs96' className='btn btn-circle btn-sm btn-primary tooltip sm:tooltip-left' target='_blank' data-tip='GitHub'>
                        <Github size={22} />
                    </a>
                    <a href='https://www.linkedin.com/in/prantikghosh96/' className='btn btn-circle btn-sm btn-primary tooltip sm:tooltip-left' target='_blank' data-tip='LinkedIn'>
                        <Linkedin size={22} />
                    </a>
                    <a href='mailto:prantik.fdev@gmail.com' className='btn btn-circle btn-sm btn-primary tooltip sm:tooltip-left' target='_blank' data-tip='prantik.g1996@gmail.com'>
                        <Mail size={22} />
                    </a>
                    <a href='https://x.com/9theblacksheep6' className='btn btn-circle btn-sm btn-primary tooltip sm:tooltip-left' target='_blank' data-tip='X'>
                        <BsTwitterX size={22} />
                    </a>
                    <a href='https://www.facebook.com/theblacksheep96/' className='btn btn-circle btn-sm btn-primary tooltip sm:tooltip-left' target='_blank' data-tip='Facebook'>
                        <Facebook size={22} />
                    </a>
                    <a href='https://wa.me/918910325359' className='btn btn-circle btn-sm btn-primary tooltip sm:tooltip-left' target='_blank' data-tip='WhatsApp'>
                        <MdWhatsapp size={22} />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer