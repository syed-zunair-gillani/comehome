import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Customer = () => {
  return (
    <>
     <Box component="main" className='bg-primary py-12 mt-2'>
      <Box component="section" className="container mx-auto px-2 grid md:grid-cols-2 gap-5">
          <Box component="div" className='bg-secondary rounded-[15px] p-4 main-card-shadow min-h-[371px]'>
          <Box component="div" className='rounded-lg p-5 bg-[#DDF1FF] text-[#054DA7]'>
               <Typography component="p" >It’s an old mover scam. They leave things off your inventory, give you a lowball bid, and when the truck arrives on the big day suddenly the price has doubled. The Better Business Bureau is flooded with complaints and even the government is taking notice.</Typography>
               <Typography component="p" className='!mt-4'>Moving is already stressful enough - you deserve to know your quote isn't a bait & switch. With oru AI technology you can create a photo survey you trust - so you can move confidently and focus on creating a beautiful space for your family.               </Typography>
               <Typography component="p" className='!mt-4'>If you don’t see our icon on your mover’s website...book somewhere else! <span><Image src="/images/icon.svg" alt="icon" width={20} height={20} className='inline-block'/></span></Typography>
          </Box>
          </Box>
          <Box component="div" className='mt-8 md:mt-0'>
            <Image src="/images/panorama.png" alt="image" width={600} height={430} className='w-full'/>
          </Box>
      </Box>
    </Box>
    </>
  )
}

export default Customer