// "use client";
// import { useState } from "react";
// import Section from "./Section";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Thanks ${formData.name}, your message has been sent!`);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <Section id="contact">
//       <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
//       <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="name">
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-foreground/20 rounded-lg bg-transparent"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="email">
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-foreground/20 rounded-lg bg-transparent"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows={4}
//             required
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 border border-foreground/20 rounded-lg bg-transparent"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
//         >
//           Send Message
//         </button>
//       </form>
//     </Section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" />
          <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border rounded-lg"></textarea>
          <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80">
            Send
          </button>
        </form>
      </motion.div>
    </Section>
  );
}
