import { useEffect, useState } from "react";

// ---------------- Inline icons (no external dependency) ----------------
function Github(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}
function Linkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}
function Code2(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
    </svg>
  );
}
function Mail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    </svg>
  );
}
function Phone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function PenLine(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={props.size || 18} height={props.size || 18} {...props}>
      <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

const C = {
  paper: "#F6F1E4",
  paper2: "#EFE7D3",
  ink: "#2B2320",
  inkDim: "#6B6152",
  line: "#DED2B8",
  coral: "#B54834",
  teal: "#2F7A6F",
  mustard: "#D9A441",
  stamp: "#C1443B",
};

const LINKS = {
  github: "https://github.com/DayaGupta22",
  linkedin: "https://www.linkedin.com/in/dayanand-kumar-gupta",
  leetcode: "https://leetcode.com/u/Dayagupta12/",
  gfg: "https://www.geeksforgeeks.org/profile/dayanandkum8hmu",
  email: "dayanandkumargupta08@gmail.com",
  phone: "+91-7780043405",
};

const PROJECTS = [
  {
    title: "Work Finder",
    live: "https://work-finder-m7mo.onrender.com/",
    color: C.teal,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    problem: "Job seekers need a reliable way to browse listings and track applications in one place.",
    approach:
      "Architected a job portal handling 50+ concurrent users, with a MongoDB backend for complex listing queries, Zod for strict schema validation, and JWT-based role-based access control.",
  },
  {
    title: "Employee Management System with JWT Authentication",
    live: "https",
    color: C.coral,
    tags: ["React.js", "Tailwind CSS", "Monaco Editor"],
    problem: "Secure Employee Management System with JWT Authentication using Spring Boot",
    approach:
      "Developed a secure Employee Management System using Spring Boot to manage employee records with JWT authentication, CRUD operations, MySQL integration, pagination, sorting, and search, ensuring secure and efficient data management.",
  },
  {
    title: "AI Interview Simulator",
    live: "https:",
    tags: ["React.js", "Redux", "Tailwind CSS","MongoDB"],
    problem: "AI Interview Simulator that analyzes resumes against job descriptions and generates personalized interview questions using Generative AI",
    approach:
      "Developed an AI Interview Simulator using React.js, Node.js, Express.js, MongoDB, and Generative AI. Built features for resume parsing, job-description matching, skill-gap analysis, AI-generated interview questions, and personalized feedback. Designed responsive user interfaces and scalable REST APIs to deliver an interactive interview practice experience with learn",
  },
];

// ---------------- Hand-drawn hero diagram ----------------
function ProcessDiagram() {
  const steps = ["PROBLEM", "THINK", "CODE", "SHIP"];
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <svg viewBox="0 0 900 170" className="w-full h-auto max-w-[620px]">
      {steps.map((s, i) => {
        const x = 30 + i * 230;
        const rot = i % 2 === 0 ? -1.2 : 1.5;
        return (
          <g key={s} style={{ transformOrigin: `${x + 75}px 50px` }} transform={`rotate(${rot})`}>
            <rect
              x={x}
              y={12}
              width={150}
              height={76}
              rx={4}
              fill={C.paper}
              stroke={C.ink}
              strokeWidth={2.5}
              style={{
                opacity: drawn ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 0.5}s`,
              }}
            />
            <text
              x={x + 75}
              y={57}
              textAnchor="middle"
              fontFamily="'Kalam', cursive"
              fontSize="22"
              fill={C.ink}
              style={{
                opacity: drawn ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 0.5 + 0.15}s`,
              }}
            >
              {s}
            </text>
          </g>
        );
      })}
      {[0, 1, 2].map((i) => {
        const x1 = 30 + i * 230 + 150;
        const x2 = 30 + (i + 1) * 230;
        return (
          <g key={i}>
            <path
              d={`M ${x1 + 4} 50 Q ${(x1 + x2) / 2} ${i % 2 === 0 ? 25 : 75} ${x2 - 6} 50`}
              fill="none"
              stroke={C.coral}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeDasharray={100}
              strokeDashoffset={drawn ? 0 : 100}
              style={{ transition: `stroke-dashoffset 0.6s ease ${i * 0.5 + 0.35}s` }}
            />
            <path
              d={`M ${x2 - 14} ${50 - 7} L ${x2 - 4} 50 L ${x2 - 14} ${50 + 7}`}
              fill="none"
              stroke={C.coral}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                opacity: drawn ? 1 : 0,
                transition: `opacity 0.3s ease ${i * 0.5 + 0.9}s`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function Stamp({ children, rotate = -6, color = C.stamp }) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-full border-[3px] px-5 py-3 font-mono text-center leading-tight whitespace-pre-line"
      style={{
        borderColor: color,
        color: color,
        transform: `rotate(${rotate}deg)`,
        fontSize: "0.72rem",
        letterSpacing: "0.03em",
      }}
    >
      {children}
    </div>
  );
}

function StickyNote({ title, tags, color, rotate }) {
  return (
    <div
      className="rounded-sm p-5 shadow-[3px_4px_0_rgba(43,35,32,0.12)]"
      style={{ backgroundColor: color, transform: `rotate(${rotate}deg)` }}
    >
      <h4 className="font-mono text-[0.72rem] uppercase tracking-wide mb-3" style={{ color: C.ink, opacity: 0.65 }}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        {tags.map((t) => (
          <span key={t} className="text-[0.95rem]" style={{ fontFamily: "'Kalam', cursive", color: C.ink }}>
            {t}
            {","}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndexCard({ children, rotate = 0, className = "" }) {
  return (
    <div
      className={`rounded-sm border p-6 md:p-8 shadow-[4px_5px_0_rgba(43,35,32,0.08)] ${className}`}
      style={{ backgroundColor: C.paper2, borderColor: C.line, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      className="inline-block mb-6 px-1"
      style={{
        fontFamily: "'Kalam', cursive",
        fontSize: "1.9rem",
        color: C.ink,
        borderBottom: `4px solid ${C.mustard}`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: C.paper,
        color: C.ink,
        fontFamily: "'Inter', sans-serif",
        backgroundImage: `radial-gradient(${C.line} 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b backdrop-blur-sm" style={{ borderColor: C.line, backgroundColor: "rgba(246,241,228,0.85)" }}>
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2" style={{ fontFamily: "'Kalam', cursive", fontSize: "1.4rem" }}>
            <PenLine size={18} style={{ color: C.coral }} />
            Dayanand's notebook
          </div>
          <div className="hidden md:flex items-center gap-3" style={{ color: C.inkDim }}>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:opacity-70"><Github size={18} /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-70"><Linkedin size={18} /></a>
            <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="hover:opacity-70"><Code2 size={18} /></a>
            <a href={`mailto:${LINKS.email}`} className="hover:opacity-70"><Mail size={18} /></a>
          </div>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 md:px-10">
        {/* HERO */}
        <section className="py-16 md:py-24">
          <p className="font-mono text-[0.78rem] mb-3" style={{ color: C.teal }}>
            — page 1, hi there
          </p>
          <h1 className="mb-3" style={{ fontFamily: "'Kalam', cursive", fontSize: "clamp(2.4rem, 6vw, 3.6rem)", lineHeight: 1.1 }}>
            Hi, I'm Dayanand.
          </h1>
          <p className="text-lg md:text-xl max-w-[560px] mb-10" style={{ color: C.inkDim }}>
            A MERN stack developer, fresh out of college — I solve the problem on paper before I ever open the editor.
          </p>
          <ProcessDiagram />
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-sm font-mono text-sm"
              style={{ backgroundColor: C.ink, color: C.paper }}
            >
              See my work →
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="px-6 py-3 rounded-sm font-mono text-sm border-2"
              style={{ borderColor: C.ink, color: C.ink }}
            >
              Say Hello
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-12 md:py-16">
          <SectionLabel>about me</SectionLabel>
          <IndexCard rotate={-0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <p className="md:col-span-2" style={{ color: C.inkDim, fontSize: "1.02rem", lineHeight: 1.75 }}>
                I'm a <strong style={{ color: C.ink }}>B.Tech CSE graduate</strong> from Rvs College Of Engineering And Technology , Jamshedpur, currently working as a{" "}
                <strong style={{ color: C.ink }}>Frontend Developer Intern at BlueStock.in</strong>. There I spearheaded
                scalable features for a Matrimonial App and a Job Platform on the MERN stack — coordinating a team of 4 and
                shipping REST APIs that cut backend response times by 20%.
                <br />
                <br />
                I spend a lot of time on <strong style={{ color: C.ink }}>DSA</strong>: 250+ problems on GeeksforGeeks
                (Institute Rank 20) and 250+ on LeetCode. I think good development starts with good reasoning — that's the
                habit behind how I break down features and design APIs.
              </p>
              <div className="flex flex-col gap-4 justify-center">
                <Stamp rotate={-8}>{"RANK 20\nGFG"}</Stamp>
                <Stamp rotate={5} color={C.teal}>{"250+\nLEETCODE"}</Stamp>
              </div>
            </div>
          </IndexCard>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12 md:py-16">
          <SectionLabel>what's on my desk</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StickyNote title="Languages" tags={["C++", "JavaScript (ES6+)", "HTML5", "CSS3","JAVA"]} color="#F0DFA0" rotate={-1.5} />
            <StickyNote title="Technologies" tags={["React.js", "Node.js","Spring Boot", "Express.js", "MongoDB", "MySQL", "Redux", "Tailwind"]} color="#C9E4DB" rotate={1} />
            <StickyNote title="Developer Tools" tags={["Git", "GitHub", "Postman", "Vercel", "Render","DBeaver"]} color="#F0CFC0" rotate={0.8} />
            <StickyNote title="Coursework" tags={["DSA", "DBMS", "OOP", "Operating Systems", "Computer Networks"]} color="#DCE0EF" rotate={-0.8} />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-12 md:py-16">
          <SectionLabel>things i've built</SectionLabel>
          <div className="space-y-6">
            {PROJECTS.map((p, i) => (
              <IndexCard key={p.title} rotate={i % 2 === 0 ? 0.4 : -0.4}>
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <h3 style={{ fontFamily: "'Kalam', cursive", fontSize: "1.6rem", color: p.color }}>{p.title}</h3>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs px-3 py-1.5 rounded-sm border-2 whitespace-nowrap"
                    style={{ borderColor: p.color, color: p.color }}
                  >
                    visit live ↗
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" style={{ color: C.inkDim }}>
                  <div>
                    <div className="font-mono text-[0.68rem] uppercase mb-1" style={{ color: p.color }}>the problem</div>
                    <p className="text-[0.95rem]">{p.problem}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[0.68rem] uppercase mb-1" style={{ color: p.color }}>the approach</div>
                    <p className="text-[0.95rem]">{p.approach}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[0.72rem] px-2 py-1 rounded-sm" style={{ backgroundColor: C.paper, color: C.inkDim, border: `1px solid ${C.line}` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </IndexCard>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-12 md:py-16">
          <SectionLabel>the timeline</SectionLabel>
          <div style={{ borderLeft: `2px dashed ${C.line}` }} className="pl-8 space-y-10">
            {[
              {
                title: "Frontend Developer - BlueStock.in",
                meta: "May 2025 – July 2025 · Remote",
                desc: "Developed responsive and reusable React.js components from UI/UX designs, built modern interfaces using Tailwind CSS, integrated RESTful APIs for seamless frontend-backend communication, and collaborated with cross-functional teams using Git and Agile methodologies to deliver scalable, high-performance applications with improved user experience, responsiveness, and maintainable code.",
              },
              {
                title: "B.Tech, Computer Science and Engineering",
                meta: "RVSCET , Jamshedpur · Nov 2022 – July 2026 · CGPA 8.01",
                desc: "",
              },
              {
                title: "Intermediate",
                meta: "Marwari College, Ranchi · June 2022 · 86.20%",
                desc: "",
              },
            ].map((item) => (
              <div key={item.title} className="relative">
                <span
                  className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2"
                  style={{ backgroundColor: C.paper, borderColor: C.coral }}
                />
                <h4 style={{ fontFamily: "'Kalam', cursive", fontSize: "1.3rem" }}>{item.title}</h4>
                <div className="font-mono text-[0.75rem] mb-2" style={{ color: C.teal }}>{item.meta}</div>
                {item.desc && <p style={{ color: C.inkDim }}>{item.desc}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 md:py-24">
          <IndexCard rotate={-0.5} className="text-center md:text-left">
            <h2 style={{ fontFamily: "'Kalam', cursive", fontSize: "2.2rem" }} className="mb-3">
              Got something worth building?
            </h2>
            <p style={{ color: C.inkDim }} className="mb-6 max-w-[520px]">
              Open to full-time roles and interesting problems. Fastest way to reach me is email.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start justify-center md:justify-start">
              <a href={`mailto:${LINKS.email}`} className="flex items-center gap-2 font-mono text-sm" style={{ color: C.coral }}>
                <Mail size={16} /> {LINKS.email}
              </a>
              <a href={`tel:${LINKS.phone}`} className="flex items-center gap-2 font-mono text-sm" style={{ color: C.inkDim }}>
                <Phone size={16} /> {LINKS.phone}
              </a>
            </div>
          </IndexCard>
        </section>
      </main>

      <footer className="max-w-[1000px] mx-auto px-6 md:px-10 pb-10 font-mono text-[0.72rem]" style={{ color: C.inkDim }}>
        © 2026 Dayanand Kumar Gupta — sketched, then shipped.
      </footer>
    </div>
  );
}