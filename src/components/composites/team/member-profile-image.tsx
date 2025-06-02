import Image from 'next/image'
import React from 'react'

const MemberProfileImage = () => {
  return (
    <div className='w-full md:max-w-[35%] 2xl:max-w-1/'>
        <Image src="/founder-image.webp" alt='member-image' width={320} height={384} className='w-full h-96 object-cover' />
        <div className='w-full flex flex-col items-center justify-center p-5 bg-linear-to-r from-[#D5AA6D] to-[#9B6F45] text-white text-center'>
            <h3 className='text-xl font-medium'>Haekal Abdalla Jouf</h3>
            <p className='text-sm'>Civil Lawyer</p>
        </div>
    </div>
  )
}

export default MemberProfileImage