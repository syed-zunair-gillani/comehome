import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Customer = () => {
  return (
    <>

      <Box component="section" className='grid md:grid-cols-2 h-[calc(100vh-179px)] md:!h-screen'>
        <Box component="div" className='flex flex-col order-1 justify-center items-center px-10 py-10 md:py-0'>
          <Box component="div" className='rounded-lg lg:px-20 flex flex-col justify-center  text-black h-full'>
            <Typography component="p" className='md:!text-lg'>It’s an old mover scam. They leave things off your inventory, give you a lowball bid, and when the truck arrives on the big day suddenly the price has doubled. The Better Business Bureau is flooded with complaints and even the government is taking notice.</Typography>
            <Typography component="p" className='!mt-4 md:!text-lg'>Moving is already stressful enough - you deserve to know your quote isn't a bait & switch. With oru AI technology you can create a photo survey you trust - so you can move confidently and focus on creating a beautiful space for your family.               </Typography>
            <Typography component="p" className='!mt-4 md:!text-lg'>If you don’t see our icon on your mover’s website...book somewhere else! <span><Image src="/images/icon.svg" alt="icon" width={20} height={20} className='inline-block' /></span></Typography>
          </Box>
        </Box>
        <Box component="div" className='relative group overflow-hidden'>
          <img src="/images/vr.jpeg" alt="image" className='h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105' />
          <Box component="div" className='absolute inset-0 bg-black/20' />
        </Box>
      </Box>
    </>
  )
}

export default Customer