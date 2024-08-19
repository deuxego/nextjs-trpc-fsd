import { TRPCReactProvider } from '@/kernel/trpc/client/trpc-client';
import { ThemeProvider } from './ThemeProvider';
import { type PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => {
  return (
    <TRPCReactProvider>
      <ThemeProvider>{props.children}</ThemeProvider>
    </TRPCReactProvider>
  );
};
