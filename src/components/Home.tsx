// Import images
import emailLogo from "../assets/logo/email-logo.png";
import waLogo from "../assets/logo/wa-logo.png";
import telegramLogo from "../assets/logo/telegram-logo.png";
import linkedinLogo from "../assets/logo/linkedin-logo.png";
import githubLogo from "../assets/logo/github.png";
import myPhoto from "../assets/my-photo.jpeg";
import cvFile from "../assets/Fiorentika-Devasha-Ramadhina-CV.pdf";
interface Contact {
  name: string;
  img: string;
  link: string;
  desc: string;
}

function Home() {
  const contacts: Contact[] = [
    {
      name: "Email",
      img: emailLogo,
      link: "mailto:fiorentikadr@gmail.com",
      desc: "fiorentikadr@gmail.com",
    },
    {
      name: "WhatsApp",
      img: waLogo,
      link: "https://wa.me/+6281230192255",
      desc: "+62 812-3019-2255",
    },
    {
      name: "Telegram",
      img: telegramLogo,
      link: "https://t.me/fiorentkdr",
      desc: "@fiorentkdr",
    },
    {
      name: "LinkedIn",
      img: linkedinLogo,
      link: "https://www.linkedin.com/in/fiorentika-devasha-ramadhina-936788228/",
      desc: "Fiorentika Devasha Ramadhina",
    },
    {
      name: "GitHub",
      img: githubLogo,
      link: "https://github.com/fiorentk",
      desc: "fiorentk",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col items-center gap-12">
      {/* About Me */}
      <div className="w-full flex flex-col md:flex-row items-center gap-8 bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-lg hover:scale-105 transition-all duration-200">
        <img
          src={myPhoto}
          alt="My Photo"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3 text-sky-600">
            Fiorentika Devasha Ramadhina
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5">
            <span className="bg-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              Software Engineer
            </span>
            <span className="bg-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              Backend Enthusiast
            </span>
            <span className="border border-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              ID Indonesia
            </span>
            <span className="border border-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm">
              Remote/WFH Only
            </span>
          </div>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            I’m a junior backend developer with a solid foundation in building
            APIs and working with databases. I’ve gained hands-on experience
            through courses and projects that has strengthened my understanding
            of both backend and frontend, which helps me grasp the full stack.
            I’m passionate about coding and highly motivated to keep learning
            and growing as a backend developer.
          </p>
          <h2 className="text-sky-600 font-semibold mb-3 text-lg">
            Core Expertise:
          </h2>
          <ul className="space-y-2 text-left">
            <li>
              <span className="bg-sky-200 text-sky-700 px-3 py-1 rounded-full text-xs mr-2">
                API Development
              </span>
              Building and testing RESTful APIs
            </li>
            <li>
              <span className="bg-sky-200 text-sky-700 px-3 py-1 rounded-full text-xs mr-2">
                Backend Architecture
              </span>
              Scalable & maintainable system design basics
            </li>
            <li>
              <span className="bg-sky-200 text-sky-700 px-3 py-1 rounded-full text-xs mr-2">
                Authentication & Security
              </span>
              JWT, role-based access, protecting API endpoints
            </li>
          </ul>
        </div>
      </div>

      {/* Education & Work Experience */}
      <div className="w-full flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Education & Work Experience
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {/* Education */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 sm:p-8 w-80 flex flex-col items-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Airlangga University
            </h3>
            <p className="text-gray-700 mb-1 text-center">
              Bachelor's Degree in Statistics
            </p>
            <p className="text-gray-500 text-sm text-center">
              Aug 2018 – Nov 2022 | GPA 3.42/4.00
            </p>
          </div>

          {/* Work Experience 1 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 sm:p-8 w-80 flex flex-col items-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200">
            <h3 className="text-lg font-semibold mb-2 text-center">
              PT Pos Indonesia – Bootcamp Digital Talent II
            </h3>
            <p className="text-gray-700 mb-1 text-center">
              Jan 2024 – Jul 2024
            </p>
          </div>

          {/* Work Experience 2 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 sm:p-8 w-80 flex flex-col items-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200">
            <h3 className="text-lg font-semibold mb-2 text-center">
              PT Pos Indonesia – Reporting Data Analytics
            </h3>
            <p className="text-gray-700 mb-1 text-center">Aug 2024 – Present</p>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div className="w-full flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <p className="mb-8 text-center max-w-md">
          Reach me via Email, WhatsApp, or Telegram. Click the card below to
          contact me.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-5 justify-center">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (contact.name === "Email") {
                  navigator.clipboard.writeText(contact.desc);
                  alert("Email copied to clipboard!");
                } else {
                  window.open(contact.link, "_blank");
                }
              }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200"
            >
              <img
                src={contact.img}
                alt={`${contact.name} Logo`}
                className="w-20 h-20 sm:w-24 sm:h-24 mb-3"
              />
              <span className="text-lg font-semibold">{contact.name}</span>
              <span className="text-sm text-gray-500 mt-1 text-center">
                {contact.desc}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div>
        <a
          href={cvFile}
          download
          className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors"
        >
          Download Full CV Here
        </a>
      </div>
    </div>
  );
}

export default Home;
