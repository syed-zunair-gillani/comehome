import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Logo from '../logo/Logo'

const Header = () => {
     return (
          <>
               <Box component="header" className='md:right-10 top-3 flex flex-col md:flex-row justify-center md:justify-between w-full z-50 md:pl-12 md:absolute py-5 md:py-0'>
                    <Logo/>
                    <Box component="nav" className='text-orange-500 flex justify-center items-center gap-4 md:text-lg mt-4 md:mt-0'>
                         <Link href="#" className='hover:underline'>Help</Link>
                         <Link href="#" className='hover:underline'>Privacy</Link>
                         <Link href="#" className='hover:underline'>Create an Account</Link>
                         <Link href="#" className='hover:underline'>Sign In</Link>
                    </Box>
               </Box>
          </>
     )
}

export default Header