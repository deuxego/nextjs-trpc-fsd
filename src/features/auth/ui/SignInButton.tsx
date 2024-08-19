'use client';

import { Button } from '@/shared/ui/button';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';

export const SignInButton = () => {
  return (
    <Button onClick={() => signIn()} variant={'outline'} className='flex items-center'>
      <span>Sign In</span>
      <LogIn className='h-5 w-5 ml-2'/>
    </Button>
  );
};
