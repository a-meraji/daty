'use client'
import ProvidedRoot from '@/components/providedRoot'
import store from '@/redux/configStore'
import React from 'react'
import { Provider} from 'react-redux'

function ContextProvider({children}) {

  return (
    <Provider store={store}>
        <ProvidedRoot>

        {children}

        </ProvidedRoot>

        </Provider>
  )
}

export default ContextProvider