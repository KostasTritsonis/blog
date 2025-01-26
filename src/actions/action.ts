'use server';
import { prisma } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
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