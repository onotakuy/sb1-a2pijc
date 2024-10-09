import React from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCart, Play } from 'lucide-react'

const DetailPage = () => {
  const { id } = useParams()

  // Mock data - in a real app, you'd fetch this based on the id
  const item = {
    id: 1,
    title: 'Sample Item',
    description: 'This is a sample item that could be a product, movie, or TV show.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 19.99,
    rating: 4.5,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-300 mb-4">{item.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-2">★</span>
            <span>{item.rating}</span>
          </div>
          <div className="mb-6">
            <span className="text-2xl font-bold">${item.price}</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <ShoppingCart className="mr-2" />
              Add to Cart
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <Play className="mr-2" />
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage