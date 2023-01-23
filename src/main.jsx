import React from 'react'
import 'virtual:windi.css'
import OpenAI from '@c/OpenAI'
import Drawer from '@c/Drawer'
import { AdminProvider } from '@admin'
import ReactDOM from 'react-dom/client'
import { Configuration, OpenAIApi } from 'openai'

const { VITE_API_KEY } = import.meta.env

function App () {
  const configuration = new Configuration({
    apiKey: VITE_API_KEY
  })
  const openai = new OpenAIApi(configuration)

  return (
    <AdminProvider openai={openai}>
      <header>
        <nav className='bg-white border-gray-200 ppx-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
          <div className='container flex flex-wrap items-center justify-between mx-auto'>
            <span className='self-center text-xl font-semibold p-2 whitespace-nowrap dark:text-white'>Creator Dashboard</span>
            <button data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
            </button>
          </div>
        </nav>
      </header>
      <main className='p-8'>
        <Drawer />
        <OpenAI />
      </main>
    </AdminProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
