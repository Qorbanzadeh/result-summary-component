// libraries
import { Hanken_Grotesk } from "next/font/google";

// font initialization
const hg = Hanken_Grotesk({ subsets: ["latin"] });

// assets

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`${hg.className} text-neutral_dark_gray_blue bg-neutral_white sm:min-h-screen sm:grid sm:place-items-center`}
    >
      {children}
    </main>
  );
}

export default Layout;
