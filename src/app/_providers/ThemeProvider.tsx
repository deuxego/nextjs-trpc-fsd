'use client';

import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type PropsWithChildren } from 'react';

const config: Omit<ThemeProviderProps, 'children'> = {
  attribute: 'class',
  defaultTheme: 'dark',
  enableSystem: true,
  disableTransitionOnChange: true
};

export function ThemeProvider({ children }: PropsWithChildren) {
  return <NextThemesProvider {...config}>{children}</NextThemesProvider>;
}
