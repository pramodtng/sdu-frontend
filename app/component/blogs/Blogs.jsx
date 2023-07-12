/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Blogs = (blog) => {
  return (
    <section className="py-10 lg:py-20 bg-white relative z-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {blog.blog.data.map(function (blogs) {
            return (
              <div key={blogs.id}>
                {/* <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <img
                    src={blogs.attributes.image.data.attributes.url}
                    alt="blog"
                    className="object-cover w-full h-64"
                  />
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
                        — c
                      </span>
                    </p>
                    <h1 className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      {blogs.attributes.title}
                    </h1>
                    <h2 className="mb-2 text-gray-700 font-sans">
                      {blogs.attributes.subtitle}
                    </h2>
                    <a
                      href={`/blog/${blogs.id}`}
                      aria-label=""
                      className="inline-flex items-center font-medium transition-colors duration-200  hover:text-blue-400 cursor-pointer text-sm"
                    >
                      Learn more
                    </a>
                  </div>
                </div> */}
                <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt="Office"
                    src={blogs.attributes.image.data.attributes.url}
                    class="h-56 w-full object-cover"
                  />

                  <div class="bg-white p-4 sm:p-6">
                    <time datetime="2022-10-10" class="block text-xs text-gray-500">
                      <span className=" bg-blue-200 px-2 rounded-lg capitalize">{blogs.attributes.category.data.attributes.category}</span> - {dayjs(blogs.attributes.publishedAt).format("LL")}
                    </time>

                    <a href={`/blog/${blogs.id}`}>
                      <h3 class="mt-0.5 text-lg text-gray-900">
                        {blogs.attributes.title}
                      </h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {blogs.attributes.subtitle}
                    </p>
                  </div>
                  <div class="sm:flex sm:items-end sm:justify-end">
                    <a
                      href= {`/blog/${blogs.id}`}
                      class="block bg-blue-200 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-blue-400"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
