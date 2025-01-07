"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const WhatsAppbtn = () => {

    const [check, setCheck] = useState(false)

    useEffect(() => {
        const userAgent = window.navigator.userAgent
     setCheck(userAgent.includes('Windows'))
    }, [])
  return (
    <Link href={!check ? 'https://api.whatsapp.com/send?phone=7307888669': 'https://web.whatsapp.com/send?phone=7307888669'} target='_blank' className='fixed bottom-8 right-8 hover:scale-125 duration-500'>
      <img className='h-14 rounded-full' src="/icons/whatsapp-icon.svg" alt="whatsapp" />
    </Link>
  )
}

export default WhatsAppbtn
