"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/assets/header/logo.png";
import { authLinks, navLinks } from "@/app/config/nav";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { closeMobileMenu, toggleMobileMenu } from "../../redux/fetures/uiSlice";

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navClass = (active: boolean) =>
    `inline-block text-[16px] leading-6 transition hover:text-white ${
      active ? "-translate-y-[3px] font-medium text-white" : "text-white/80"
    }`;

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="relative mx-auto flex max-w-[1200px] items-start justify-between px-5 pt-[35px] xl:px-0">
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
            className="h-[35px] w-auto"
          />
        </Link>

        {/* Desktop: center nav */}
        <nav className="absolute left-1/2 top-[35px] hidden -translate-x-1/2 items-center gap-[25px] pt-[13px] lg:flex">
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
        <div className="hidden items-center gap-[25px] pt-[13px] lg:flex">
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
        <div className="flex items-center gap-4 pt-[6px] lg:hidden">
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
        <div className="mx-5 mt-4 rounded-2xl bg-white p-5 text-[#222] shadow-lg lg:hidden">
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
