import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const LibrariesPage = () => {
  const { id } = useParams();
  const [library, setLibrary] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const handleLibrary = async () => {
      try {
        const libraryRes = await axios.get(`http://localhost:5000/api/getlibraryByID/${id}`);
        const libraryData = libraryRes.data.data;
        const libraryBooks = libraryData.books;
        // console.log(libraryData);
        setLibrary(libraryData);
        setBooks(libraryBooks)
      } catch (error) {
        console.log("Failed to fetch library: ", error);
      }
    }
    handleLibrary();
  }, []);

  return (
    <section className="bg-gray-800 text-white pt-48 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Library Header Section */}
        <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">{library.library_name}</h1>
          <img
            src={library.img}
            alt="Library"
            className="w-full h-64 object-cover rounded mb-6"
          />
          <p className="text-sm text-gray-300 mb-4">{library.description}</p>
          <div className="flex justify-between text-sm text-gray-400">
            <p><span className="font-semibold text-white">{library.location}</span> AA</p>
            <p><span className="font-semibold text-white">Available Books:</span> {library.num_of_books}</p>
          </div>
        </div>

        {/* Available Books Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">📚 Available Books</h2>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
              {/* Check if books are found and display the book; if not, display No books found */}
              {books ? 
              books.map((book, index) => (
                <div key={index} className="bg-slate-700 p-4 rounded-lg shadow hover:scale-105 transition-transform text-center">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-28 md:h-40 lg:h-56 object-cover rounded mb-2"
                  />
                  <p className="text-sm text-gray-300">{book.title}</p>
                </div>
              )) : 'No books found'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LibrariesPage
