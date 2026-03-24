import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Personal() {
  return (
    <section className="p-7 bg-[#0f172a] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Personal <span className="text-cyan-400">Details</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/30 transition">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Name */}
          <div className="flex items-center gap-3">
            <FaUser className="text-cyan-400 text-xl" />
            <p><span className="font-semibold">Name:</span> Dinesh</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400 text-xl" />
            <p><span className="font-semibold">Email:</span> dineshkumarkrovvidi@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhone className="text-cyan-400 text-xl" />
            <p><span className="font-semibold">Phone:</span> +91 94918 25377 </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            <p><span className="font-semibold">Location:</span> India</p>
          </div>

        </div>
      </div>
    </section>
  );
}