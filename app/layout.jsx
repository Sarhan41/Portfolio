import "./globals.css";

export const metadata = {
  title: "Sarhan || Portfolio",
  description: "Sarhan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
{/* demo commit */}
      </head>
      <body className="dark:bg-black dark:text-white">{children}</body>
    </html>
  );
}
