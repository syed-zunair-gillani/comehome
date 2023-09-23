import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Box component="section" className='grid md:grid-cols-2 h-[calc(100vh-179px)] md:!h-screen'>
        <Box component="div" className='flex flex-col order-1 justify-center items-center px-10 py-20 md:py-0'>
          <Box component="div" className='max-w-[500px]'>
            <Typography variant="h6" className={`text-2xl md:!text-4xl !text-center md:!text-left !font-bold text-[#F18753] font-moranga !leading-[3.2rem]`}> <Box component="span" className="bg-gradient-to-r to-[#F18753] via-[#F18753] from-[#EC2679] px-3 text-white">For</Box> Customers</Typography>
            <Typography component="p" className='md:!text-2xl !text-center md:!text-left !mt-3'>Easy photo-based inventory of your belongings for an instant estimate and a quote you can trust</Typography>
            <Typography variant="h6" className={`text-2xl md:!text-4xl !mt-4 !text-center md:!text-left !font-bold text-[#F18753] font-moranga !leading-[3.2rem]`}> <Box component="span" className="bg-gradient-to-r to-[#F18753] via-[#F18753] from-[#EC2679] px-3 text-white">For Moving</Box> Companies</Typography>
            <Typography component="p" className='md:!text-2xl !text-center md:!text-left !mt-3'>Better customer <br/>experience = higher <br/>conversions to bookings</Typography>
          </Box>
        </Box>
        <Box component="div" className='relative group overflow-hidden'>
          <img src="/images/2.jpg" alt="image" className='h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105' />
          <Box component="div" className='absolute inset-0 bg-black/20' />
        </Box>
      </Box>

      
    </>
  )
}
