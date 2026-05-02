"use client";

import { useState } from "react";
import { Activity, ShieldCheck, User, MapPin, CigaretteOff, Baby, Calculator, Loader2, Coins } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    age: "",
    sex: "male",
    bmi: "",
    children: "0",
    smoker: "no",
    region: "southeast",
  });

  const [loading, setLoading] = useState(false);
  const [basePrediction, setBasePrediction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currency, setCurrency] = useState<"USD" | "INR" | "EUR">("USD");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setBasePrediction(null);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          age: parseFloat(formData.age),
          sex: formData.sex,
          bmi: parseFloat(formData.bmi),
          children: parseInt(formData.children),
          smoker: formData.smoker,
          region: formData.region,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setBasePrediction(data.prediction);
      } else {
        setError(data.error || "Failed to predict. Please try again.");
      }
    } catch (err) {
      setError("Cannot connect to server. Ensure the Flask backend is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  // Currency Conversion Rates (Approximate)
  const rates = {
    USD: 1,
    INR: 83.5,
    EUR: 0.92,
  };

  const symbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
  };

  const displayPrediction = basePrediction ? basePrediction * rates[currency] : null;

  return (
    <div className="flex-1 bg-[#09090b] text-white flex items-center justify-center p-4 relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 relative z-10">
        {/* Left Column: Form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Activity size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Health Predict</h1>
              <p className="text-sm text-white/50">Estimate your insurance costs</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <User size={14} /> Age
                </label>
                <input
                  required
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 28"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <User size={14} /> Sex
                </label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <Activity size={14} /> BMI
                </label>
                <input
                  required
                  type="number"
                  step="0.1"
                  name="bmi"
                  value={formData.bmi}
                  onChange={handleChange}
                  placeholder="e.g. 25.4"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <Baby size={14} /> Children
                </label>
                <input
                  required
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  placeholder="e.g. 0"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <CigaretteOff size={14} /> Smoker
                </label>
                <select
                  name="smoker"
                  value={formData.smoker}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <MapPin size={14} /> Region
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none"
                >
                  <option value="southeast">South India</option>
                  <option value="southwest">West India</option>
                  <option value="northeast">East India</option>
                  <option value="northwest">North India</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl px-4 py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator size={20} className="group-hover:scale-110 transition-transform" />
                  Predict Insurance Cost
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Results */}
        <div className="flex flex-col justify-center">
          {displayPrediction !== null ? (
            <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-xl animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit">
                  <ShieldCheck size={28} />
                </div>
                
                {/* Currency Selector */}
                <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                  {(["USD", "INR", "EUR"] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                        currency === curr 
                        ? "bg-white/20 text-white shadow-sm" 
                        : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
              
              <h2 className="text-lg font-medium text-white/70 mb-2">Estimated Annual Charge</h2>
              <div className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6 flex items-baseline gap-2">
                <span className="text-3xl text-white/40">{symbols[currency]}</span>
                {displayPrediction.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                This prediction is based on your age, BMI, and other factors using a machine learning model trained on historical medical insurance data.
              </p>
            </div>
          ) : error ? (
            <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-8 backdrop-blur-xl animate-in fade-in slide-in-from-right-8">
              <h2 className="text-lg font-medium text-red-400 mb-2">Error</h2>
              <p className="text-red-400/80 text-sm leading-relaxed">{error}</p>
            </div>
          ) : (
            <div className="hidden md:flex flex-col items-center justify-center text-center p-8 opacity-40">
              <Activity size={48} className="mb-4" />
              <p className="text-sm">Enter your details and click predict to see your estimated insurance cost.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
