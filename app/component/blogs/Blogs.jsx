/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Blogs = (blog) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 grid-cols-3">
        {blog.blog.data.map(function (blogs) {
          return (
            <div key={blogs.id}>
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                {/* <Image
                  src={blogs.attributes.image.data.attributes.url}
                  width={500}
                  height={320}
                  style={{ objectFit: "cover" }}
                  alt="blog"
                  layout="fixed"
                /> */}
                <img src={blogs.attributes.image.data.attributes.url} alt="blog" className="object-cover w-full h-64" />
                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                      href="/"
                      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title="traveling"
                    >
                      {blogs.attributes.category.data.attributes.category}
                    </a>
                    <span className="text-gray-600">
                      — {dayjs(blogs.attributes.publishedAt).format("LL")}
                    </span>
                  </p>
                  <h1 className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    {blogs.attributes.title}
                  </h1>
                  <p className="mb-2 text-gray-700 font-sans">
                    {blogs.attributes.content}
                  </p>
                  <a href="/" aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-accent-400 hover:text-purple-800"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default Blogs;
