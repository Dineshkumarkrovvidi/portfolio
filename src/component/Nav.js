import React from 'react'

export default function Nav() {
  return (
     <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 sticky top-0">
      <h1 className="text-xl font-bold">Dinesh.dev</h1>
      <ul className="flex gap-6">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
