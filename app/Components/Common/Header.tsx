"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/assets/header/logo.png";
import { authLinks, navLinks } from "@/app/config/nav";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { closeMobileMenu, toggleMobileMenu } from "../../redux/fetures/uiSlice";

// Scroll position track kora (SSR safe, hydration e mismatch hoy na)
const SCROLL_THRESHOLD = 40;

const subscribeToScroll = (callback: () => void) => {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
};
const getScrolled = () => window.scrollY > SCROLL_THRESHOLD;
const getServerScrolled = () => false;

const CartIcon = () => (
  <svg
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.2 6.5h13.6l.9 14.2H1.3L2.2 6.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 9V5a3.5 3.5 0 0 1 7 0v4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    {open ? (
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ) : (
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    )}
  </svg>
);

const Header = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrolled,
    getServerScrolled,
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navClass = (active: boolean) =>
    `inline-block text-[16px] leading-6 transition hover:text-white ${
      active
        ? `font-medium text-white ${scrolled ? "" : "-translate-y-[3px]"}`
        : "text-white/80"
    }`;

  // Top e: transparent (design er moto). Scroll korle: floating blue box
  const rowClass = scrolled
    ? "mt-3 w-[calc(100%-24px)] items-center rounded-[24px] bg-[#0038DC]/95 px-5 py-3 shadow-[0_12px_32px_rgba(0,20,100,0.35)] ring-1 ring-white/20 backdrop-blur-md sm:px-6"
    : "w-full items-start px-5 pt-[35px] xl:px-0";

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div
        className={`relative mx-auto flex max-w-[1200px] justify-between transition-all duration-300 motion-reduce:transition-none ${rowClass}`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => dispatch(closeMobileMenu())}
          className="block shrink-0"
        >
          <Image
            src={logo}
            alt="ByteSpace"
            priority
            className={`w-auto transition-all duration-300 motion-reduce:transition-none ${
              scrolled ? "h-[30px]" : "h-[35px]"
            }`}
          />
        </Link>

        {/* Desktop: center nav */}
        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-[25px] lg:flex ${
            scrolled ? "top-1/2 -translate-y-1/2" : "top-[35px] pt-[13px]"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navClass(isActive(link.href))}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: right side */}
        <div
          className={`hidden items-center gap-[25px] lg:flex ${
            scrolled ? "" : "pt-[13px]"
          }`}
        >
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navClass(isActive(link.href))}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Cart"
            className="ml-1 cursor-pointer transition hover:opacity-80"
          >
            <CartIcon />
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div
          className={`flex items-center gap-4 lg:hidden ${
            scrolled ? "" : "pt-[6px]"
          }`}
        >
          <button type="button" aria-label="Cart" className="cursor-pointer">
            <CartIcon />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => dispatch(toggleMobileMenu())}
            className="cursor-pointer"
          >
            <MenuIcon open={isOpen} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="mx-5 mt-3 max-h-[calc(100vh-110px)] overflow-y-auto rounded-2xl bg-white p-5 text-[#222] shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4 text-[16px]">
            {[...navLinks, ...authLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => dispatch(closeMobileMenu())}
                className={
                  isActive(link.href) ? "font-medium text-[#0038DC]" : ""
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import logo from "@/app/assets/header/logo.png";
// import { authLinks, navLinks } from "@/app/config/nav";
// import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
// import { closeMobileMenu, toggleMobileMenu } from "../../redux/fetures/uiSlice";

// const CartIcon = () => (
//   <svg
//     width="18"
//     height="22"
//     viewBox="0 0 18 22"
//     fill="none"
//     aria-hidden="true"
//   >
//     <path
//       d="M2.2 6.5h13.6l.9 14.2H1.3L2.2 6.5Z"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M5.5 9V5a3.5 3.5 0 0 1 7 0v4"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//     />
//   </svg>
// );

// const MenuIcon = ({ open }: { open: boolean }) => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     aria-hidden="true"
//   >
//     {open ? (
//       <path
//         d="M6 6l12 12M18 6L6 18"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     ) : (
//       <path
//         d="M4 7h16M4 12h16M4 17h16"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     )}
//   </svg>
// );

// const Header = () => {
//   const pathname = usePathname();
//   const dispatch = useAppDispatch();
//   const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   const navClass = (active: boolean) =>
//     `inline-block text-[16px] leading-6 transition hover:text-white ${
//       active ? "-translate-y-[3px] font-medium text-white" : "text-white/80"
//     }`;

//   return (
//     <header className="absolute inset-x-0 top-0 z-30 text-white">
//       <div className="relative mx-auto flex max-w-[1200px] items-start justify-between px-5 pt-[35px] xl:px-0">
//         {/* Logo */}
//         <Link
//           href="/"
//           onClick={() => dispatch(closeMobileMenu())}
//           className="block shrink-0"
//         >
//           <Image
//             src={logo}
//             alt="ByteSpace"
//             priority
//             className="h-[35px] w-auto"
//           />
//         </Link>

//         {/* Desktop: center nav */}
//         <nav className="absolute left-1/2 top-[35px] hidden -translate-x-1/2 items-center gap-[25px] pt-[13px] lg:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={navClass(isActive(link.href))}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop: right side */}
//         <div className="hidden items-center gap-[25px] pt-[13px] lg:flex">
//           {authLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={navClass(isActive(link.href))}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <button
//             type="button"
//             aria-label="Cart"
//             className="ml-1 cursor-pointer transition hover:opacity-80"
//           >
//             <CartIcon />
//           </button>
//         </div>

//         {/* Mobile: cart + hamburger */}
//         <div className="flex items-center gap-4 pt-[6px] lg:hidden">
//           <button type="button" aria-label="Cart" className="cursor-pointer">
//             <CartIcon />
//           </button>
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//             onClick={() => dispatch(toggleMobileMenu())}
//             className="cursor-pointer"
//           >
//             <MenuIcon open={isOpen} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu panel */}
//       {isOpen && (
//         <div className="mx-5 mt-4 rounded-2xl bg-white p-5 text-[#222] shadow-lg lg:hidden">
//           <nav className="flex flex-col gap-4 text-[16px]">
//             {[...navLinks, ...authLinks].map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => dispatch(closeMobileMenu())}
//                 className={
//                   isActive(link.href) ? "font-medium text-[#0038DC]" : ""
//                 }
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
