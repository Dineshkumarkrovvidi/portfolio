import { motion } from "framer-motion";

export default function Home() {
  return (
    <section  style={{backgroundImage:'url("image.png")',backgroundSize:"cover"}}className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">

      {/* LEFT */}
      <div className="max-w-xl">
        <h2 className="text-gray-400 text-lg">Hello, It's Me</h2>

        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Dinesh
        </h1>

        <h3 className="text-xl mt-3">
          And I'm a{" "}
          <span className="text-cyan-400 font-semibold">
            Frontend Developer
          </span>
        </h3>

        <p className="mt-4 text-gray-300 leading-relaxed">
          I build modern, responsive web applications using React and Django.
          Passionate about creating clean UI and smooth user experiences.
        </p>

        <button className="mt-6 px-6 py-2 bg-cyan-400 text-black rounded-full hover:scale-105 transition shadow-lg hover:shadow-cyan-400/50">
          Download CV
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative flex justify-center"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Glow */}
        <div className="w-72 h-72 bg-cyan-400 blur-3xl absolute rounded-full opacity-40"></div>

        {/* Image */}
        <img
          src="wall - Copy.jpg"
          alt="profile"
          className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl relative z-10 border-4 border-cyan-400 shadow-xl"
        />
      </motion.div>

    </section>
  );
}