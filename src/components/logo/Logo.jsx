import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Box component="figure" className='flex flex-col justify-center items-center'>
          <Image src="/images/logo_t.png" alt="comehome logo" width={180} height={82} />
          <Typography component='p' className='flex justify-center !-mt-2 uppercase !text-sm rounded-md text-white px-1 !bg-orange-500'>Move Confidently</Typography>
    </Box>
  )
}

export default Logo