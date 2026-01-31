import Navigation from "./ui/navigation";
import MainHeader from "./ui/main-header";
import TopBar from "./ui/top-bar";

export default function HeaderWidget() {
  return (
    <header>
      <TopBar />
      <MainHeader />
      <Navigation />
    </header>
  );
}
