import React from 'react'
import Router from 'next/router'

export default function Header(): React.ReactElement {
  const logout = () => {
    localStorage.clear()
    Router.push('/')
  }

  return (
    <nav className="bg-blue-600 p-6">
      <div className="flex items-center justify-between flex-wrap w-full max-w-screen-xl relative mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
          <span className="font-semibold text-xl tracking-tight">Grupo 1 - 38SCJ</span>
        </div>
        <div className="w-full block flex-grow flex items-center lg:w-auto">
          <div className="text-sm flex-grow"></div>
          <div>
            <button
              onClick={logout}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
