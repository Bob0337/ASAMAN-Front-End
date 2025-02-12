import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const TableSkelton = (props: Props) => {
  return (
    <div className='flex flex-col gap-2'>
        {Array.from({length:10}).map(()=>(
            <Skeleton className='w-full h-10 rounded' />
        ))}
    </div>
  )
}

export default TableSkelton