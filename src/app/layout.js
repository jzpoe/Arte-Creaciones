import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ArtCreaciones</title>
        <meta name="description" content="Descripción de tu página de trabajos escolares" />
        <link rel="icon" href="/imgbody/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
