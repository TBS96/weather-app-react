import { Facebook, Github, Linkedin, Mail, User } from 'lucide-react'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { MdWhatsapp } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='w-full bg-slate-950/10 backdrop-blur-sm py-4 mt-10 fixed bottom-0'>
            <div className='max-w-[2580px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>

                <p className='text-sm'>
                    &copy; {new Date().getFullYear()} <a href='https://github.com/TBS96/portfolio' target='_blank' className='hover:underline hover:underline-offset-8 transition-all'>Prantik Ghosh</a> | All Rights Reserved.
                </p>

                <div className='flex space-x-4 mt-4 md:mt-0'>
                    <a href='https://prantikghosh.vercel.app' className='btn btn-circle btn-sm btn-primary' target='_blank' title='Portfolio'>
                        <User size={22} />
                    </a>
                    <a href='https://github.com/tbs96' className='btn btn-circle btn-sm btn-primary' target='_blank' title='GitHub'>
                        <Github size={22} />
                    </a>
                    <a href='https://www.linkedin.com/in/prantikghosh96/' className='btn btn-circle btn-sm btn-primary' target='_blank' title='LinkedIn'>
                        <Linkedin size={22} />
                    </a>
                    <a href='mailto:prantik.fdev@gmail.com' className='btn btn-circle btn-sm btn-primary' target='_blank' title='prantik.g1996@gmail.com'>
                        <Mail size={22} />
                    </a>
                    <a href='https://x.com/9theblacksheep6' className='btn btn-circle btn-sm btn-primary' target='_blank' title='X'>
                        <BsTwitterX size={22} />
                    </a>
                    <a href='https://www.facebook.com/theblacksheep96/' className='btn btn-circle btn-sm btn-primary' target='_blank' title='Facebook'>
                        <Facebook size={22} />
                    </a>
                    <a href='https://wa.me/918910325359' className='btn btn-circle btn-sm btn-primary' target='_blank' title='WhatsApp'>
                        <MdWhatsapp size={22} />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer