import { authUserSession } from '@/libs/auth-lib';

import Link from 'next/link';
import UserLoggedButton from './UserLoggedButton';

const UserActionButton = async () => {
  const user = await authUserSession();

  return (
    <>
      {!user ? (
        <Link href="/api/auth/signin" className="">
          Sign In
        </Link>
      ) : (
        <UserLoggedButton image={user.image} />
      )}
    </>
  );
};

export default UserActionButton;
