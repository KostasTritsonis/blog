'use client';
import { deletePost } from '@/actions/action'

export default function DeletePostForm({ postId }: { postId: number }) {
  return (
    <form action={deletePost} className='my-5'>
        <input type="hidden" name="id" value={postId} />
        <button type='submit' className='h-10 bg-blue-500 px-5 rounded text-white'>Delete</button>
    </form>
  )
}
