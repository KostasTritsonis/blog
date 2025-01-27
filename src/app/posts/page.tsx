import PostsList from '@/components/posts-list';
import { Suspense } from 'react';

export default function Page() {

  return (
    <main  className="text-center pt-16 px-5">
      <PostsList />
    </main>
  )
}
