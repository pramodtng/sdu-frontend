import Image from "next/image";
import React from "react";

const ImageSection = (image) => {
  return (
    <section className="lg:py-20 py-12">
      <div className="container max-w-6xl mx-auto px-2">      
        <div className="grid grid-cols-3 gap-2">
          {image.image.data.map(function (images) {
            return (
              <div key={images.id}>
                <Image
                  class="h-auto max-w-full rounded-lg"
                  src={images.attributes.image.data.attributes.url}
                  alt="image"
                  height={400}
                  width={400}
                />
                <h2> {images.attributes.caption} </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
