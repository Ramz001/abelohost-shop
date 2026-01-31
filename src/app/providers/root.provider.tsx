import HeaderWidget from "@widgets/header";
import FooterWidget from "@widgets/footer";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="page-container">
      <HeaderWidget />
      {children}
      <FooterWidget />
    </main>
  );
}
