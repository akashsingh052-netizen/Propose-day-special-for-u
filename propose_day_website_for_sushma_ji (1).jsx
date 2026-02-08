import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const meetDate = new Date("2026-01-22T22:30:00");

export default function ProposeDaySite() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState("");
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      const diff = new Date() - meetDate;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      setTimer(`${d} Days ${h} Hours ${m} Minutes`);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const moveNo = () => {
    setNoPos({
      x: Math.random() * 500 - 250,
      y: Math.random() * 350 - 170,
    });
  };

  const checkName = () => {
    if (name.toLowerCase() !== "sushma") setError("Only Sushma Ji can open this 💖");
    else { setError(""); setStep(2); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-300 flex flex-col items-center justify-center p-6 text-center space-y-6 overflow-hidden">

      {step === 0 && (
        <motion.div animate={{ scale: [0, 1.5, 1] }} transition={{ duration: 1 }} onClick={() => setStep(1)} className="text-8xl cursor-pointer">🎁</motion.div>
      )}

      {step === 1 && (
        <div className="bg-white p-6 rounded-3xl shadow-xl space-y-3">
          <p>Write your name 💝</p>
          <input className="border p-2 rounded-xl" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={checkName} className="bg-red-500 text-white px-4 py-2 rounded-full">Open</button>
          {error && <p className="text-red-600">{error}</p>}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <motion.div animate={{ scale: [0, 1.4, 1] }} className="text-6xl">🧚‍♀️ Fairy has arrived!</motion.div>
          <div className="text-2xl font-bold">{timer}</div>
          <p>Since 22 Jan 2026 at 10:30 PM</p>
          <button onClick={() => setStep(3)} className="bg-pink-500 text-white px-6 py-2 rounded-full">Next 💖</button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 relative h-48">
          <div className="text-6xl">🤵🌹</div>
          <p className="text-xl font-semibold">Will you accept my proposal Sushma Ji? 💍</p>

          <button onClick={() => setStep(4)} className="bg-red-500 text-white px-6 py-2 rounded-full">Yes ❤️</button>

          <motion.button
            animate={noPos}
            transition={{ duration: 0.25 }}
            onMouseEnter={moveNo}
            onMouseMove={moveNo}
            onTouchStart={moveNo}
            className="bg-gray-400 text-white px-6 py-2 rounded-full absolute"
          >
            No 🙈
          </motion.button>

          <p className="text-sm italic">Try catching the No button 😄</p>
        </div>
      )}

      {step === 4 && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(35)].map((_, i) => (
            <motion.div key={i} initial={{ y: "100%", x: Math.random() * window.innerWidth }} animate={{ y: "-10%" }} transition={{ duration: 4 }} className="absolute text-3xl">🌸🦋</motion.div>
          ))}
          <motion.div onClick={() => setStep(5)} className="text-8xl cursor-pointer mt-40 pointer-events-auto">❤️</motion.div>
          <p className="pointer-events-auto">Tap the heart 💖</p>
        </div>
      )}

      {step === 5 && (
        <div className="bg-white p-6 rounded-3xl shadow-xl space-y-2 max-w-md">
          <p>Your smile is my happiness 😊</p>
          <p>Your beauty lights my world ✨</p>
          <p>Your eyes hold dreams 💕</p>
          <p>Your voice feels magical 🎶</p>
          <p>Your nature is pure 🌸</p>
          <p>Your kindness inspires me 💫</p>
          <p>Your laughter heals me 😍</p>
          <p>Your presence brings peace 🕊️</p>
          <p>Your heart is precious ❤️</p>
          <p>You are my blessing 🌹</p>
          <button onClick={() => setStep(6)} className="bg-pink-500 text-white px-4 py-2 rounded-full">Next 💌</button>
        </div>
      )}

      {step === 6 && (
        <div className="bg-white p-6 rounded-3xl shadow-xl space-y-2">
          <p>🎬 Movie: Sita Ramam</p>
          <p>🥟 Snack: Momos</p>
          <p>🏔️ Place: Nepal</p>
          <p>🍫 Chocolate: Dairy Milk</p>
          <p>💍 Wearable: Glass Bangles</p>
          <button onClick={() => setStep(7)} className="bg-red-500 text-white px-4 py-2 rounded-full">Continue ❤️</button>
        </div>
      )}

      {step === 7 && (
        <div className="space-y-3 bg-white p-6 rounded-3xl shadow-xl max-w-md">
          <p className="text-lg font-semibold">🌹 Shayari 🌹</p>
          <p>
            तेरी हँसी में मेरी सुबह बसती है,
            तेरी बातों में मेरी शाम ढलती है,
            तू पास हो तो हर दर्द मिट जाता है,
            तेरी एक झलक में मेरी दुनिया बसती है।
            
            तू मेरा सुकून है, तू मेरी दुआ है,
            तेरे बिना हर खुशी अधूरी सी लगती है,
            हर सांस में बस तेरा नाम चलता है ❤️
          </p>
          <p className="italic">"You are my most beautiful destiny 💫"</p>
          <footer className="font-semibold">Thank you Sushma Ji 🌸</footer>
          <button onClick={() => setStep(0)} className="bg-pink-400 text-white px-4 py-2 rounded-full">Close 🌷</button>
        </div>
      )}

    </div>
  );
}
