export default function Services() {
  const services = [
    "Web Development",
    "MERN stack trainer",
    "Full Stack Python trainer",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl text-center mb-8">
        Our <span className="text-cyan-400">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-[#1e293b] rounded-xl text-center hover:scale-105 transition hover:shadow-cyan-400/40 hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{s}</h3>
            <p className="text-gray-400 mt-2">
              i have 3+ year of experiences on {s} 
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}