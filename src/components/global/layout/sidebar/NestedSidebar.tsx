import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'
import React from 'react'

type Props = {}

const NestedSidebar = (props: Props) => {
  return (
    <Sidebar className='relative h-full' wrapperClassName='h-auto' collapsible='offcanvas'>
        <SidebarContent className='!top-0 !left-0'>
            Hellow World
        </SidebarContent>
    </Sidebar>
  )
}

export default NestedSidebar