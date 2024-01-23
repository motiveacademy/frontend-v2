import SignInSection from "@/sections/signin/SignInSection";

const Login = () => {
  return (
    <main className="min-h-screen flex flex-col items-center p-16 text-primary-green space-y-4">
      <h1 className="font-bold text-2xl">Sign in to Motive Academy</h1>
      <SignInSection />
    </main>
  );
};

export default Login;
