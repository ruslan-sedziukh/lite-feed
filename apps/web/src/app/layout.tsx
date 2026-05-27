import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { APP_NAME } from '@litefeed/shared';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'LiteFeed web app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
