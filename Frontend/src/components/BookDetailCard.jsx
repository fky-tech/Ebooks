import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetailCard = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const handleBook = async () => {
            try {
                const bookRes = await axios.get(`http://localhost:5000/api/getBookByID/${id}`);
                const bookData = bookRes.data.data;
                console.log(bookData);
                setBook(bookData);
            } catch (error) {
                console.log(error);
            }
        };
        handleBook();
    }, []);
  return (
    <section className="bg-slate-700 text-white py-20 px-4 flex justify-center mt-16">
        <div className="flex w-full max-w-6xl flex-col md:flex-row bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-slate-400 p-6 w-full md:w-80 flex-shrink-0">
                <div className="mb-6">
                    <img
                        src={book.img}
                        alt={book.book_title}
                        className="w-full h-56 object-cover rounded-lg"
                    />
                </div>
                <div className="flex justify-center space-x-5 items-center mb-4">
                    <span className="text-gray-300 text-lg">📚</span>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold">Read</button>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm mb-2">Rate this book:</p>
                    <div className="space-x-1 text-yellow-400 text-xl cursor-pointer">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>☆</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 w-full">
                <h1 className="text-3xl font-bold mb-2">{book.book_title}</h1>
                <p className="text-lg text-gray-300 mb-4">{book.author_name}</p>

                <div className="flex items-center space-x-2 mb-6">
                    <span className="text-yellow-400 text-xl">⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-300">({book.book_rate})</span>
                </div>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">{book.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
                    <p>
                        <span className="text-white font-semibold">Publisher: </span>{book.publisher}
                    </p>
                    <p>
                        <span className="text-white font-semibold">Published Date: </span>
                    {book.published_date ? book.published_date.split('T')[0] : 'Loading...'}
                    </p>
                    <p>
                        <span className="text-white font-semibold">Language: </span>{book.language}
                    </p>
                    <p>
                        <span className="text-white font-semibold">Pages: </span>{book.num_of_pages}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                    <button className="px-6 py-2 bg-green-600 rounded hover:bg-green-700 transition">Download</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookDetailCard
