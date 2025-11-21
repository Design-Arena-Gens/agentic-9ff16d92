import './globals.css';

export const metadata = {
  title: 'Agentic App',
  description: 'Deployed to Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
