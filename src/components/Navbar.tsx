import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Play, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-600 text-2xl font-bold">EC App</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/" className="hover:text-gray-300">Products</Link>
          <Link to="/" className="hover:text-gray-300">Movies</Link>
          <Link to="/" className="hover:text-gray-300">TV Shows</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <Play className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar