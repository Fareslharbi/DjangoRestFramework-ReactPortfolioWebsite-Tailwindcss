import { useRef, useEffect, useState } from "react";
import Nav from "./components/nav";
import "./App.css";
import logo from "./logo.png";
function App() {
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const educationResponse = await fetch("api/education.json");
        const educationData = await educationResponse.json();
        setEducation(educationData);

        const workResponse = await fetch("api/work.json");
        const workData = await workResponse.json();
        setWork(workData);

        const portfolioResponse = await fetch("api/portfolio.json");
        const portfolioData = await portfolioResponse.json();
        setPortfolio(portfolioData);

        console.log(educationData);
        // console.log(workData);
        // console.log(portfolioData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <>
      <Nav
        homeRef={homeRef}
        educationRef={educationRef}
        workRef={workRef}
        portfolioRef={portfolioRef}
      />

      <div className="md:h-screen pt-10" ref={homeRef}>
        <div className="md:w-2/4 w-10/12 mx-auto mt-10 mb-3">
          <h1 className="text-5xl mb-3">Fares Alharbi</h1>
          <p className="text-2xl text-cyan-900 ml-2">Software Engineer</p>
        </div>

        <div className="flex md:flex-row flex-col space-between md:w-2/4 m-auto py-5 border rounded-sm ppx-3 shadow">
          <img
            alt="profile"
            className="rounded-full w-64 h-64 mx-8"
            src={logo}
          />
          <div>
            <h5 className="text-2xl text-cyan-900 border-b-2 border-slate-300">
              Biography
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="md:h-screen pt-16" ref={educationRef}>
        <div className="mb-5 mx-5">
          <h1 className="text-5xl mb-3">My Education</h1>
          <p className="text-lg text-cyan-900">
            Here is the education that I have received
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx5">
          {education &&
            education.map((e) => (
              <div key={e.id} className="border rounded-sm p-3 shadow">
                <h3 className="text-lg border-b-2 border-slate-300 text-slate-800">
                  {e.school}, {e.degree}
                </h3>
                <h5 className="py-2">{e.years}</h5>
                <p>{e.description}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="md:h-screen pt-16" ref={workRef}>
        <div className="mb-5 mx-5">
          <h1 className="text-5xl mb-3">My Work Experience</h1>
          <p className="text-lg text-cyan-900">
            Here is some of my most recent relevant work experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 mx5">
          {work &&
            work.map((w) => (
              <div key={w.id} className="border rounded-sm p-3 shadow">
                <h3 className="text-lg border-b-2 border-slate-300 text-slate-800">
                  {w.company}, {w.job_des}
                </h3>
                <h5 className="py-2">{w.years}</h5>
                <p>{w.description}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="md:h-screen pt-16" ref={portfolioRef}>
        <div className="mb-5 mx-5">
          <h1 className="text-5xl mb-3">My Portfolio</h1>
          <p className="text-lg text-cyan-900">
            Here is some of my most recent projects that I have built and the
            link code in Github
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx5">
          {portfolio &&
            portfolio.map((p) => (
              <div key={p.id} className="border rounded-sm p-3 shadow">
                <h3 className="text-lg border-b-2 border-slate-300 text-slate-800">
                  {p.title}
                </h3>
                <a
                  className="py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer"
                  href={p.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  View Code
                </a>
                <p>{p.description}</p>
                <img
                  alt="profile"
                  className="rounded-full w-64 h-64 mx-8"
                  src={p.image}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
