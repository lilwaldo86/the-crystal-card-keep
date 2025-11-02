import React, { useState } from 'react'

const Box: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div style={{
    border: '1px solid #e5e7eb',
    borderRadius: 16,
    padding: 20,
    background: '#fff',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
  }}>
    <div style={{ fontWeight: 700, color: '#111827', fontSize: 18 }}>{title}</div>
    <div style={{ color: '#6b7280', fontSize: 14, marginTop: 6 }}>{subtitle}</div>
  </div>
)

export default function App() {
  const [tab, setTab] = useState<'home' | 'market' | 'seller' | 'contact'>('home')

  const navBtn = (key: typeof tab, label: string) => (
    <button
      onClick={() => setTab(key)}
      style={{
        padding: '8px 12px',
        borderRadius: 10,
        border: '1px solid #e5e7eb',
        background: tab === key ? '#111827' : '#fff',
        color: tab === key ? '#fff' : '#111827',
        fontSize: 14
      }}
    >
      {label}
    </button>
  )

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        position: 'sticky', top: 0, zIndex: 10, background: '#ffffffcc',
        backdropFilter: 'blur(6px)', borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '12px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ fontWeight: 900, fontSize: 18, color: '#111827' }}>The Crystal Card Keep</div>
          <nav style={{ display: 'flex', gap: 8 }}>
            {navBtn('home', 'Home')}
            {navBtn('market', 'Marketplace')}
            {navBtn('seller', 'Seller')}
            {navBtn('contact', 'Contact')}
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, maxWidth: 1120, margin: '0 auto', padding: 16, display: 'grid', gap: 16 }}>
        {tab === 'home' && (
          <>
            <div style={{
              borderRadius: 24, border: '1px solid #e5e7eb',
              background: 'linear-gradient(135deg,#eef2ff,#ffffff,#ecfdf5)', padding: 24
            }}>
              <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900, color: '#111827' }}>
                Low Fees. Reliable Escrow. Built for Collectors.
              </h1>
              <p style={{ color: '#374151', maxWidth: 720 }}>
                A clean, modern marketplace for trading cards and collectibles. Transparent pricing and seller-first features.
              </p>
              <div style={{ marginTop: 12 }}>
                <button onClick={() => setTab('market')} style={{
                  padding: '10px 14px', borderRadius: 12, background: '#111827', color: '#fff', border: 0
                }}>
                  Enter Marketplace
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              <Box title="Low Seller Fees" subtitle="Flat 5% base. Tiered instant payout optional." />
              <Box title="Escrow & Tracking" subtitle="5-day hold or buyer confirmation before release." />
              <Box title="Multi-TCG Friendly" subtitle="MTG, Pokémon, One Piece, Yu-Gi-Oh! and more." />
            </div>
          </>
        )}

        {tab === 'market' && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Explore Listings</div>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 16, padding: 24, background: '#fff', color: '#6b7280', fontSize: 14 }}>
              Marketplace UI goes here (listings grid, filters, cart, offers). We’ll wire this after deploy.
            </div>
          </div>
        )}

        {tab === 'seller' && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Seller Dashboard</div>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 16, padding: 24, background: '#fff', color: '#6b7280', fontSize: 14 }}>
              Profit bars, escrow timeline, instant payout tiers—coming next.
            </div>
          </div>
        )}

        {tab === 'contact' && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Contact</div>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: 12 }}>
              <input placeholder="Your name" style={{ padding: 10, borderRadius: 12, border: '1px solid #e5e7eb' }} />
              <input placeholder="you@example.com" style={{ padding: 10, borderRadius: 12, border: '1px solid #e5e7eb' }} />
              <textarea rows={5} placeholder="How can we help?" style={{ padding: 10, borderRadius: 12, border: '1px solid #e5e7eb' }} />
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button type="submit" style={{ padding: '10px 14px', borderRadius: 12, background: '#111827', color: '#fff', border: 0 }}>
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      <footer style={{ borderTop: '1px solid #e5e7eb', background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '16px', fontSize: 14, color: '#6b7280', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>© {new Date().getFullYear()} The Crystal Card Keep</div>
          <span style={{ width: 4, height: 4, borderRadius: 2, background: '#9ca3af', display: 'inline-block' }} />
          <div>Escrow · Tracked Shipping · Dispute Resolution</div>
        </div>
      </footer>
    </div>
  )
}              </h1>
              <p className="mt-2 text-gray-700 max-w-2xl">
                A clean, modern marketplace for trading cards and collectibles. Transparent pricing and seller-first features.
              </p>
              <div className="mt-5">
                <button onClick={() => setTab('market')} className="px-5 py-2.5 rounded-xl bg-gray-900 text-white">
                  Enter Marketplace
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card title="Low Seller Fees" subtitle="Flat 5% base. Tiered instant payout optional." />
              <Card title="Escrow & Tracking" subtitle="5-day hold or buyer confirmation before release." />
              <Card title="Multi-TCG Friendly" subtitle="MTG, Pokémon, One Piece, Yu-Gi-Oh! and more." />
            </div>
          </>
        )}

        {tab === 'market' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Explore Listings</h2>
            <div className="rounded-2xl border bg-white p-6 text-sm text-gray-600">
              Marketplace UI goes here (listings grid, filters, cart, offers). We’ll wire this after deploy.
            </div>
          </div>
        )}

        {tab === 'seller' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Seller Dashboard</h2>
            <div className="rounded-2xl border bg-white p-6 text-sm text-gray-600">
              Profit bars, escrow timeline, instant payout tiers—coming next.
            </div>
          </div>
        )}

        {tab === 'contact' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <form className="grid md:grid-cols-2 gap-4 text-sm" onSubmit={(e)=>e.preventDefault()}>
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="Your name"/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="you@example.com"/>
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Message</span>
                <textarea className="w-full mt-1 rounded-xl border px-3 py-2" rows={5} placeholder="How can we help?"/>
              </label>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="px-4 py-2 rounded-xl bg-gray-900 text-white">Send</button>
              </div>
            </form>
          </div>
        )}
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div>© {new Date().getFullYear()} The Crystal Card Keep</div>
          <div className="h-1 w-1 rounded-full bg-gray-400 hidden md:block" />
          <div>Escrow · Tracked Shipping · Dispute Resolution</div>
        </div>
      </footer>
    </div>
  )
}              </h1>
              <p className="mt-2 text-gray-700 max-w-2xl">
                A clean, modern marketplace for trading cards and collectibles. Transparent pricing and seller-first features.
              </p>
              <div className="mt-5">
                <button onClick={() => setTab('market')} className="px-5 py-2.5 rounded-xl bg-gray-900 text-white">
                  Enter Marketplace
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card title="Low Seller Fees" subtitle="Flat 5% base. Tiered instant payout optional." />
              <Card title="Escrow & Tracking" subtitle="5-day hold or buyer confirmation before release." />
              <Card title="Multi-TCG Friendly" subtitle="MTG, Pokémon, One Piece, Yu-Gi-Oh! and more." />
            </div>
          </>
        )}

        {tab === 'market' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Explore Listings</h2>
            <div className="rounded-2xl border bg-white p-6 text-sm text-gray-600">
              Marketplace UI goes here (listings grid, filters, cart, offers). We’ll wire this after deploy.
            </div>
          </div>
        )}

        {tab === 'seller' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Seller Dashboard</h2>
            <div className="rounded-2xl border bg-white p-6 text-sm text-gray-600">
              Profit bars, escrow timeline, instant payout tiers—coming next.
            </div>
          </div>
        )}

        {tab === 'contact' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <form className="grid md:grid-cols-2 gap-4 text-sm" onSubmit={(e)=>e.preventDefault()}>
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="Your name"/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="you@example.com"/>
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Message</span>
                <textarea className="w-full mt-1 rounded-xl border px-3 py-2" rows={5} placeholder="How can we help?"/>
              </label>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="px-4 py-2 rounded-xl bg-gray-900 text-white">Send</button>
              </div>
            </form>
          </div>
        )}
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div>© {new Date().getFullYear()} The Crystal Card Keep</div>
          <div className="h-1 w-1 rounded-full bg-gray-400 hidden md:block" />
          <div>Escrow · Tracked Shipping · Dispute Resolution</div>
        </div>
      </footer>
    </div>
  )
}              </h1>
              <p className="mt-2 text-gray-700 max-w-2xl">
                A clean, modern marketplace for trading cards and collectibles. Transparent pricing and seller-first features.
              </p>
              <div className="mt-5">
                <button onClick={() => setTab('market')} className="px-5 py-2.5 rounded-xl bg-gray-900 text-white">
                  Enter Marketplace
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card title="Low Seller Fees" subtitle="Flat 5% base. Tiered instant payout optional." />
              <Card title="Escrow & Tracking" subtitle="5-day hold or buyer confirmation before release." />
              <Card title="Multi-TCG Friendly" subtitle="MTG, Pokémon, One Piece, Yu-Gi-Oh! and more." />
            </div>
          </>
        )}

        {tab === 'market' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Explore Listings</h2>
            <div className="rounded-2xl border bg-white p-6 text-sm text-gray-600">
              Marketplace UI goes here (listings grid, filters, cart, offers). We’ll wire this after deploy.
            </div>
          </div>
        )}

        {tab === 'seller' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Seller Dashboard</h2>
            <div className="rounded-2xl border bg-white p-6 text-sm text-gray-600">
              Profit bars, escrow timeline, instant payout tiers—coming next.
            </div>
          </div>
        )}

        {tab === 'contact' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <form className="grid md:grid-cols-2 gap-4 text-sm" onSubmit={(e)=>e.preventDefault()}>
              <label className="block">
                <span className="text-gray-700">Name</span>
                <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="Your name"/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="you@example.com"/>
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Message</span>
                <textarea className="w-full mt-1 rounded-xl border px-3 py-2" rows={5} placeholder="How can we help?"/>
              </label>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="px-4 py-2 rounded-xl bg-gray-900 text-white">Send</button>
              </div>
            </form>
          </div>
        )}
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div>© {new Date().getFullYear()} The Crystal Card Keep</div>
          <div className="h-1 w-1 rounded-full bg-gray-400 hidden md:block" />
          <div>Escrow · Tracked Shipping · Dispute Resolution</div>
        </div>
      </footer>
    </div>
  )
}    img: "https://images.unsplash.com/photo-1603575449299-f3e006b75e0a?q=80&w=1400&auto=format&fit=crop",
  },
];

// Platform config (seller pays fee; buyer pays item only)
const platformConfig = {
  basePlatformFeePct: 5.0,
  tiers: [
    { name: "Adventurer", thresholdUSD: 0, feePct: 5.0, instantPayoutPct: 2.0 },
    { name: "Journeyman", thresholdUSD: 5000, feePct: 4.5, instantPayoutPct: 1.75 },
    { name: "Guild Master", thresholdUSD: 20000, feePct: 4.0, instantPayoutPct: 1.5 },
  ],
  holdDays: 5,
};

const siteConfig = {
  preorder: {
    enabled: true,
    title: "Preorders now open",
    startISO: "2025-11-01",
    cutoffISO: "2025-11-15",
    link: "#preorders",
  },
};

function Money({ value, currency = "USD" }: { value: number; currency?: string }) {
  return <span>{new Intl.NumberFormat(undefined, { style: "currency", currency }).format(value)}</span>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-slate-700 border border-purple-300">{children}</span>;
}

function ListingCard({ item, onAddToCart, onOffer }: any) {
  return (
    <div className="group rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] bg-slate-50 overflow-hidden">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900 line-clamp-1">{item.name}</h3>
          <Badge>{item.game}</Badge>
        </div>
        <p className="text-sm text-slate-600 line-clamp-1">{item.set} · {item.rarity}</p>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Badge>{item.condition}</Badge>
          {item.graded && <Badge>Graded {item.grader} {item.grade}</Badge>}
          {item.foil && <Badge>Foil</Badge>}
        </div>
        <div className="pt-2 flex items-center justify-between">
          <div className="text-xl font-bold text-emerald-700"><Money value={item.price} currency={item.currency} /></div>
          <div className="flex gap-2">
            <button onClick={() => onAddToCart(item)} className="px-3 py-1.5 rounded-xl bg-emerald-700 text-white text-sm hover:opacity-90">Add</button>
            <button onClick={() => onOffer(item)} className="px-3 py-1.5 rounded-xl border border-slate-400 text-sm hover:bg-purple-50">Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreorderBar({ cfg, onDismiss }: { cfg: any; onDismiss?: () => void }) {
  if (!cfg?.enabled) return null;
  const now = new Date();
  const start = new Date(cfg.startISO);
  const cutoff = new Date(cfg.cutoffISO);
  const inWindow = now >= start && now <= cutoff;
  const status = now < start ? `Opens ${start.toLocaleDateString()}` : (inWindow ? `Open · Closes ${cutoff.toLocaleDateString()}` : `Closed ${cutoff.toLocaleDateString()}`);
  return (
    <div className="sticky top-[48px] z-10 bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-2 text-sm flex items-center justify-between">
        <div className="truncate">
          <span className="font-medium">{cfg.title}</span>
          <span className="opacity-90"> — {status}</span>
        </div>
        <div className="flex items-center gap-3">
          {cfg.link && <a href={cfg.link} className="underline">Details</a>}
          <button onClick={onDismiss} className="opacity-80 hover:opacity-100" aria-label="Dismiss preorder notice">✕</button>
        </div>
      </div>
    </div>
  );
}

function ProfitBar({ price, platformPct, instantPct }: { price: number; platformPct: number; instantPct: number }) {
  const platform = price * (platformPct / 100);
  const instant = price * (instantPct / 100);
  const net = price - platform - instant;
  const pWidth = (platform / price) * 100;
  const iWidth = (instant / price) * 100;
  const nWidth = (net / price) * 100;
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-600 mb-1">
        <span title={`Platform fee ${platformPct}%`}>🟨 Fee</span>
        <span title={`Instant payout fee ${instantPct}%`}>🟪 Instant</span>
        <span title={`Net take-home ${(100 - platformPct - instantPct).toFixed(2)}%`}>🟩 Net</span>
      </div>
      <div className="w-full h-6 bg-white rounded-md border overflow-hidden">
        <div className="h-6 bg-yellow-300 inline-block" style={{ width: `${pWidth}%` }} title="Platform fee" />
        <div className="h-6 bg-purple-300 inline-block" style={{ width: `${iWidth}%` }} title="Instant payout fee" />
        <div className="h-6 bg-emerald-400 inline-block" style={{ width: `${nWidth}%` }} title="Net take-home" />
      </div>
    </div>
  );
}

function SellerDashboard() {
  const [orders, setOrders] = useState<any[]>([
    { id: 1, ref: "KEEP-102938", price: 100, status: "held", releasedBy: null, tierInstantPct: platformConfig.tiers[0].instantPayoutPct / 100 },
    { id: 2, ref: "KEEP-564738", price: 350, status: "held", releasedBy: null, tierInstantPct: platformConfig.tiers[0].instantPayoutPct / 100 },
    { id: 3, ref: "KEEP-999111", price: 899, status: "held", releasedBy: null, tierInstantPct: platformConfig.tiers[1].instantPayoutPct / 100 },
  ]);
  const [active, setActive] = useState<any | null>(null);
  return (
    <section className="space-y-5">
      <h2 className="text-xl font-semibold text-slate-900">Your Coin Flow This Moon</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {orders.map((o) => (
          <div key={o.id} className="p-4 border rounded-2xl bg-white">
            <div className="flex items-center justify-between">
              <div className="text-sm">Order <span className="font-mono">#{o.ref}</span></div>
              <button onClick={() => setActive(o)} className="text-sm underline">Details</button>
            </div>
            <div className="mt-2">
              <ProfitBar price={o.price} platformPct={platformConfig.basePlatformFeePct} instantPct={0} />
            </div>
            <div className="mt-2 text-xs text-slate-600">Standard payout after {platformConfig.holdDays} days.</div>
          </div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-20">
          <div className="w-full max-w-xl rounded-2xl border bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-slate-900">Order #{active.ref}</h3>
              <button onClick={()=>setActive(null)} className="text-sm underline">Close</button>
            </div>
            <div className="mt-4 p-4 bg-white rounded-xl border">
              <div className="text-sm mb-2">Profit breakdown on <strong><Money value={active.price} /></strong></div>
              <ProfitBar price={active.price} platformPct={platformConfig.basePlatformFeePct} instantPct={0} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ListingGrid({ onAddToCart, onOffer }: any) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-900">Explore the Market</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {MOCK_LISTINGS.map((item) => (
          <ListingCard key={item.id} item={item} onAddToCart={onAddToCart} onOffer={onOffer} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [tab, setTab] = useState<"home" | "market" | "sellerDash" | "privacy" | "terms" | "contact">("home");
  const [cart, setCart] = useState<any[]>([]);
  const [preorder, setPreorder] = useState(siteConfig.preorder);
  const [showBar, setShowBar] = useState(true);

  function addToCart(item: any) { setCart((c) => [{ ...item }, ...c]); }
  function makeOffer(item: any) { alert(`Offer submitted for ${item.name}`); }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-zinc-50 to-emerald-50">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
          <div className="font-extrabold text-xl tracking-tight text-slate-900">The Crystal Card Keep</div>
          <nav className="flex items-center gap-4 text-sm">
            <button onClick={() => setTab("home")} className={`px-3 py-1.5 rounded-xl ${tab === "home" ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}>Home</button>
            <button onClick={() => setTab("market")} className={`px-3 py-1.5 rounded-xl ${tab === "market" ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}>Marketplace</button>
            <button onClick={() => setTab("sellerDash")} className={`px-3 py-1.5 rounded-xl ${tab === "sellerDash" ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}>Seller</button>
            <button onClick={() => setTab("privacy")} className={`px-3 py-1.5 rounded-xl ${tab === "privacy" ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}>Privacy</button>
            <button onClick={() => setTab("terms")} className={`px-3 py-1.5 rounded-xl ${tab === "terms" ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}>Terms</button>
            <button onClick={() => setTab("contact")} className={`px-3 py-1.5 rounded-xl ${tab === "contact" ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}>Contact</button>
          </nav>
        </div>
      </header>

      {showBar && <PreorderBar cfg={preorder} onDismiss={() => setShowBar(false)} />}

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {tab === "home" && (
          <section className="space-y-6">
            <div className="rounded-3xl border bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-10">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">The Crystal Card Keep</h1>
              <p className="mt-2 text-slate-700 max-w-2xl">Buying, selling, and grading-friendly services for trading cards and collectibles. Low fees. Reliable escrow. Built for the community.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button onClick={() => setTab("market")} className="px-5 py-2.5 rounded-xl bg-slate-900 text-white">Enter Marketplace</button>
              </div>
            </div>
            <div className="rounded-2xl border p-5 bg-white">
              <h3 className="font-semibold">Why Choose Us</h3>
              <ul className="mt-2 text-sm text-slate-700 list-disc pl-5 space-y-1">
                <li>Open market with low fees (seller-paid)</li>
                <li>Escrow & tracked shipping</li>
                <li>Tiered instant payouts</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "market" && <ListingGrid onAddToCart={addToCart} onOffer={makeOffer} />}
        {tab === "sellerDash" && <SellerDashboard />}

        {tab === "privacy" && (
          <section id="privacy" className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Privacy Policy</h2>
            <div className="rounded-2xl border p-6 bg-white text-sm text-slate-700">
              <p>We collect only what we need to run the marketplace (account details, orders, dispute evidence) and never sell your data. Cookies are used for session and analytics. You can request deletion of your account data at any time.</p>
            </div>
          </section>
        )}

        {tab === "terms" && (
          <section id="terms" className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Terms of Service</h2>
            <div className="rounded-2xl border p-6 bg-white text-sm text-slate-700 space-y-2">
              <p>Use of the marketplace constitutes acceptance of our fee schedule, escrow timelines, and dispute process. Sellers are responsible for accurate descriptions, prompt shipping, and compliance with applicable laws. Placeholder copy — replace before launch.</p>
            </div>
          </section>
        )}

        {tab === "contact" && (
          <section id="contact" className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
            <div className="rounded-2xl border p-6 bg-white">
              <form className="grid md:grid-cols-2 gap-4 text-sm" onSubmit={(e)=>e.preventDefault()}>
                <label className="block">
                  <span className="text-slate-700">Name</span>
                  <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="Your name"/>
                </label>
                <label className="block">
                  <span className="text-slate-700">Email</span>
                  <input className="w-full mt-1 rounded-xl border px-3 py-2" placeholder="you@example.com"/>
                </label>
                <label className="block md:col-span-2">
                  <span className="text-slate-700">Message</span>
                  <textarea className="w-full mt-1 rounded-xl border px-3 py-2" rows={5} placeholder="How can we help?"/>
                </label>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="px-4 py-2 rounded-xl bg-slate-900 text-white">Send</button>
                </div>
              </form>
              <div className="mt-4 text-xs text-slate-600">Store: Mon–Sat 11–7 · Sun 12–5 · 123 Card Lane, Yourtown, ST</div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div>© {new Date().getFullYear()} The Crystal Card Keep</div>
          <div className="h-1 w-1 rounded-full bg-slate-400 hidden md:block" />
          <div>Escrow · Tracked Shipping · Dispute Resolution</div>
        </div>
      </footer>
    </div>
  );
}
