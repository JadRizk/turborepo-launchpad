import { Suspense } from 'react';
import { UserWelcomeCard } from '../../modules/dashboard/components/UserWelcomeCard';
import { getCurrentUser } from './actions/user';
import { Skeleton } from 'ui';

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <section className='space-y-3 pb-4 pt-3 md:pb-5 md:pt-5 lg:py-24'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <Suspense fallback={<Skeleton className='w-[350px] h-[150px]' />}>
          <UserWelcomeCard user={user} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
