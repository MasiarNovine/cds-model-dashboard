import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Web Dashboard',
  description: 'Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}