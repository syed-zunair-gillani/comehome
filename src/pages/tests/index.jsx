import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Poppins } from 'next/font/google'
import {FaWindowMinimize, FaPlus} from 'react-icons/fa'

const poppins = Poppins({
     weight: ['300', '400', '600', '700', '800'],
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
          <>
          <section className={`md:pt-40 min-h-screen bg-gradient-to-t from-blue-50 to-transparent p-4 ${poppins.className}`}>
               <div class="max-w-[1000px] p-6 md:p-10 mx-auto md:px-16 min-h-sceen _bg rounded-md">
                    <div class="grid divide-y divide-neutral-200 max-w-[1000px] mx-auto ">
                         <div class={`py-5 overflow-hidden transition-all duration-300 ease-in-out ${open === 1 ? 'h-full' : 'h-[84px]'}`}>
                              <div class="group">
                                   <div onClick={() => handleOpenContent(1)} class="flex  py-3 gap-4 items-center font-medium cursor-pointer list-none">
                                        {open === 1 ? <FaWindowMinimize className='text-xl -mt-3 text-blue-500'/> : <FaPlus className='text-xl text-blue-500'/> }
                                        <span className={`${poppins.className} font-extrabold text-[22px]`}> Understand your customers </span>
                                   </div>
                                   <div class="text-[#333] pt-2 md:pl-9 !font-light duration-300 group-open:animate-fadeIn">
                                        <p className='!mt-2' >It's 10pm. You just got the kids down and as you open <b>Netflix,</b> you remember that you didn't choose a mover yet.</p>
                                        <p className='!mt-2 ' >So you google <b>"movers in my city"</b> and open the first 5 tabs. The first one looks fine, so you click "Get a quote." Uhg, 10 fields to fill out. Where from, where to, email, phone, # of rooms. You complete them and click "Submit quote" - but you don't get a quote. It says "We'll call you." You close the tab.</p>
                                        <p className='!mt-2 ' >Next moving company's website says "Get an instant estimate with your phone." You click the button and it explains you can get an instant estimate customized to YOUR stuff - just by walking around your house with the camera on. 5 minutes later you have an estimate range that's about what you expected and you're told to expect a precise quote tomorrow morning. Ok great, you close the tab.</p>
                                        <p className='!mt-2 ' > Next <b>moving</b> company's website wants you to fill out 10 fields again - forget that, time to watch Netflix. Close the tabs and relax. </p>
                                        <p className='!mt-2 ' >The next morning, you get <b>two experiences.</b>  Moving company #2 calls you personally and leaves a <b>voicemail</b> saying "Hi, I looked over your survey and made a couple improvements to the inventory. We're <b>specialists</b> at handling pianos like yours, so we're glad you came to us. I'm sending over a precise quote right now - let's get you taken care of."  </p>
                                        <p className='!mt-2 ' >Moving company #1 robocalls you 10 times a day. When you finally pick up the phone, they want to set up time during business hours next week to walk through your house. </p>
                                        <p className='!mt-2 ' >Who are you buying from?</p>
                                   </div>
                              </div>
                         </div>
                         <div class={`py-5 overflow-hidden transition-all duration-500 ease-in-out ${open === 2 ? 'h-full' : 'h-[84px]'}`}>
                              <div class="group">
                                   <div onClick={() => handleOpenContent(2)} class="flex py-3 items-center gap-4 font-medium cursor-pointer list-none">
                                   {open === 2 ? <FaWindowMinimize className='text-xl -mt-3 text-blue-500'/> : <FaPlus className='text-xl text-blue-500'/> }     
                                   <span className={`${poppins.className} font-extrabold text-[22px]`}> Drive Revenue</span>
                                   
                                   </div>
                                   <div class="text-[#333] pt-2 md:pl-9 !font-light duration-300">
                                        <p className='!mt-2' >A bounce is when a <b>customer visits</b> your webpage and then leaves. It’s a lost lead, a lost booking, a loss to your competitor. </p>
                                        <p className='!mt-2' >And despite all the years you spent on <b>SEO and money</b> you spent on ads, customers bounce off your website - as high as 90% of the customers on your website never contact you.</p>
                                        <p className='!mt-2' >And it's no <b>surprise.</b> Filling out 10 fields and then getting robocalled 10 times a day is a <b>lousy experience.</b> It sucks for customers and you know it, but what other choice do you have?  </p>
                                        <p className='!mt-2' >First impressions are everything, and the estimate and quoting process is their first experience with your team. </p>
                                        <p className='!mt-2' >Using <b>ComeHome.ai,</b> your website will siphone business from your competitors and leave them in the dust.</p>
                                        <p className='!mt-2' >Contact us to learn how to increase your <b>online bookings 25%,</b> improve customer <b>trust and satisfaction,</b> and improve sales efficiency. </p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <h4 className='text-center text-xl mt-5 max-w-[500px] mx-auto'>Be the first in your market to gain this competitive edge: create an account here</h4>
               </div>

          </section>

          </>
     )
}

export default Mover

