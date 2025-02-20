import CommingSoonPage from '@/components/global/layout/CommingSoonPage'
import FilterSidebarLayout from '@/components/global/layout/sidebar/FilterSidebarLayout'
import React from 'react'

type Props = {}

const ActivitiesPage = (props: Props) => {
  return (
    <FilterSidebarLayout
      content={<div>This is my activity</div>}
    >

    <CommingSoonPage />
    </FilterSidebarLayout>
  )
}

export default ActivitiesPage