import { useState } from "react";
import type { Ilanguages } from "../../types/languages";

interface AvailableLanguagesProps {
  languages: Ilanguages[];
}

const AvailableLanguages = ({ languages }: AvailableLanguagesProps) => {
  const [stack, setStack] = useState<Ilanguages[]>([
    languages[2], // Svelte
    languages[6], // Redis
  ]);

  const handleAddToStack = (language: Ilanguages) => {
    const alreadyAdded = stack.some((item) => item.id === language.id);
    if (!alreadyAdded) {
      setStack([...stack, language]);
    }
  };

  const handleRemove = (id: number) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-slate-500 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Available Technologies Grid (3 Columns on Desktop, takes 2 span) */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language) => {
              const isAdded = stack.some((item) => item.id === language.id);

              return (
                <div
                  key={language.id}
                  className="card bg-white border border-slate-100 shadow-sm p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl">{language.icon}</span>
                      {language.badge && (
                        <span className="badge badge-info badge-outline font-medium text-xs">
                          {language.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {language.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      {language.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
                      <span className="bg-slate-100 px-2.5 py-1 rounded-md">
                        {language.category}
                      </span>
                      <span className="bg-slate-100 px-2.5 py-1 rounded-md">
                        {language.level}
                      </span>
                      <span className="text-amber-500 font-semibold ml-auto">
                        ★ {language.rating}
                      </span>
                    </div>

                    <button
                      className={`btn w-full border-none transition ${
                        isAdded
                          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                      onClick={() => handleAddToStack(language)}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Your Stack Sidebar */}
        <aside className="card bg-white border border-slate-100 shadow-sm p-6 rounded-2xl h-fit">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
            <span className="text-xs text-slate-400 font-medium">
              {stack.length} Technology Selected
            </span>
          </div>

          <div className="space-y-3 mb-6">
            {stack.length === 0 ? (
              <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl">
                <p className="text-sm text-slate-400">No technologies selected yet.</p>
                <p className="text-xs text-slate-300 mt-1">Your stack is empty.</p>
              </div>
            ) : (
              stack.map((language) => (
                <div
                  key={language.id}
                  className="flex justify-between items-center border border-slate-100 p-3 rounded-xl bg-slate-50/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{language.name}</h4>
                      <p className="text-xs text-slate-400">{language.category}</p>
                    </div>
                  </div>

                  <button
                    className="text-slate-400 hover:text-red-500 transition p-1"
                    onClick={() => handleRemove(language.id)}
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          <button
            className="btn w-full border border-red-200 bg-white text-red-500 hover:bg-red-50 hover:border-red-300 transition shadow-none"
            onClick={handleRemoveAll}
            disabled={stack.length === 0}
          >
            Remove All
          </button>
        </aside>

      </div>
    </section>
  );
};

export default AvailableLanguages;