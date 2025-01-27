import { prisma } from '@/lib/db';
import Link from 'next/link'
import { Suspense } from 'react';

export default async function PostsList() {

  const posts = await prisma.post.findMany();

  return (
    <>
     <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts({posts.length})</h1>
     {posts.length === 0 ? (
        // Display a message if there are no posts
        <p className="text-gray-500">There are no posts.</p>
      ) : (
        <ul className='border-t border-black/10 py-5 max-w-[750px] max-sm:max-w-[350px] mx-auto'>
          {posts.map((post) => (
            <li key={post.id} className='mb-3'>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
  </>
  )
}
