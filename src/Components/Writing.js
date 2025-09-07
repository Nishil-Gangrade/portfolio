// show user: 22bce0119
import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "DDXP Technologies Pvt. Ltd.",
      role: "Data Analytics Intern",
      period: "May 2025 – July 2025",
      location: "Remote",
      bullets: [
        "Handled real-time datasets using Excel, SQL, and Python (Pandas, NumPy).",
        "Restructured raw business data into actionable formats for reporting and dashboards.",
        "Built interactive Power BI dashboards to visualize KPIs and trends.",
      ],
    },
    {
      company: "Cygnus Capital",
      role: "Software Developer Intern",
      period: "May 2024 – July 2024",
      location: "Hybid-Indore",
      bullets: [
        "Developed responsive frontend modules for OPRATE using React, TypeScript & Tailwind.",
        "Optimized component structure, achieving ~20% faster load times.",
        "Integrated trading workflows with improved UX consistency.",
      ],
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <FaBriefcase className="text-2xl text-gray-700" />
        <h1 className="font-semibold text-2xl">Experience</h1>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className="bg-white border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition"
            aria-labelledby={`exp-${i}`}
          >
            {/* Top row: name + period (responsive) */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <h2 id={`exp-${i}`} className="text-lg font-semibold leading-tight">
                  {exp.company}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">{exp.role}</span>
                  <span className="hidden sm:inline"> • </span>
                  <span className="italic text-sm text-gray-500"> {exp.location}</span>
                </p>
              </div>

              {/* period */}
              <div className="text-sm text-gray-500 md:text-right">
                <span className="inline-block md:block">{exp.period}</span>
              </div>
            </div>

            {/* bullets */}
            <ul className="mt-3 md:mt-4 list-disc list-inside text-gray-700 space-y-2 text-sm">
              {exp.bullets.map((b, idx) => (
                <li key={idx} className="leading-snug">
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
