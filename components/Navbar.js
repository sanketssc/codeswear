import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start items-center justify-between '>
      <div className="logo mx-5">
        <Image src={"/logo.png"} alt="" width={200} height={40}/>
      </div>
      <div className="nav">
        <ul className='flex space-x-4 font-bold'>
          <Link href={"/"}><li>Tshirts</li></Link>
          <Link href={"/"}><li>Mugs</li></Link>
          <Link href={"/"}><li>Hoodies</li></Link>
          <Link href={"/"}><li>Stickers</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 top-0">
      <button>Cart</button>
      </div>
    </div>
  )
}

export default Navbar