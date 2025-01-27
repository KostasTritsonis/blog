import { prisma } from '@/lib/db';
import Link from 'next/link'

export default async function PostsList() {

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();

  return (
    <>
     {posts.length === 0 ? (
        // Display a message if there are no posts
        <p className="text-gray-500">There are no posts.</p>
      ) : (
        <ul>
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
