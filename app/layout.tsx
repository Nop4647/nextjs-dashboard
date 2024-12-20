<<<<<<< Updated upstream
=======
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
>>>>>>> Stashed changes
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <body>{children}</body>
=======
      <body className={`${inter.className} antialiased`}>{children}</body>
>>>>>>> Stashed changes
    </html>
  );
}
