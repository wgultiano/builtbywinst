import Hero from './components/Hero';
import About from './components/About';
import GithubActivity from './components/GithubActivity';
import './App.css';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen font-geist">
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-white">

        <Hero />

        <div className="mt-12">
          <About />
        </div>

        <div className="mt-12">
          <GithubActivity />
        </div>


      </main>
    </div >
  );
}

export default App;
