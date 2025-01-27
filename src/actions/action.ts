'use server';
import { prisma } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
export async function createPost(formFata: FormData) {

     const { userId,redirectToSignIn} = await auth();
    
    if (!userId) {
        return redirectToSignIn();
    }

    const title = formFata.get('title') as string;
    const body = formFata.get('body') as string;


    await prisma.post.create({
        data: {
            title,
            body,
            
        },      
    });
    
    revalidatePath('/posts');
}


export async function updatePost(formFata: FormData,postId: number) {

    const title = formFata.get('title') as string;
    const body = formFata.get('body') as string;

    await prisma.post.update({
        where: {
            id: postId,            
        },
        data: {
            title,
            body,
        },
    }); 
    revalidatePath('/posts');
}

export async function deletePost(formData: FormData) {
    const id = Number(formData.get('id'));
    await prisma.post.delete({
        where: {
            id,
        },
    }); 

    redirect('/posts');
}