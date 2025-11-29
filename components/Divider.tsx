export default function Divider() {
    return (
        <div className="w-full flex flex-col items-center mt-14 mb-14 select-none">
            <a href="#skills" className="flex flex-col items-center group cursor-pointer">

                {/* Glowing Line */}
                <div className="w-[300px] md:w-[500px] h-[1px] bg-teal-400/20 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-14 h-[2px] bg-teal-400/60 blur-sm group-hover:w-24 transition-all duration-500"></div>
                </div>

                {/* Floating Subtitle */}
                <p className="mt-3 text-teal-300/70 tracking-widest text-xs uppercase group-hover:text-teal-400 transition-colors">
                    Scroll to explore
                </p>

                {/* Animated Scroll Dots */}
                <div className="mt-2 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-teal-300/50 animate-ping"></div>
                    <div className="w-2 h-2 rounded-full bg-teal-300/40"></div>
                    <div className="w-2 h-2 rounded-full bg-teal-300/20"></div>
                </div>

            </a>
        </div>
    );
}
