import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Box component="figure" className='flex flex-col justify-center items-center mt-4'>
          <Image src="/images/logo.png" alt="comehome logo" width={357} height={182} />
          <Typography component='p' className='flex justify-center !-mt-5'>Move Confidently</Typography>
    </Box>
  )
}

export default Logo