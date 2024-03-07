type PerfilUserParams = {
  params: {
    user: string;
  };
};

export default async function PerfilUserPage({ params }: PerfilUserParams) {
  return (
		<main>
			<h1>Usuário: { params.user }</h1>
		</main>
	);
}
