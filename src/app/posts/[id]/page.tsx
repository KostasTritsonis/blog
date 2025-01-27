import DeletePostForm from "@/components/DeletePostForm";
import EditPostForm from "@/components/EditPostForm";
import { prisma } from "@/lib/db"
import { notFound } from "next/navigation";
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default async function Page({params}: {params: Promise<{ id: string }>}) {

  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id)
    }
  });

  if(!post) {
    notFound();
  };

  return (
    <main className="text-center pt-24 px-7">
        <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
        <p className="max-w-[750px] mx-auto">{post.body}</p>
        <SignedIn>
          <DeletePostForm postId={post.id} />
          <EditPostForm postId={post.id} />
        </SignedIn>
        <SignedOut>
          <p className="text-gray-500 mt-6">Sign in to edit or delete this post.</p>
        </SignedOut>
       
    </main>
  )
}
