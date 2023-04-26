import Image from "next/image";
import React from "react";

const ImageSection = (image) => {
  // console.log(JSON.stringify(image));
  return (
    <section className="lg:py-20 py-12">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-3 gap-2">
          {image.image.data.map(function (images) {
            return (
              <div key={images.id} className="relative block group h-full">
                <Image
                  class=" w-full rounded-lg  absolute inset-0 object-cover 
                  h-full group-hover:opacity-50"
                  src={images.attributes.image.data.attributes.url}
                  alt="image"
                  height={400}
                  width={400}/>
                <div class="relative p-5">
                  <div class="mt-40">
                    <div
                      class="transition-all transform 
                            translate-y-8 opacity-0 
                            group-hover:opacity-100 
                            group-hover:translate-y-0">
                      <div class="p-2">
                        <center class="text-lg text-white font-poppins">
                          {images.attributes.caption}
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
