import React from 'react'

const CartPage = () => {
  const booksInCart = [
    {
      id: 1,
      title: "Book Title",
      author: "Author Name",
      image: "/assets/book1.png"
    },
    {
      id: 2,
      title: "Book Title",
      author: "Author Name",
      image: "/assets/book2.png"
    },
    {
      id: 3,
      title: "Book Title",
      author: "Author Name",
      image: "/assets/book3.png"
    },
    {
      id: 4,
      title: "Book Title",
      author: "Author Name",
      image: "/assets/book4.png"
    }
  ]

  return (
    <section className="bg-gray-700 text-white min-h-screen pt-40 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {booksInCart.map(book => (
          <div key={book.id} className="bg-slate-800 p-4 rounded-lg shadow-md text-center">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-300">by {book.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CartPage
