import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Box component="section" className='grid md:grid-cols-2 h-[calc(100vh-179px)] md:!h-screen'>
        <Box component="div" className='flex flex-col order-1 justify-center items-center px-10'>
          <Box component="div" className='max-w-[500px]'>
            <Typography variant="h6" className={`!text-4xl md:!text-6xl !text-center md:!text-left !font-bold text-orange-600 font-moranga`}>For Customers</Typography>
            <Typography component="p" className='!text-2xl md:!text-3xl !text-center md:!text-left !mt-3'>Easy photo-based inventory of your belongings for an instant estimate and a quote you can trust</Typography>
          </Box>
        </Box>
        <Box component="div" className='relative'>
          <img src="/images/1.jpg" alt="image" className='h-full w-full object-cover object-center' />
          <Box component="div" className='absolute inset-0 bg-black/20' />
        </Box>
      </Box>

      <Box component="section" className='flex flex-col-reverse md:flex-row h-screen'>
        <Box component="div" className='flex flex-col justify-center items-center px-10 h-1/2 md:h-full md:w-1/2'>
          <Box component="div" className='max-w-[500px]'>
            <Typography variant="h6" className={`!text-4xl md:!text-6xl !text-center md:!text-left !font-bold text-orange-600 font-moranga`}>For Moving Companies</Typography>
            <Typography component="p" className='!text-2xl md:!text-3xl !text-center md:!text-left !mt-3'>Better customer <br/>experience = higher <br/>conversions to bookings</Typography>
          </Box>
        </Box>
        <Box component="div" className='relative h-1/2 md:h-full md:w-1/2'>
          <img src="/images/2.jpg" alt="image" className='h-full w-full object-cover object-center' />
          <Box component="div" className='absolute inset-0 bg-black/20' />
        </Box>
      </Box>
    </>
  )
}
