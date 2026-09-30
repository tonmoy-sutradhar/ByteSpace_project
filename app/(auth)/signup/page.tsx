import Link from "next/link";
import AuthShell from "@/app/Components/Auth/AuthShell";
import AuthCard from "@/app/Components/Auth/AuthCard";
import SignupForm from "@/app/Components/Auth/SignupForm";

export const metadata = { title: "Sign Up | ByteSpace" };

export default function SignupPage() {
  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footerClassName="lg:bottom-[51px]"
        footer={
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-[#0038DC]">
              Login
            </Link>
          </>
        }
      >
        <SignupForm />
      </AuthCard>
    </AuthShell>
  );
}
