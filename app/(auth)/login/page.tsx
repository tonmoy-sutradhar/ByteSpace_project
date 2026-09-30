import Link from "next/link";
import AuthShell from "@/app/Components/Auth/AuthShell";
import AuthCard from "@/app/Components/Auth/AuthCard";
import LoginForm from "@/app/Components/Auth/LoginForm";

export const metadata = { title: "Sign In | ByteSpace" };

export default function LoginPage() {
  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footerClassName="lg:bottom-[40px]"
        footer={
          <>
            New user?{" "}
            <Link href="/signup" className="text-[#0038DC]">
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </AuthShell>
  );
}
