import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import userGet from "@/actions/user-get";
import { UserContextProvider } from '@/context/user-context';

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorro",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const { data: user } = await userGet();
	
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
				<UserContextProvider user={user}>
					<div className="App">
					<Header />
					<main className="AppBody">
						{children}
					</main>
					<Footer />
					</div>
				</UserContextProvider>
			</body>
    </html>
  );
}
