/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50:'#f6f7f8',100:'#eceef1',200:'#d6dbe1',300:'#c1c7d0',400:'#9aa6b2',500:'#6b7280',
          600:'#4b5563',700:'#374151',800:'#1f2937',900:'#111827'
        },
        emerald: { 50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',500:'#10b981',600:'#059669',700:'#047857',800:'#065f46',900:'#064e3b' }
      }
    }
  },
  plugins: [],
}
