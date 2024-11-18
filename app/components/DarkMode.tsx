'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { SunIcon } from './icons/sunIcon'
import { MoonIcon } from './icons/moonIcon'

const DarkMode = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    const handleOnSwitch = ( isSelected: boolean, className: string ): ReactNode => {
        if ( isSelected ) {
            setTheme('light')
            return  <SunIcon className={className}/>
        } else {
            setTheme('dark')
            return <MoonIcon className={className} />
        }
    }

    if(!mounted) return null

  return (
    <Switch
    defaultSelected = { theme === 'light' ? true : false}
    size="md"
    color="primary"
    thumbIcon={({ isSelected, className }) => handleOnSwitch(isSelected, className)}
  >
  </Switch>
  )
}

export default DarkMode