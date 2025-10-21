"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Page() {
  const rm = useReducedMotion();
  return (
    <motion.div
      className="prose prose-invert max-w-none"
      initial={rm ? {} : { opacity: 0, y: 8 }}
      animate={rm ? {} : { opacity: 1, y: 0 }}
      transition={rm ? {} : { duration: 0.4 }}
    >
      <h1>Our Story</h1>
      <h2 className="text-gold">Where Flavor Bridges Continents: The Le Grandresto Story</h2>
      <p className="text-zinc-300">In the vibrant heart of Deira, Dubai, brothers Sheikh Muhamed Yoosuf and Sheikh Abdul Rahiman shared a dream — to recreate the comforting taste of home. Born from their nostalgia for Kerala’s rich spices and Arabia’s aromatic traditions, they envisioned a place where every dish carried the warmth of shared memories.</p>

      <h3 className="text-gold">Our Roots</h3>
      <p className="text-zinc-300">Determined to blend Kerala’s authenticity with Arabia’s culinary heritage, they sourced the finest spices directly from Kerala. Each recipe was crafted with patience and passion, ensuring every bite resonated with the flavors of their childhood. Joined by their friend Nazeer, they founded Le Grandresto — not just as a restaurant, but as a tribute to home.</p>

      <h3 className="text-gold">Expanding the Table</h3>
      <p className="text-zinc-300">Through conversations with Dubai’s Filipino community, they uncovered another longing: the absence of authentic Filipino comfort food. Embracing this connection, they welcomed Filipino chefs to their kitchen, weaving another layer of tradition into their menu.</p>

      <h3 className="text-gold">A Place of Belonging</h3>
      <p className="text-zinc-300">Today, Le Grandresto stands as a crossroads of cultures — where Kerala, Arabia, and the Philippines unite around one table. Every dish tells a story, every spice honors heritage, and every meal is a reminder that no matter where you are, home is always within reach.</p>

      <h3 className="text-gold">Visit Us</h3>
      <p className="text-zinc-300">Experience the journey of flavors at Le Grandresto, where the taste of home meets the heart of Dubai.</p>

      <h2 className="text-gold">What we focus on</h2>
      <ul className="text-zinc-300 list-disc pl-6 marker:text-gold">
        <li>Premium ingredients and Kerala spice profiles</li>
        <li>Filipino–Arabic fusion done with respect and craft</li>
        <li>Friendly hospitality in a modern, warm space</li>
      </ul>
    </motion.div>
  );
}
