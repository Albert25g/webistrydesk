import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}