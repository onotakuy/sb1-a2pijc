import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const featuredContent = [
    { id: 1, title: 'Featured Movie', type: 'movie', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, title: 'Top Rated TV Show', type: 'tv', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 3, title: 'Best Selling Product', type: 'product', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ]

  const categories = [
    { title: 'Movies', items: ['Action', 'Comedy', 'Drama', 'Sci-Fi'] },
    { title: 'TV Shows', items: ['Popular', 'New Releases', 'Originals', 'Kids'] },
    { title: 'Products', items: ['Electronics', 'Books', 'Home & Kitchen', 'Fashion'] },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map((item) => (
            <Link key={item.id} to={`/detail/${item.id}`} className="relative group">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.title} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.items.map((item) => (
              <div key={item} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default HomePage