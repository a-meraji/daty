
import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './loading'
import Notife from './notife'

function ProvidedRoot({children}) {
  const{loadingArr, notife} = useSelector(store=>store.layout)


  return (
    <>
    {children}
    {loadingArr.length>0&&<Loading/>}
    <Notife/>
    </>
  )
}

export default ProvidedRoot