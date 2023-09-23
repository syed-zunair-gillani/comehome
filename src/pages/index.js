import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
   <>
    <Box component="main" className='bg-primary py-12 mt-2'>
      <Box component="section" className="container mx-auto px-2 grid md:grid-cols-2">
          <Box component="div" className='flex flex-col gap-8 md:gap-10'>
              <Box component="div" className='main-card main-card-shadow'>
                <Typography component="p" className='!text-sm'>For Customers</Typography>
                <Box component="div" className='rounded-lg p-3 bg-white'>Easy photo-based inventory of your belongings for an instant estimate and a quote you can trust</Box>
              </Box>
              <Box component="div" className='main-card main-card-shadow'>
                <Typography component="p" className='!text-sm'>For Moving Companies</Typography>
                <Box component="div" className='rounded-lg p-3 bg-white'>Better customer<br/> experience = higher <br/>conversions to bookings</Box>
              </Box>
          </Box>
          <Box component="div" className='mt-8 md:mt-0'>
            <Image src="/images/truck_driving_mountains.png" alt="image" width={600} height={430} className='w-full'/>
          </Box>
      </Box>
    </Box>
    
   </>
  )
}
