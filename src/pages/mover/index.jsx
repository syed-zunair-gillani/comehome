import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Mover = () => {
     const [open, setOpen] = useState(null)
     const handleOpenContent = (e) => {
          if (open === e) {
               return setOpen(null)
          }
          setOpen(e)
     }

     return (
          <>
               <Box component="section" className='md:!h-screen'>
                    <Box component="div" className='flex flex-1 flex-col order-1 pt-5 md:pt-32 h-full'>
                         <Box component="div" className='rounded-lg flex flex-col justify-center items-start text-[#054DA7] px-4 md:px-20 mt-10 w-full'>
                              {<Typography variant="h6" onClick={() => handleOpenContent(1)} className={`text-2xl bg-gray-50 w-full !text-[#F18753] md:!text-3xl cursor-pointer !text-left !font-bold   font-moranga p-4 !leading-[1.8rem]`}> {open === 1 ? <RemoveIcon className='!text-4xl' /> : <AddIcon className='!text-4xl' />}  Understand your customers</Typography>}

                              {
                                   open === 1 && <Box component="div" className={`mb-4 mt-2 sc ${open ? 'block' : 'hidden'}`} >
                                        <Typography component="p" className='!mt-2' >It's 10pm. You just got the kids down and as you open <b>Netflix,</b> you remember that you didn't choose a mover yet.</Typography>
                                        <Typography component="p" className='!mt-2' >So you google <b>"movers in my city"</b> and open the first 5 tabs. The first one looks fine, so you click "Get a quote." Uhg, 10 fields to fill out. Where from, where to, email, phone, # of rooms. You complete them and click "Submit quote" - but you don't get a quote. It says "We'll call you." You close the tab.</Typography>
                                        <Typography component="p" className='!mt-2' >Next moving company's website says "Get an instant estimate with your phone." You click the button and it explains you can get an instant estimate customized to YOUR stuff - just by walking around your house with the camera on. 5 minutes later you have an estimate range that's about what you expected and you're told to expect a precise quote tomorrow morning. Ok great, you close the tab.</Typography>
                                        <Typography component="p" className='!mt-2' > Next <b>moving</b> company's website wants you to fill out 10 fields again - forget that, time to watch Netflix. Close the tabs and relax. </Typography>
                                        <Typography component="p" className='!mt-2' >The next morning, you get <b>two experiences.</b>  Moving company #2 calls you personally and leaves a <b>voicemail</b> saying "Hi, I looked over your survey and made a couple improvements to the inventory. We're <b>specialists</b> at handling pianos like yours, so we're glad you came to us. I'm sending over a precise quote right now - let's get you taken care of."  </Typography>
                                        <Typography component="p" className='!mt-2' >Moving company #1 robocalls you 10 times a day. When you finally pick up the phone, they want to set up time during business hours next week to walk through your house. </Typography>
                                        <Typography component="p" className='!mt-2' >Who are you buying from?</Typography>
                                   </Box>
                              }
                              <div className='pt-[1px] bg-gray-200 w-full'/>
                              {<Typography variant="h6" onClick={() => handleOpenContent(2)} className={`text-2xl bg-gray-50 w-full  !text-[#F18753] md:!text-3xl cursor-pointer !text-left !font-bold  font-moranga !mb-2 p-4 !leading-[1.8rem]`}> {open === 2 ? <RemoveIcon className='!text-4xl' /> : <AddIcon className='!text-4xl ' />} Drive Revenue</Typography>}
                              {
                                   open === 2 && <Box component="div" className={`overflow-auto sc `}>
                                        <Typography component="p" className='!mt-2' >A bounce is when a <b>customer visits</b> your webpage and then leaves. It’s a lost lead, a lost booking, a loss to your competitor. </Typography>
                                        <Typography component="p" className='!mt-2' >And despite all the years you spent on <b>SEO and money</b> you spent on ads, customers bounce off your website - as high as 90% of the customers on your website never contact you.</Typography>
                                        <Typography component="p" className='!mt-2' >And it's no <b>surprise.</b> Filling out 10 fields and then getting robocalled 10 times a day is a <b>lousy experience.</b> It sucks for customers and you know it, but what other choice do you have?  </Typography>
                                        <Typography component="p" className='!mt-2' >First impressions are everything, and the estimate and quoting process is their first experience with your team. </Typography>
                                        <Typography component="p" className='!mt-2' >Using <b>ComeHome.ai,</b> your website will siphone business from your competitors and leave them in the dust.</Typography>
                                        <Typography component="p" className='!mt-2' >Contact us to learn how to increase your <b>online bookings 25%,</b> improve customer <b>trust and satisfaction,</b> and improve sales efficiency. </Typography>
                                   </Box>
                              }

                         </Box>
                    </Box>
                    
               </Box>

          </>
     )
}

export default Mover