import { Suspense } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Languages from "./components/technologies/languages";
import type { Ilanguages } from "./types/languages";
import Footer from "./components/Footer";

const languagesFetch = async (): Promise<Ilanguages[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const languagesPromise = languagesFetch();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Nav />
        <Banner />

        <Suspense
          fallback={
            <div className="text-center py-12">
              Loading....
            </div>
          }
        >
          <Languages languagesPromise={languagesPromise} />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;