import './globals.css';

export const metadata = {
  title: 'KOYYA CHANDAN REDDY | Portfolio',
  description: 'Personal portfolio of KOYYA CHANDAN REDDY – B.Tech student, Java & DSA enthusiast, developer of a water delivery app.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>KOYYA CHANDAN REDDY</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} KOYYA CHANDAN REDDY. All rights reserved.</footer>
      </body>
    </html>
  );
}
