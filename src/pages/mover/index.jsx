import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';

const Mover = () => {
     return (
          <>
               <Box component="main" className='bg-primary py-12 mt-2'>
                    <Box component="section" className="container mx-auto px-2 grid md:grid-cols-2 gap-10">
                         <Box component="div">
                              <Image src="/images/mover1.png" alt="image" width={600} height={430} className='w-full h-[350px] object-cover' />
                              <Box component="div" className='mt-2'><FavoriteIcon className='text-gray-500' /> Understand your customers</Box>
                              <Box component="div" className='mt-4'>
                                   <Typography component="p" >It's 10pm. You just got the kids down and as you open Netflix, you remember that you didn't choose a mover yet. <br /><br />
                                        So you google "movers in my city" and open the first 5 tabs. The first one looks fine, so you click "Get a quote." Uhg, 10 fields to fill out. Where from, where to, email, phone, # of rooms. You complete them and click "Submit quote" - but you don't get a quote. It says "We'll call you." You close the tab.  <br /><br />
                                        Next moving company's website says "Get an instant estimate with your phone." You click the button and it explains you can get an instant estimate customized to YOUR stuff - just by walking around your house with the camera on. 5 minutes later you have an estimate range that's about what you expected and you're told to expect a precise quote tomorrow morning. Ok great, you close the tab. <br /><br />
                                        Next moving company's website wants you to fill out 10 fields again - forget that, time to watch Netflix. Close the tabs and relax. <br /><br />
                                        The next morning, you get two experiences.  Moving company #2 calls you personally and leaves a voicemail saying "Hi, I looked over your survey and made a couple improvements to the inventory. We're specialists at handling pianos like yours, so we're glad you came to us. I'm sending over a precise quote right now - let's get you taken care of."  <br /><br />
                                        Moving company #1 robocalls you 10 times a day. When you finally pick up the phone, they want to set up time during business hours next week to walk through your house. <br /><br />
                                        Who are you buying from?</Typography>
                              </Box>
                         </Box>
                         <Box component="div">
                              <Image src="/images/mover2.png" alt="image" width={600} height={430} className='w-full h-[350px] object-cover' />
                              <Box component="div" className='mt-2'><GroupIcon className='text-gray-500' /> Drive Revenue</Box>
                              <Box component="div" className='mt-4'>
                                   <Typography component="p" >A bounce is when a customer visits your webpage and then leaves. It’s a lost lead, a lost booking, a loss to your competitor. <br /><br />
                                        And despite all the years you spent on SEO and money you spent on ads, customers bounce off your website - as high as 90% of the customers on your website never contact you.<br /><br />
                                        And it's no surprise. Filling out 10 fields and then getting robocalled 10 times a day is a lousy experience. It sucks for customers and you know it, but what other choice do you have?  <br /><br />
                                        First impressions are everything, and the estimate and quoting process is their first experience with your team. <br /><br />
                                        Using ComeHome.ai, your website will siphone business from your competitors and leave them in the dust.<br /><br />
                                        Contact us to learn how to increase your online bookings 25%, improve customer trust and satisfaction, and improve sales efficiency. </Typography>
                              </Box>
                         </Box>
                    </Box>
               </Box>
          </>
     )
}

export default Mover