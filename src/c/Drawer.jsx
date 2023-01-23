import { useState } from 'react'
import { useAdmin } from '@admin'

export default function Drawer () {
  const [show, setShow] = useState(false)
  const { setCount, count, setSize } = useAdmin()
  return (
    <div id='drawer-swipe' className='fixed z-40 w-full overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 translate-y-full ' tabIndex='-1' aria-labelledby='drawer-swipe-label'>
      <div onClick={() => setShow(!show)} className='p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700' data-drawer-toggle='drawer-swipe'>
        <span className='absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600' />
        <h5 id='drawer-swipe-label' className='inline-flex items-center text-base text-gray-500 dark:text-gray-400'><svg className='w-5 h-5 mr-2' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z' /></svg>Options</h5>
      </div>
      {show && (
        <div className='grid grid-cols-3 gap-4 p-4 lg:grid-cols-4'>
          <div className='p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-400 dark:bg-gray-600'>

            <label htmlFor='minmax-range' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Count {count}</label>
            <input id='minmax-range' onChange={(e) => setCount(e.target.value)} type='range' min='1' max='10' value={count} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />

          </div>

          <div className='p-4 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-400 dark:bg-gray-600'>

            <label htmlFor='countries' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Size</label>
            <select onChange={(e) => setSize(e.target.value)} id='countries' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option defaultValue value='256x256'>256x256</option>
              <option value='512x512'>512x512</option>
              <option value='1024x1024'>1024x1024</option>
            </select>
          </div>

        </div>)}
    </div>
  )
}
