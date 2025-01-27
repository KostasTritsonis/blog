import { createPost } from '@/actions/action'
import {SignOutButton} from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server'

export default async function Page() {
  
    const { userId,redirectToSignIn } = await auth();

    if (!userId) {
      return redirectToSignIn();
    }
  return (
    <main className="text-center pt-16">
        <h1 className="text-5xl font-semibold mb-7">Create Post</h1>
        <form className='flex flex-col mx-auto max-w-[350px] gap-2 my-10' action={createPost}>
            <input className='border rounded px=3 h-10 py-2' type="text" name="title" placeholder='Title for new post' required/>
            <textarea className='border rounded px=3' name="body" rows={6} placeholder='Content for new post' required></textarea>
            <button className='h-10 bg-blue-500 px-5 rounded text-white'>Submit</button>
        </form>
        <SignOutButton>
          <button>Log out</button>
        </SignOutButton>
    </main>
  )
}
