'use client'

import { Input } from '@nextui-org/react'
import { SearchIcon } from './icons/searchIcon'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce' 

const SearchMovie = () => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();


    const handleOnChange = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams)

        if (value) {
            params.set('query', value)
        } else {
            params.delete('query')
        }
        replace(`/?${params.toString()}`)
    }, 600)

  return (
    <Input
        classNames={{
          base: "max-w-full sm:w-[15rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
        onChange={ e => handleOnChange(e.target.value)}
      />
  )
}

export default SearchMovie