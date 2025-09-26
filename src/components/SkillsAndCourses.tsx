import React from "react";

interface Skill {
  title: string;
  img: string;
  img2?: string;
  img3?: string;
  points: string[];
}

interface Course {
  title: string;
  link: string;
}

function SkillsAndCourses() {
  const skills: Skill[] = [
    {
      title: "Python",
      img: "src/assets/logo/python-logo.png",
      points: [
        "Write clean, maintainable Python code.",
        "Work with scripts, modules, and packages.",
      ],
    },
    {
      title: "FastAPI",
      img: "src/assets/logo/fastapi-logo.png",
      points: [
        "Build RESTful APIs with FastAPI & Pydantic.",
        "Handle request validation and serialization.",
      ],
    },
    {
      title: "JWT / Security",
      img: "src/assets/logo/jwt-logo.png",
      points: [
        "Implement JWT-based authentication & authorization.",
        "Secure API endpoints and sensitive data.",
      ],
    },
    {
      title: "HTML",
      img: "src/assets/logo/html5-logo.png",
      points: [
        "Write semantic and structured HTML markup.",
        "Structure content efficiently for SEO and accessibility.",
      ],
    },
    {
      title: "CSS / Tailwind",
      img: "src/assets/logo/tailwind-logo.png",
      points: [
        "Style websites with CSS & Tailwind for responsive design.",
        "Use utility classes for quick UI development.",
      ],
    },
    {
      title: "JS / TS",
      img: "src/assets/logo/js-logo.png",
      img2: "src/assets/logo/ts-logo.png",
      points: [
        "Write interactive web functionalities.",
        "Use TypeScript for type safety and maintainable code.",
      ],
    },
    {
      title: "React",
      img: "src/assets/logo/react-logo.png",
      points: [
        "Build component-based UIs.",
        "Manage state and props efficiently.",
        "Integrate with APIs for dynamic data.",
      ],
    },
    {
      title: "Version Control (Git)",
      img: "src/assets/logo/github.png",
      points: [
        "Familiar with version control fundamentals: Git/GitHub, repos, commits, branches, pull requests.",
      ],
    },
    {
      title: "Docker",
      img: "src/assets/logo/docker-logo.png",
      points: ["Build, run, and manage images and containers using Docker."],
    },
    {
      title: "Linux Commands and Shell Scripting",
      img: "src/assets/logo/linux-command-logo.png",
      points: [
        "Linux basics, package management, and Bash commands.",
        "Shell scripting with variables, pipes, filters, and cron jobs.",
      ],
    },
    {
      title: "Databases",
      img: "src/assets/logo/mysql-logo.png",
      img2: "src/assets/logo/postgresql-logo.png",
      img3: "src/assets/logo/msqls-logo.png",
      points: [
        "Write optimized SQL queries for MySQL, PostgreSQL, MSSQL, Redshift.",
        "Create schemas, views, indexes, and optimize query performance.",
      ],
    },
    {
      title: "Figma",
      img: "src/assets/logo/figma-logo.png",
      points: [
        "Design wireframes, mockups, and UI components.",
        "Collaborate and prototype using Figma tools.",
      ],
    },
  ];

  const courses: Course[] = [
    {
      title: "IBM Data Science Professional Certificate",
      link: "https://drive.google.com/drive/folders/1-M90IsxKI9EnTzd16UZQMAa-h__uRdWm?usp=drive_link",
    },
    {
      title: "The Ultimate MySQL Bootcamp",
      link: "https://drive.google.com/file/d/1sqJQcbSgrww1QLOOH0sFsqrKgvEzJsqL/view?usp=drive_link",
    },
    {
      title: "Introduction to Software Engineering",
      link: "https://drive.google.com/file/d/1cPvE2PdyFaNXsn3g1mO-8OBp5iM1p2cH/view?usp=drive_link",
    },
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting",
      link: "https://drive.google.com/file/d/1kYYzMQ7cEd9vjdEK-Tz6scmG12JzzpJz/view?usp=drive_link",
    },
    {
      title: "Getting Started with Git and GitHub",
      link: "https://drive.google.com/file/d/1Wm27hXAswvRA_F52Vtkb7f1ay_L3ZlBk/view?usp=drive_link",
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      link: "https://drive.google.com/file/d/1VnW9dpYco0ybUXbWNrIafpww1Wqr_0Ew/view?usp=drive_link",
    },
    {
      title: "UI UX Mastery: Website & Mobile Apps with Figma",
      link: "https://drive.google.com/file/d/129_8wdAU40-JyEIBfReL4nqxshQfx1XL/view?usp=drive_link",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 w-60 text-center hover:shadow-lg hover:border-sky-500 hover:scale-105 transition-all duration-200"
          >
            <div className="flex justify-center gap-2 mb-3">
              <img
                src={skill.img}
                alt={`${skill.title} Logo`}
                className="h-12 object-contain"
              />
              {skill.img2 && (
                <img src={skill.img2} alt="" className="h-12 object-contain" />
              )}
              {skill.img3 && (
                <img src={skill.img3} alt="" className="h-12 object-contain" />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
            <ul className="text-gray-800 text-sm text-left list-disc pl-5 space-y-1">
              {skill.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-3xl font-bold mb-6 text-center">
        Course Certificates
      </h2>
      <ul className="space-y-3 max-w-xl mx-auto">
        {courses.map((course, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 hover:shadow-lg hover:border-sky-500 transition-all duration-200"
          >
            <span className="text-sm font-medium">{course.title}</span>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 font-semibold hover:underline flex items-center gap-1"
            >
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 3h7m0 0v7m0-7L10 14"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsAndCourses;
