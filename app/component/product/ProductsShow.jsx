import React from 'react'

const ProductsShow = () => {
  return (
    <section className="lg:py-16 py-8">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div >
            <a href="#live">
              <img src= '/prod-1.jpg' alt="product img" className="w-100 rounded-lg mb-4 hover:scale-110" />
              <h4 className="text-blue font-semibold text-2xl font-poppins mb-4">Perfomance Management System</h4>
            </a>
          </div>
          <div>
            <a href="#live">
              <img src= '/prod-1.jpg' alt="product img" className="w-100 rounded-lg mb-4 hover:scale-110" />
              <h4 className="text-blue font-semibold text-2xl font-poppins mb-4">Tashicell Website</h4>
            </a>
          </div>
          <div>
            <a href="#live">
              <img src='/prod-1.jpg' alt="product img" className="w-100 rounded-lg mb-4 hover:scale-110" />
              <h4 className="text-blue font-semibold text-2xl font-poppins mb-4">Tashicell Electronics Website</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsShow