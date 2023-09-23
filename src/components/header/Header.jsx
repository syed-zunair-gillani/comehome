import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Header = () => {
     return (
          <>
               <Box component="header" className='container mx-auto flex justify-end my-3 px-2'>
                    <Box component="nav" className='text-dark-green flex items-center gap-1 text-sm'>
                         <Link href="#">Help</Link>
                         <span>|</span>
                         <Link href="#">Create an Account</Link>
                         <span>|</span>
                         <Link href="#">Sign In</Link>
                    </Box>
               </Box>
          </>
     )
}

export default Header