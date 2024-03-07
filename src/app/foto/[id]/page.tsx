type FotoIdParams = {
  params: {
    id: string;
  };
};

export default async function FotoIdPage({ params }: FotoIdParams) {
  return (
		<main>
			<h1>Foto id: {params.id}</h1>
		</main>
	);
}
