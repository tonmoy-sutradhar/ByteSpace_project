import type { ReactNode } from "react";
import Header from "@/app/Components/Common/Header";
import Footer from "@/app/Components/Common/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

// import type { ReactNode } from "react";
// import Header from "@/app/Components/Common/Header";
// import Footer from "@/app/Components/Common/Footer";

// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//     <div>
//       <Header />
//       {children}
//       <Footer />
//     </div>
//   );
// }
