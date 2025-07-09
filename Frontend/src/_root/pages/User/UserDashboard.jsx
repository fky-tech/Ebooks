import React from 'react'

const UserDashboard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-slate-700 text-white min-h-screen">
        <header className="bg-gray-900 pt-36 pb-16 shadow-lg">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl font-bold mb-4">📚 Ebook Explorer</h1>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                <input
                    type="text"
                    placeholder="Search ebooks, authors, genres..."
                    className="w-full sm:w-3/4 px-4 py-2 rounded bg-gray-800 text-white focus:outline-none shadow-inner"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded">
                    🔍 Search
                </button>
                </div>
            </div>
        </header>

      {/* Categories Section */}
        <section className="bg-slate-600 py-16 px-8">
            <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-center mb-6">📖 Categories</h2>

            {/* Category Blocks */}
            <div className="w-full bg-slate-800 p-6 rounded-lg shadow hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-4">Fiction</h3>
                <img src="/assets/fiction.png" alt="Fiction" className="w-full h-48 object-cover rounded" />
            </div>
            <div className="w-full bg-slate-800 p-6 rounded-lg shadow hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-4">Comedy</h3>
                <img src="/assets/comedy.png" alt="Comedy" className="w-full h-48 object-cover rounded" />
            </div>
            </div>
        </section>

        {/* New Arrivals Section */}
        <section className="bg-slate-600 py-16 px-8">
            <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold text-center mb-6">📦 New Arrivals</h2>

            <div className="w-full bg-slate-800 p-6 rounded-lg shadow hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-4">This Week’s Picks</h3>
                <img src="/assets/new.png" alt="New Arrivals" className="w-full h-48 object-cover rounded" />
            </div>
            </div>
        </section>

        {/* Profile Hover Card */}
        <section className="bg-slate-600 py-16 px-8">
            <div className="max-w-xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold mb-6">👤 User Profile</h2>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                <img src="/assets/profile.png" alt="Profile" className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fikre</h3>
                <p className="text-sm text-gray-400">Member since 2024 • 8 books borrowed</p>
                <div className="mt-4 space-x-4">
                <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Borrowed Books</button>
                <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-800">Update Profile</button>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default UserDashboard
