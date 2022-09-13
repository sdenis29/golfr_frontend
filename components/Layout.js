import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getUsername, getUserId } from '../lib/userAuth'

const Layout = ({ children }) => {
  const [ username, setUsername ] = useState('')
  const [ userId, setUserId ] = useState('')

  useEffect(() => setUsername(getUsername()), [])
  useEffect(() => setUserId(getUserId()), [])

  return (
    <>
      <header className="flex flex-row w-full px-10 py-2 shadow">
        <span className="h-8 items-center space-x-6">
          <Link href={'/'}>
            <a className="text-2xl">Golfr 🏌️</a>
          </Link>
          <Link href={'/'}>
            <a className="text-xl">Home</a>
          </Link>
          <Link href={'/golfers/' + userId}>
            <a className="text-xl">Profile</a>
          </Link>
        </span>
        <span className="h-8 items-center text-xl ml-auto">
          {username}
          <span className="text-sm">
            {' ('}
            <Link href={'/logout'}>
              <a className="underline text-blue-700">logout</a>
            </Link>
            {')'}
          </span>
        </span>
      </header>
      <div className="px-10 py-2">
        {children}
      </div>
    </>
  )
}

export default Layout
