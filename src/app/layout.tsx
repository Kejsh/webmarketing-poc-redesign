import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WEB Marketing | Custom Web rješenja i EasyEdit CMS',
  description: 'Vaš dugoročni tehnološki partner za stabilna, sigurna i skalabilna custom web rješenja, e-commerce sustave i integracije.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased selection:bg-accent/30 selection:text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
