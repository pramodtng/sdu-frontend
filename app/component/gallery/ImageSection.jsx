import React from 'react'

const ImageSection = () => {
  return (
    <section className='lg:py-20 py-12'>
      <div className='container max-w-6xl mx-auto px-2'>
        <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ImageSection