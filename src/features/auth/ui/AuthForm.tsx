'use client';

import { signIn, type SignInOptions } from 'next-auth/react';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/button';
import { Discord } from '../icons/Discord';
import { Github } from '../icons/Github';

const options: SignInOptions = {
  redirect: true,
  callbackUrl: ROUTES.HOME
};

export const AuthForm = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Button
        onClick={() => signIn('github', options)}
        variant="outline"
        className="w-full space-x-2"
      >
        <Github />
        <span>Sign in with GitHub</span>
      </Button>
      <Button
        onClick={() => signIn('discord', options)}
        variant="outline"
        className="w-full space-x-2"
      >
        <Discord />
        <span>Sign in with Discord</span>
      </Button>
    </div>
  );
};
