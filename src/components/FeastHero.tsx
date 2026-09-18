import { motion } from "framer-motion";
import { BarChart3, CalendarDays, ChefHat, Clock3, Database, Sparkles, TrendingDown, Users, Utensils } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const demandBars = [48, 62, 56, 71, 65, 78, 69, 86, 74, 92, 81, 88];

const FeastHero = () => {
  const t = useTranslation();
  const hero = t.adc.hero;

  const metrics = [
    { value: "22", suffix: " RMSE", label: "Prediction accuracy", Icon: BarChart3, color: "text-accent" },
    { value: "94", suffix: "%", label: "Model confidence", Icon: TrendingDown, color: "text-primary" },
    { value: "30", suffix: "%", label: "Waste reduction", Icon: Utensils, color: "text-secondary" },
  ];

  const signals = [
    { label: "Office attendance", value: "312", Icon: Users, color: "text-primary" },
    { label: "Menu popularity", value: "High", Icon: ChefHat, color: "text-accent" },
    { label: "Forecast horizon", value: "Day +1", Icon: CalendarDays, color: "text-secondary" },
  ];

  return (
    <section className="relative min-h-[760px] overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-background to-primary/10 px-4 pb-16 pt-20 sm:px-6 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(hsl(var(--primary)/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -right-40 top-12 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-border/50 pb-4">
          <span className="hidden w-32 sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <ChefHat className="h-4 w-4" />
            <span className="hidden sm:inline">BNP Paribas Meal Forecasting</span>
            <span className="sm:hidden">FEAST</span>
          </div>
          <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">MODEL ONLINE</span>
          </div>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] xl:gap-20">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span>{hero.badge.text}</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="space-y-5">
              <h1 className="text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">{hero.title.main}</span>
                <span className="mt-3 block text-foreground">{hero.title.subtitle}</span>
              </h1>
              <p className="max-w-2xl border-l-2 border-primary/50 pl-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {hero.description}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map(({ value, suffix, label, Icon, color }) => (
                <div key={label} className="rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <Icon className={`mb-3 h-5 w-5 ${color}`} />
                  <div className={`text-xl font-bold ${color}`}>{value}<span className="text-sm">{suffix}</span></div>
                  <div className="mt-1 text-xs leading-tight text-muted-foreground">{label}</div>
                </div>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
              {hero.technologyStack.map((technology) => (
                <span key={technology.name} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">{technology.name}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={() => document.getElementById("technical")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-1">
                <BarChart3 className="h-4 w-4" />
                Experience the System
              </button>
              <button onClick={() => document.getElementById("data")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 font-semibold text-foreground transition-colors hover:border-primary/50">
                <Database className="h-4 w-4" />
                Explore Analytics
              </button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.8 }} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-secondary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-border/70 px-5 py-4">
                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div>
                <span className="font-mono text-xs text-muted-foreground">feast_forecaster.py</span>
                <span className="ml-auto flex items-center gap-2 font-mono text-xs text-emerald-400"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> LIVE FORECAST</span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Tomorrow's demand</p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">Meal forecast</p>
                    <p className="mt-1 text-sm text-muted-foreground">Attendance + menu + weather signals</p>
                  </div>
                  <div className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-right">
                    <div className="text-lg font-bold text-accent">318</div>
                    <div className="text-[10px] uppercase tracking-wider text-accent/80">Meals predicted</div>
                  </div>
                </div>

                <div className="relative mb-7 flex h-48 items-end gap-2 border-b border-l border-border/70 px-3 pb-0 pt-5">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,hsl(var(--primary)/0.12)_50%,transparent_51%)] bg-[length:100%_33.33%]" />
                  {demandBars.map((barValue, index) => (
                    <motion.div key={`${barValue}-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: `${barValue}%`, opacity: 1 }} transition={{ delay: 0.5 + index * 0.07, duration: 0.7, ease: "easeOut" }} className={`relative flex-1 rounded-t-sm ${index > 8 ? "bg-gradient-to-t from-primary to-accent" : "bg-muted/70"}`}>
                      {index === demandBars.length - 1 && <motion.span animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_14px_hsl(var(--accent))]" />}
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {signals.map(({ label, value, Icon, color }, index) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + index * 0.12 }} className="rounded-lg border border-border/70 bg-background/50 p-3">
                      <Icon className={`mb-2 h-4 w-4 ${color}`} />
                      <span className="block text-xs text-muted-foreground">{label}</span>
                      <span className={`mt-1 block text-sm font-semibold ${color}`}>{value}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2"><Clock3 className="h-3.5 w-3.5 text-primary" /> Updated from 5 data sources</span>
                  <span className="font-mono text-primary">RMSE ~22</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeastHero;
