import { motion } from "framer-motion";

export default function Skill2() {
  const skills = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    },
    {
      title: "Backend",
      items: ["Python (Django)", "Node.js (Express)"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB"],
    },
  ];

  return (
    <section className="p-10 bg-[#0f172a] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/40 transition"
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              {skill.title}
            </h3>

            <ul className="space-y-2 text-gray-300">
              {skill.items.map((item, index) => (
                <li key={index} className="hover:text-white transition">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}