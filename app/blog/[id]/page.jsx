import React from 'react'

export async function getBlog(id){
  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/${id}?populate=*`,
    { cache: "no-cache" }
  );
  return await blog.json();
}
const page = async ({params}) => {
  const blogId = params.id
  const data = await getBlog(blogId)


  return (
    <div className="lg:py-20 py-8 px-8 pt-8 mb-3 text-xs font-semibold tracking-wide uppercase">
      <h2>{data.data.attributes.title}</h2>
    </div>
  );
}

export default page