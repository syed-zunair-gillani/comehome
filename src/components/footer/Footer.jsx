import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
     return (
          <Box component="footer" className='mt-40 mb-4 container mx-auto px-2'>
               <Box component="nav" className='text-dark-green flex items-center gap-1 text-sm'>
                    <Link href="#">Privacy</Link>
               </Box>
          </Box>
     )
}

export default Footer