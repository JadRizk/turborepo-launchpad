'use client';

import type { FC } from 'react';
import type { User } from '@supabase/auth-helpers-nextjs';
import { formatDistanceToNow } from 'date-fns';
import { BorderBeam, Card, CardContent, CardHeader, CardTitle } from 'ui';

export const UserWelcomeCard: FC<{ user: User | undefined }> = ({ user }) => {
  const userName = user?.user_metadata?.name || user?.email || 'Awesome Human';
  const accountCreatedAt = user?.created_at ? new Date(user.created_at) : null;

  const membershipDuration = accountCreatedAt
    ? formatDistanceToNow(accountCreatedAt, { addSuffix: true })
    : 'since the dawn of time';

  return (
    <Card className='relative shadow-lg'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold'>
          Welcome back, {userName}! 🎉
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-gray-600'>
          You've started this amazing journey {membershipDuration}..
        </p>
        <p className='mt-2 text-gray-500'>
          Keep being awesome, and let’s build something great today! 💡
        </p>
      </CardContent>
      <BorderBeam duration={8} size={100} />
    </Card>
  );
};
