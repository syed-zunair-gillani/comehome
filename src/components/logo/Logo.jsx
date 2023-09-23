import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Box component="figure" className='flex flex-col justify-center items-center md:bg-black/80 p-3 rounded-xl'>
          <Image src="/images/logo2.png" alt="comehome logo" width={170} height={82} />
          <Typography component='p' className={`flex justify-center !mt-1 rounded-md text-white px-5 !bg-[#F18753] italic`}>Move Confidently</Typography>
    </Box>
  )
}

export default Logo