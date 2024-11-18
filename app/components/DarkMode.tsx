import React from 'react'
import { Switch } from '@nextui-org/react'
import { SunIcon } from './icons/sunIcon'
import { MoonIcon } from './icons/moonIcon'

const DarkMode = () => {
  return (
    <Switch
    defaultSelected
    size="md"
    color="primary"
    thumbIcon={({ isSelected, className }) =>
      isSelected ? (
        <SunIcon className={className}/>
      ) : (
        <MoonIcon className={className} />
      )
    }
  >
  </Switch>
  )
}

export default DarkMode