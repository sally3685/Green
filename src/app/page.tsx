import FirstSection from './components/FirstSection';
import Nav from './components/Nav';
import Bars from './components/Bars';
import SecondSection from './components/SecondSection';
export default function Home() {
  return (
    <main className="min-h-full w-full h-full relative">
      <Nav></Nav>
      <FirstSection></FirstSection>
      <Bars></Bars>
      <SecondSection></SecondSection>
    </main>
  );
}
