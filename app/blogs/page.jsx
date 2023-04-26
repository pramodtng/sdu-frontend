import React from "react";
import BannerSection from "../component/blogs/BannerSection";
import Blogs from "../component/blogs/Blogs";
import Categories from "../component/blogs/Categories";

export const metadata = {
  title: "Blogs",
  description: "Updates from SDU",
};
export async function getBlogs() {
  const blogs = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`,
    { cache: "no-cache" }
  );
  return blogs.json();
}

const page = async () => {
  const blogs = await getBlogs();
  return (
    <>
      <BannerSection />
      <Blogs blog={blogs} />
    </>
  );
};

export default page;
