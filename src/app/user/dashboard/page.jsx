import { authUserSession } from '@/libs/auth-lib';

const Page = async () => {
  const user = await authUserSession();
  return <div>Dashboard, welcome {user.name}</div>;
};

export default Page;
