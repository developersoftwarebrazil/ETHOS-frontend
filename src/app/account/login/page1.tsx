import LoginForm from "@/components/account/login/login-form";

export default async function LoginPage() { 
  return (
    <section className={"animeLeft"}>
          <div className="container"> 
          <h1 className="title">Login</h1>
          <LoginForm />
          </div>
        </section>
  );
}
