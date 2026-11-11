import Profile from './assets/profile.jpg';
import GithubActivity from './components/GithubActivity';
import './App.css';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen font-geist">
      <section className="max-w-3xl mx-auto px-6 pt-32 text-white">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl font-bold">
              Hi, I'm Winston.
            </h1>

            <p className="text-[#8B8B8B] text-lg mt-3">
              Currently studying Bachelor of Science
              in Information Systems at La Verdad
              Christian College.
            </p>
          </div>

          <div className="mb-6 sm:-translate-y-2">
            <img
              src={Profile}
              alt="Profile"
              className="w-38 h-38 rounded-full object-cover grayscale brightness-75 border-[10px] border-[#272727] shadow-lg shadow-black/40"
            />
          </div>

        </div>

        <div className="mt-20">
          <GithubActivity />
        </div>

      </section>
    </div>
  );
}

export default App;
