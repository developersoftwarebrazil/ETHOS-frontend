interface PageProps {
  params: {
    user: string;
  };
}

export default async function ProfileUserPage({ params }: PageProps) {
  const {user} = params;
  
  return (
    <section>
      <h1>Usuário: {user}</h1>
      <p>This is the user profile page for {user}.</p>
    </section>
  );
}
