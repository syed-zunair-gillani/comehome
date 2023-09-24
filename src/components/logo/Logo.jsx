import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
   const router =  useRouter()
     console.log("🚀 ~ file: index.jsx:13 ~ Mover ~ router:", router)
  return (
    <Box component="figure" className={`flex flex-col justify-center items-center  p-3 rounded-xl ${router.asPath === '/mover' ? '' : 'md:bg-black/80'}`}>
          <Link href="/"><Image src="/images/logo2.png" alt="comehome logo" width={170} height={82} /></Link>
          <Typography component='p' className={`flex justify-center !mt-1 rounded-md text-white px-5 !bg-[#F18753] italic`}>Move Confidently</Typography>
    </Box>
  )
}

export default Logo