import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between items-center py-7 px-14 bg-emerald-400'>
        <h3>sher</h3>
        <div className='flex gap-5'>
            <Link href="/">Home</Link>
            <Link href="/product">Product</Link>
            <Link href="/about">About</Link>
        </div>
    </div>
  )
}

export default Nav