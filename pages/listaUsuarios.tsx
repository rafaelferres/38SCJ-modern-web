import React from 'react'
import Header from '../components/Header'
import Router from 'next/router'
import ListaUsuario from '../components/ListaUsuario'

export default function Home(): React.ReactElement {
  React.useEffect(() => {
    const userInfo = localStorage.getItem('USER_INFO')
    if (!userInfo) {
      Router.push('/')
    }
  })

  return (
    <>
      <Header />
      <div className="container mx-auto mt-6">
        <div className="bg-gray-100 rounded p-6">
          <ListaUsuario />
        </div>
      </div>
    </>
  )
}
