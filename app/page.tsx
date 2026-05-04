export default function Page() {
  const faqs = [
    {
      q: "How does it detect dead stock?",
      a: "It analyzes your Shopify sales velocity, inventory turnover rate, and trend data over the past 90–365 days to flag SKUs with near-zero sell-through probability."
    },
    {
      q: "What Shopify plan do I need?",
      a: "Any paid Shopify plan works. You connect via OAuth and we read your orders and inventory — no write access required."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your Lemon Squeezy dashboard at any time. No contracts, no questions."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Shopify Inventory Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find products that will{" "}
          <span className="text-[#58a6ff]">never sell again</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Deadstock Detector analyzes your Shopify sales velocity and inventory turnover to surface slow-moving SKUs — then gives you a liquidation plan with ROI calculations.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required · 14-day free trial</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ["500+", "SKUs supported"],
            ["90–365d", "Sales window analysis"],
            ["ROI", "Liquidation calculator"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6">Everything you need to stop bleeding cash on dead inventory</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited SKU analysis",
              "Sales velocity scoring",
              "Inventory turnover reports",
              "Liquidation ROI calculator",
              "Weekly email digest",
              "Shopify OAuth — read-only"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started — $15/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">14-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Deadstock Detector. Built for Shopify store owners.
      </footer>
    </main>
  );
}
