import Hero from './components/Hero';
import GithubActivity from './components/GithubActivity';
import './App.css';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen font-geist">
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-white">

        <Hero />

      <section className="mt-20">
        <GithubActivity />
      </section>

    </main>
    </div >
  );
}

export default App;
