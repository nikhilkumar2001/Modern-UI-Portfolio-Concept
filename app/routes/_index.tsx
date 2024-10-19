import type { MetaFunction } from "@remix-run/node";
import Header from './header';
import Home from './Home';
export const meta: MetaFunction = () => {
  return [
    { title: "Modern UI Portfolio Concept" },
    { name: "description", content: "A clean and uncluttered interface with ample white space that allows projects to shine." },
  ];
};

export default function Index() {
  return (
    <main>
      <Header />
      <Home />
    </main>
  );
}
