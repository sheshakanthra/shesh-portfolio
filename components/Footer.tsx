export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
      <p>
        Built by Sheshakanth · {new Date().getFullYear()} · Crafted with Next.js,
        Tailwind CSS and a bit of neon.
      </p>
    </footer>
  );
}
