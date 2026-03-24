export default function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl text-center mb-6">
        Contact <span className="text-cyan-400">Me!</span>
      </h2>

      <form className="max-w-3xl mx-auto grid gap-4 p-6 shadow-lg hover:shadow-cyan-100/100 transition">
        <input className="p-3 bg-gray-800 rounded" placeholder="Full Name" />
        <input className="p-3 bg-gray-800 rounded" placeholder="Email" />
        <textarea className="p-3 bg-gray-800 rounded" placeholder="Message"></textarea>

        <button className="bg-cyan-400 text-black py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}