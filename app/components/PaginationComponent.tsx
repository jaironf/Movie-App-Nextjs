'use client'

import { Pagination } from '@nextui-org/react'
import { useRouter, useSearchParams } from 'next/navigation'


const PaginationComponent = () => {
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("page") || 1;
    const router = useRouter()
    const handleOnChange = (page: number) => {
      router.replace(`?page=${page}`)  
    }

  return (
    <Pagination showControls color='danger' total={10} initialPage={1} onChange={handleOnChange}/>
  )
}

export default PaginationComponent