import "./globals.css";

export const metadata = {
  title: "Sarhan || Portfolio",
  description: "Sarhan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />


      </head>
      <body className="dark:bg-black dark:text-white">{children}</body>
    </html>
  );
}
