import type { NextPage } from 'next';
import { Separator } from 'ui/src/components/ui/separator';
import { UpdateUserForm } from '../../../modules/auth/components/UpdateUserForm';

const SettingsPage: NextPage = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <UpdateUserForm />
    </div>
  );
};

export default SettingsPage;
