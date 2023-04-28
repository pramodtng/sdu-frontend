import React from 'react'

const ProductsShow = (product) => {

  return (
    <section className="lg:py-16 py-8">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {product.product.data.map(function(products){
            return (
              <div key={products.id}>
                <a href="#live">
                  <img
                    src={products.attributes.image.data.attributes.url}
                    alt="product img"
                    className="w-100 rounded-lg mb-4 hover:scale-110 h-[300px] w-[300px] object-cover"
                  />
                  <h4 className="text-blue font-semibold text-xl font-poppins mb-4 capitalize">
                    {products.attributes.name}
                  </h4>
                </a>
              </div>
            );
          })}
               
        </div>
      </div>
    </section>
  )
}

export default ProductsShow