import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer Section */}
        <footer className="bg-gray-900 py-8 text-center">
            <div className="flex justify-center space-x-6">
            {["facebook", "twitter", "instagram"].map((icon) => (
                <img key={icon} src={`/assets/${icon}.png`} alt={icon} className="w-8 h-8 hover:opacity-80 transition-opacity" />
            ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">© 2025 Ebook Website. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer
