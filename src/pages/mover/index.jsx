import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
     weight: ['300', '400', '600','700'],
     subsets: ['latin'],
   })

const Mover = () => {
     const [open, setOpen] = useState(null)
     const handleOpenContent = (e) => {
          if (open === e) {
               return setOpen(null)
          }
          setOpen(e)
     }

     return (
          <section className={`md:pt-40 p-4 ${poppins.className}`}>

               <div class="max-w-[1000px] p-6 md:p-10 mx-auto md:px-16 min-h-sceen _bg rounded-md">
                    <div class="grid divide-y divide-neutral-200 max-w-[1000px] mx-auto ">
                         <div class="py-5">
                              <details class="group">
                                   <summary class="flex justify-between py-3 items-center font-medium cursor-pointer list-none">
                                        <span className={`${poppins.className} font-bold text-lg`}> Understand your customers </span>
                                        <span class="transition group-open:rotate-180">
                                             <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                             </svg>
                                        </span>
                                   </summary>
                                   <div class="text-neutral-600 pt-2 text-lg !font-light duration-300 group-open:animate-fadeIn">
                                        <p className='!mt-2' >It's 10pm. You just got the kids down and as you open <b>Netflix,</b> you remember that you didn't choose a mover yet.</p>
                                        <p className='!mt-2 ' >So you google <b>"movers in my city"</b> and open the first 5 tabs. The first one looks fine, so you click "Get a quote." Uhg, 10 fields to fill out. Where from, where to, email, phone, # of rooms. You complete them and click "Submit quote" - but you don't get a quote. It says "We'll call you." You close the tab.</p>
                                        <p className='!mt-2 ' >Next moving company's website says "Get an instant estimate with your phone." You click the button and it explains you can get an instant estimate customized to YOUR stuff - just by walking around your house with the camera on. 5 minutes later you have an estimate range that's about what you expected and you're told to expect a precise quote tomorrow morning. Ok great, you close the tab.</p>
                                        <p className='!mt-2 ' > Next <b>moving</b> company's website wants you to fill out 10 fields again - forget that, time to watch Netflix. Close the tabs and relax. </p>
                                        <p className='!mt-2 ' >The next morning, you get <b>two experiences.</b>  Moving company #2 calls you personally and leaves a <b>voicemail</b> saying "Hi, I looked over your survey and made a couple improvements to the inventory. We're <b>specialists</b> at handling pianos like yours, so we're glad you came to us. I'm sending over a precise quote right now - let's get you taken care of."  </p>
                                        <p className='!mt-2 ' >Moving company #1 robocalls you 10 times a day. When you finally pick up the phone, they want to set up time during business hours next week to walk through your house. </p>
                                        <p className='!mt-2 ' >Who are you buying from?</p>
                                   </div>
                              </details>
                         </div>
                         <div class="py-5">
                              <details class="group">
                                   <summary class="flex justify-between py-3 items-center font-medium cursor-pointer list-none">
                                        <span className={`${poppins.className} font-bold text-lg`}> Drive Revenue</span>
                                        <span class="transition group-open:rotate-180">
                                             <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                             </svg>
                                        </span>
                                   </summary>
                                   <div class="text-neutral-600 pt-2 text-lg !font-light duration-300 group-open:animate-fadeIn">
                                        <p className='!mt-2' >A bounce is when a <b>customer visits</b> your webpage and then leaves. It’s a lost lead, a lost booking, a loss to your competitor. </p>
                                        <p className='!mt-2' >And despite all the years you spent on <b>SEO and money</b> you spent on ads, customers bounce off your website - as high as 90% of the customers on your website never contact you.</p>
                                        <p className='!mt-2' >And it's no <b>surprise.</b> Filling out 10 fields and then getting robocalled 10 times a day is a <b>lousy experience.</b> It sucks for customers and you know it, but what other choice do you have?  </p>
                                        <p className='!mt-2' >First impressions are everything, and the estimate and quoting process is their first experience with your team. </p>
                                        <p className='!mt-2' >Using <b>ComeHome.ai,</b> your website will siphone business from your competitors and leave them in the dust.</p>
                                        <p className='!mt-2' >Contact us to learn how to increase your <b>online bookings 25%,</b> improve customer <b>trust and satisfaction,</b> and improve sales efficiency. </p>
                                   </div>
                              </details>
                         </div>

                    </div>
               </div>


          </section>
     )
}

export default Mover