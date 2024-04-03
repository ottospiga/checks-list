import Provider  from './providers';

export const metadata = {
  title: 'check_list',
  description: 'check_list',
  httpEquiv: 'Strict-Transport-Security',
  content: 'max-age=31536000; includeSubDomains; preload'
}

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload"/>
      <meta name="Content-Security-Policy" value="default-src 'self';" />
      <body suppressHydrationWarning={true} >
        <Provider>
          {children}
        </Provider>
      </body>

    </html>
  );
}
