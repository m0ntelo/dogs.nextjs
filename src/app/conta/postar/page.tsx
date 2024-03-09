import { Metadata } from "next";
import ContaPhotoPost from "@/components/conta/conta-photo-post";

export const metadata: Metadata = {
	title: 'Postar | Minha Conta',
}

export default async function PostarPage() {
  return (
		<ContaPhotoPost />
	);
}
