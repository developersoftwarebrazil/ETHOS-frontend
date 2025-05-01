interface PageProps {
  params: {
    user: string;
  };
}

export default async function ProfileUserPage({ params }: PageProps) {
  return (
    <section>
      <h1>Usuário: {params.user}</h1>
      <p>This is the user profile page for {params.user}.</p>
    </section>
  );
}
