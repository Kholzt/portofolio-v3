import { Link } from '@inertiajs/react'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-4 flex justify-center relative z-10'>
            <ul className='flex gap-6'>
                <li><Link className='text-sm text-slate-300 cursor-pointer' href='/'>Home</Link></li>
                <li><Link className='text-sm text-slate-300 cursor-pointer' href='/article'>Article</Link></li>
                <li><Link className='text-sm text-slate-300 cursor-pointer' href='/product'>Product</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
