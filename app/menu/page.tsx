"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";

type MenuItem = { 
  name: string; 
  desc?: string; 
};

const filipinoCuisine: MenuItem[] = [
  { 
    name: "GARLIC BUTTERED SHRIMPS", 
    desc: "Fresh shrimps sautéed in aromatic garlic butter"
  },
  { 
    name: "BEEF LOMI", 
    desc: "Rich noodle soup with tender beef and fresh vegetables"
  },
  { 
    name: "BISTEK TAGALOG", 
    desc: "Filipino-style beef steak with citrus soy sauce"
  },
  { 
    name: "SALMON STEAK", 
    desc: "Premium salmon fillet with special house seasoning"
  },
  { 
    name: "SIZZLING RIBEYYA STEAK", 
    desc: "Prime ribeye served on a hot plate with signature sauce"
  }
];

const arabicCuisine: MenuItem[] = [
  { 
    name: "SEAFOOD PLATTER", 
    desc: "Assorted fresh seafood grilled to perfection"
  },
  { 
    name: "LE GRAND SPECIAL CHARCOAL", 
    desc: "Our signature charcoal-grilled specialty"
  },
  { 
    name: "LE GRAND SPECIAL SHAWAYA", 
    desc: "Traditional Arabic style roasted meat"
  },
  { 
    name: "MIX GRILL", 
    desc: "Selection of premium grilled meats"
  },
  { 
    name: "LE GRAND MUTTON MANDHI", 
    desc: "Aromatic rice with tender mutton"
  }
];

export default function Page() {
  const orderLabel = "Call for Orders";
  const orderPhoneDisplay = "+971 56 118 3828";
  const orderPhoneHref = "+971561183828";
  const rm = useReducedMotion();
  return (
     <div className="space-y-12">
       <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
         <div>
           <h1 className="text-4xl font-semibold">Our Menu</h1>
           <p className="text-zinc-300">Signature Filipino × Arabic fusion, crafted with Kerala spices.</p>
         </div>
        <div className="flex items-center gap-3">
          <a 
            href={`tel:${orderPhoneHref}`} 
            className="btn bg-gold hover:bg-gold/90 text-ink font-semibold shadow-xl group relative overflow-hidden"
            aria-label={`Call to order ${orderLabel.toLowerCase()}`}
          >
            <div className={rm ? "absolute inset-0 bg-gradient-to-r from-gold/0 to-gold/0" : "absolute inset-0 bg-gradient-to-r from-gold/0 via-white/10 to-gold/0 animate-shimmer"} />
            <Phone size={20} />
            <span>{orderLabel}</span>
          </a>
        </div>
       </header>

      {/* QR Code Section */}
      <section className="card p-8 bg-gradient-to-b from-warmgray to-warmgray/50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gold">Scan QR Code for Full Menu</h2>
            <p className="text-zinc-300">
              Point your phone’s camera at the QR code to view the complete menu with all categories, prices, and specials.
            </p>
            <ul className="text-sm text-zinc-400 space-y-1">
              <li>• Fast access on mobile</li>
              <li>• Always up to date</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <motion.div 
              initial={{ scale: rm ? 1 : 0.95, opacity: rm ? 1 : 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: rm ? 0 : 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-luxury"
            >
              <Image
                src="/menu-qr.jpg"
                alt="QR Code for full menu"
                width={200}
                height={200}
                sizes="200px"
                className="w-[200px] h-[200px]"
              />
            </motion.div>
          </div>
        </div>
      </section>



      {/* Specialties */}
      <section className="card p-6 text-center">
        <p className="text-sm text-zinc-300">We specialize in <span className="text-gold font-medium">Filipino</span> and <span className="text-gold font-medium">Arabic</span> cuisine — our bestselling offerings.</p>
      </section>

      {/* Filipino Cuisine Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gold">Filipino Cuisine</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filipinoCuisine.map((item, idx) => (
            <motion.div
              key={idx}
              initial={rm ? {} : { opacity: 0, y: 12 }}
              whileInView={rm ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={rm ? {} : { duration: 0.4, delay: idx * 0.06 }}
              whileHover={rm ? {} : { y: -2 }}
              className="card p-4 space-y-2"
            >

              <h3 className="font-medium">{item.name}</h3>
              {item.desc && <p className="text-sm text-zinc-400">{item.desc}</p>}

            </motion.div>
          ))}
        </div>
      </section>

      {/* Arabic Cuisine Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gold">Arabic Cuisine</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {arabicCuisine.map((item, idx) => (
            <motion.div
              key={idx}
              initial={rm ? {} : { opacity: 0, y: 12 }}
              whileInView={rm ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={rm ? {} : { duration: 0.4, delay: idx * 0.06 }}
              whileHover={rm ? {} : { y: -2 }}
              className="card p-4 space-y-2"
            >

              <h3 className="font-medium">{item.name}</h3>
              {item.desc && <p className="text-sm text-zinc-400">{item.desc}</p>}

            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
