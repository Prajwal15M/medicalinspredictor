import { Shield, Star, Users, Building, ArrowRight } from "lucide-react";

export default function Companies() {
  const companies = [
    {
      name: "Life Insurance Corporation of India (LIC)",
      description: "India's largest and oldest life insurance company, fully state-owned, commanding the majority of the market share with immense trust.",
      features: ["Sovereign Guarantee", "Largest Network", "High Claim Settlement"],
      rating: 4.8,
    },
    {
      name: "HDFC Life",
      description: "A leading long-term life insurance solutions provider in India, offering a range of individual and group insurance solutions.",
      features: ["Innovative Products", "Digital First", "Excellent Claim Ratio"],
      rating: 4.7,
    },
    {
      name: "SBI Life Insurance",
      description: "A joint venture between State Bank of India and BNP Paribas Cardif. Known for strong rural presence and reliable bancassurance.",
      features: ["Wide Reach", "Affordable Premiums", "Strong Financials"],
      rating: 4.6,
    },
    {
      name: "ICICI Prudential Life",
      description: "Consistently among the top private sector life insurance companies in India, focusing heavily on unit-linked insurance plans.",
      features: ["Customer Centric", "Strong Fund Performance", "Quick Claims"],
      rating: 4.6,
    },
    {
      name: "Max Life Insurance",
      description: "A prominent private life insurance company known for its comprehensive life insurance and retirement solutions.",
      features: ["High Claim Settlement Ratio", "Customizable Plans", "Great Support"],
      rating: 4.7,
    },
  ];

  return (
    <div className="flex-1 w-full relative overflow-hidden py-12">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Top Insurance Providers in India</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover the most trusted and highly-rated insurance companies to secure your family's future after estimating your costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition-colors group flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                  <Building size={24} />
                </div>
                <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{company.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{company.name}</h3>
              <p className="text-white/60 text-sm mb-6 flex-1 leading-relaxed">
                {company.description}
              </p>

              <div className="space-y-2 mb-6">
                {company.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                    <Shield size={14} className="text-emerald-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white/5 hover:bg-emerald-500 hover:text-black border border-white/10 hover:border-emerald-500 text-white rounded-xl py-3 text-sm font-semibold transition-all flex items-center justify-center gap-2 group/btn">
                Learn More
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
