import { Separator } from 'ui/src/components/ui/separator';
import { UpdateUserForm } from '../../../modules/auth/components/UpdateUserForm';
import { getCurrentUser } from '../actions/user';

const SettingsPage = async () => {
  const user = await getCurrentUser();
  
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <UpdateUserForm user={user}/>
    </div>
  );
};

export default SettingsPage;
