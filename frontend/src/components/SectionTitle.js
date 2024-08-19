import React from 'react'

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-2xl text-fifth font-semibold'>{title}</h1>
        <div className='w-40 h-[1px] bg-fifth'></div>
    </div>
  )
}

export default SectionTitle