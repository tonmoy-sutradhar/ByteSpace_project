import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-[1200px] px-5 xl:px-0 ${className}`}>
    {children}
  </div>
);

export default Container;
