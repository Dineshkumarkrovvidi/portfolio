import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "SkillFunded Website",
      desc: "A platform offering multiple courses with modern UI and deployment on Vercel.",
      link: "https://skillfunded.vercel.app/",
    },
     {
      title: "Student Attedence Mangement sytem",
      desc: "A platform manage student attedance with help of modern UI and Django for backend",
      link: "https://attedance-frontend-mocha.vercel.app/",
    },
    {
      title: "Flowers & gift Delivery app",
      desc: "A platform manage flowers and gift delivery like a ecomerce site" ,
      link: "",
    },
  ];

  return (
    <section className="p-10 bg-[#0f172a] text-white">
      <h2 className="text-3xl text-center mb-10 font-bold">
        Latest <span className="text-cyan-400">Project</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/40 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>

            <p className="text-gray-300 text-sm mb-4">
              {p.desc}
            </p>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-cyan-400 text-black rounded-full text-sm font-medium hover:bg-cyan-300 transition"
            >
              Explore →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}