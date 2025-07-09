import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
    const [fictionBooks, setFictionBooks] = useState([]);
    const [comedyBooks, setComedyBooks] = useState([]);
    const [libraries, setLibraries] = useState([]);
    const [featuredBooks, setFeaturedBooks] = useState([]);
    useEffect(() => {
        const handleBooks = async () => {
            try {
                // A request to get all books from the API
                const bookRes = await axios.get('http://localhost:5000/api/getBooks');
                const bookData = bookRes.data.data;
                console.log(bookData)
                
                // A request to get all libraries from the API
                const libraryRes = await axios.get('http://localhost:5000/api/getlibraries');
                const libraryData = libraryRes.data.data;
                // console.log(libraryData);

                // Using books response push fiction and comedy books to fiction and comedy arrays
                const fiction = [];
                const comedy = [];
                bookData.forEach((book) => {
                    if (book.genre === "Fiction")
                        fiction.push(book);
                    else if (book.genre === "Comedy")
                        comedy.push(book);
                });

                const featured = [];
                bookData.forEach((featuredBook => {
                    if (featuredBook.book_rate > 3 ) {
                        featured.push(featuredBook);
                    }
                }))


                // Using library response push libraries to library array
                const library = [];
                libraryData.forEach((lib) => {
                    library.push(lib);
                })

                // console.log(library)

                setFictionBooks(fiction);
                setComedyBooks(comedy);
                setLibraries(library);
                setFeaturedBooks(featured);
            } catch(err) {
                console.log("Failed to fetch books", err);
            }
        }
        handleBooks();
    }, []);
  return (
    <div className="bg-gradient-to-b from-gray-800 to-slate-700 text-white">
        {/* Header Section */}
        <header className="relative z-10 bg-gray-900 shadow-lg mt-16">
            <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 lg:py-5 text-center">
                <h1 className="text-4xl font-extrabold tracking-wide mb-4">📚 Ebook Website</h1>
                <p className="max-w-2xl text-lg leading-relaxed mb-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <img src="/src/assets/cover.jpg" alt="Ebook Cover" className="w-10/12 h-96 rounded-lg shadow-md" />
            </div>
        </header>

        {/* Categories Section */}
        <section className="bg-slate-600 py-16 px-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl font-bold text-center mb-6">Categories</h2>

                <div className="w-full bg-slate-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-6">Fiction</h3>
                    <div className="flex overflow-x-auto gap-12">
                        {fictionBooks.map((fictionBook, index) => (
                            // <Link to={`/freeDetail/${fictionBook.book_id}`}
                            <Link to={`${fictionBook.price == 0 ? `/freeDetail/${fictionBook.book_id}` : `/paidDetail/${fictionBook.book_id}`}`}
                            key={index}
                            className="min-w-[180px] bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                                <img src={fictionBook.img} alt={fictionBook.book_title}
                                className="w-full h-32 object-cover rounded mb-2 hover:scale-110 transition-transform"/>
                                <h1 className="text-sm font-semibold text-gray-800">{fictionBook.book_title}</h1>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="w-full bg-slate-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Comedy</h3>
                    <div className="flex overflow-x-auto gap-12">
                        {comedyBooks.map((comedyBook, index) => (
                            <Link to={`${comedyBook.price == 0 ? `/freeDetail/${comedyBook.book_id}` : `/paidDetail/${comedyBook.book_id}`}`}
                            key={index}
                            className="min-w-[180px] bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                                <img src={comedyBook.img} alt={comedyBook.book_title}
                                className="w-full h-32 object-cover rounded mb-2 hover:scale-110 transition-transform"/>
                                <h1 className="text-sm font-semibold text-gray-800">{comedyBook.book_title}</h1>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>


        <section className="bg-slate-600 py-16 px-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl font-bold text-center mb-6">Libraries</h2>

                <div className="w-full bg-slate-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-6">Fiction</h3>

                    <div className="flex overflow-x-auto gap-12">
                        {libraries.map((library, index) => (
                            <div key={index} className="min-w-[180px] bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                                <img src={library.img} alt={library.library_name}
                                className="w-full h-32 object-cover rounded mb-2 hover:scale-110 transition-transform"/>
                                <h1 className="text-sm font-semibold text-gray-800">{library.library_name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Featured Books Section */}
        <section className="bg-slate-600 py-16 px-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl font-bold text-center mb-6">Featured Books</h2>

                <div className="w-full bg-slate-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-6">Top Rated</h3>

                    <div className="flex overflow-x-auto gap-12">
                        {featuredBooks.map((book, index) => (
                            <Link to={`${book.price == 0 ? `/freeDetail/${book.book_id}` : `/paidDetail/${book.book_id}`}`}
                            key={index}
                            className="min-w-[180px] bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                                <img src={book.img} alt={book.book_title}
                                className="w-full h-32 object-cover rounded mb-2 hover:scale-110 transition-transform"/>
                                <h1 className="text-sm font-semibold text-gray-800">{book.book_title}</h1>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomePage
