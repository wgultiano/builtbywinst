import Profile from './assets/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="bg-[#121212] min-h-screen font-geist">
      <section className="max-w-3xl mx-auto px-6 pt-32 text-white">

        <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-start">
              Hi, I'm Winston.
            </h1>

            <p className="text-[#8B8B8B] text-lg text-start pt-2">
              Currently studying Bachelor of Science
              in Information Systems at La Verdad
              Christian College.
            </p>
          </div>

          <div className="mb-6 sm:-translate-y-2">
          <img
            src={Profile}
            alt="Profile"
            className="w-38 h-38 rounded-full object-cover grayscale brightness-75 border-[10px] border-[#272727] shadow-lg shadow-black/40"/>
          </div>

        </div>

      </section>
    </div>
  );
}

export default App;
