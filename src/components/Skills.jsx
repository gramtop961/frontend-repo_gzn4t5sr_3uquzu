const skills = {
  Frontend: [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 / Tailwind', level: 90 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 80 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 82 },
    { name: 'FastAPI', level: 80 },
    { name: 'Express', level: 78 },
  ],
  'Database & DevOps': [
    { name: 'MongoDB', level: 82 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Docker', level: 72 },
    { name: 'AWS', level: 68 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills & Technologies</h2>
          <p className="mt-2 text-gray-600">Solid foundations with focus on performance, DX, and maintainability.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{group}</h3>
              <ul className="mt-5 space-y-4">
                {list.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${skill.level}%` }}
                        aria-label={`${skill.name} proficiency ${skill.level}%`}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
