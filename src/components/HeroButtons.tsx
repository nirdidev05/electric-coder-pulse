const HeroButtons = () => (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
    <button
      onClick={() => document.getElementById('technical')?.scrollIntoView({ behavior: 'smooth' })}
      className="px-8 py-4 bg-[--primary] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
    >
      Explore Technical Details
    </button>
    <button
      onClick={() => document.getElementById('model')?.scrollIntoView({ behavior: 'smooth' })}
      className="px-8 py-4 border border-[--border] text-[--foreground] bg-card hover:bg-muted/20 rounded-lg font-semibold transition-all duration-300"
    >
      View Model Architecture
    </button>
  </div>
);

export default HeroButtons;
