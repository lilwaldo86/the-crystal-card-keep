import React, { useState } from 'react'

const Box: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div
    style={{
      border: '1px solid #e5e7eb',
      borderRadius: 16,
      padding: 20,
      background: '#fff',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    }}
  >
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
        fontSize: 14,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#ffffffcc',
          backdropFilter: 'blur(6px)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '12px 16px',
            display: 'flex',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 18, color: '#111827' }}>The Crystal Card Keep</div>
          <nav style={{ display: 'flex', gap: 8 }}>
            {navBtn('home', 'Home')}
            {navBtn('market', 'Marketplace')}
            {navBtn('seller', 'Seller')}
            {navBtn('contact', 'Contact')}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main style={{ flex: 1, maxWidth: 1120, margin: '0 auto', padding: 16, display: 'grid', gap: 16 }}>
        {/* HOME TAB — this is the section you were asking about */}
        {tab === 'home' && (
          <>
            <div
              style={{
                borderRadius: 24,
                border: '1px solid #e5e7eb',
                background: 'linear-gradient(135deg,#eef2ff,#ffffff,#ecfdf5)',
                padding: 24,
              }}
            >
              <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900, color: '#111827' }}>
                Low Fees. Reliable Escrow. Built for Collectors.
              </h1>
              <p style={{ color: '#374151', maxWidth: 720, marginTop: 8 }}>
                A clean, modern marketplace for trading cards and collectibles. Transparent pricing and seller-first
                features.
              </p>
              <div style={{ marginTop: 12 }}>
                <button
                  onClick={() => setTab('market')}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 12,
                    background: '#111827',
                    color: '#fff',
                    border: 0,
                    cursor: 'pointer',
                  }}
                >
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

        {/* MARKETPLACE TAB */}
        {tab === 'market' && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Explore Listings</div>
            <div
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 16,
                padding: 24,
                background: '#fff',
                color: '#6b7280',
                fontSize: 14,
              }}
            >
              Marketplace UI goes here (listings grid, filters, cart, offers). We’ll wire this after deploy.
            </div>
          </div>
        )}

        {/* SELLER TAB */}
        {tab === 'seller' && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Seller Dashboard</div>
            <div
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 16,
                padding: 24,
                background: '#fff',
                color: '#6b7280',
                fontSize: 14,
              }}
            >
              Profit bars, escrow timeline, instant payout tiers—coming next.
            </div>
          </div>
        )}

        {/* CONTACT TAB */}
        {tab === 'contact' && (
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Contact</div>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: 12 }}>
              <input
                placeholder="Your name"
                style={{ padding: 10, borderRadius: 12, border: '1px solid #e5e7eb' }}
              />
              <input
                placeholder="you@example.com"
                style={{ padding: 10, borderRadius: 12, border: '1px solid #e5e7eb' }}
              />
              <textarea
                rows={5}
                placeholder="How can we help?"
                style={{ padding: 10, borderRadius: 12, border: '1px solid #e5e7eb' }}
              />
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button
                  type="submit"
                  style={{ padding: '10px 14px', borderRadius: 12, background: '#111827', color: '#fff', border: 0 }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e5e7eb', background: '#fff' }}>
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: 16,
            fontSize: 14,
            color: '#6b7280',
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div>© {new Date().getFullYear()} The Crystal Card Keep</div>
          <span style={{ width: 4, height: 4, borderRadius: 2, background: '#9ca3af', display: 'inline-block' }} />
          <div>Escrow · Tracked Shipping · Dispute Resolution</div>
        </div>
      </footer>
    </div>
  )
}
