import { getServerAuthSession } from '@/kernel/next-auth/auth';
import { type PropsWithChildren } from 'react';
import 'server-only';

export const SignedOut = async (props: PropsWithChildren) => {
  const session = await getServerAuthSession();

  if (session) {
    return null;
  }

  return <>{props.children}</>;
};
