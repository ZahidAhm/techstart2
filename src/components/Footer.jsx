export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-16 bg-space-dark/80 backdrop-blur relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container-base text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Orion Tech. All rights reserved.
      </div>
    </footer>
  )
}
