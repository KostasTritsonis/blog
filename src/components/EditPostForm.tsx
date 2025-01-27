'use client';
import { updatePost } from '@/actions/action';
import { useState } from 'react'

export default function EditPostForm({ postId }: { postId: number }) {

  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <>
        <button onClick={toggleFormVisibility} className='h-10 w-[85.63px] bg-blue-500 px-5 rounded text-white'>Edit</button>
        {isFormVisible && (
        <form className='flex flex-col mx-auto max-w-[350px] gap-2 my-10' action={async (formData) => {
            await updatePost(formData, postId);
            toggleFormVisibility();
          }}>
            <input className='border rounded px=3 h-10 py-2' type="text" name="title" placeholder='Title for post' required/>
            <textarea className='border rounded px=3' name="body" rows={6} placeholder='Content for post' required></textarea>
            <button className='h-10 bg-blue-500 px-5 rounded text-white'>Update</button>
        </form>
        )}
    </>
  )
}
