
import {
  BrainCircuit,
  ShieldCheck,
  Zap,
  ChartNoAxesCombined,
  ArrowLeft,
  Sparkles,
  Globe,
  Menu,
  LockKeyhole,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "ذكاء اصطناعي متطور",
    description: "أدوات ذكية تساعدك على تحليل البيانات وتحويل الأفكار إلى حلول.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "تحليل احترافي",
    description: "تحليل المعلومات والأسواق وتقديم رؤى منظمة.",
  },
  {
    icon: ShieldCheck,
    title: "الأمان والخصوصية",
    description: "تصميم يراعي حماية بيانات المستخدمين.",
  },
  {
    icon: Zap,
    title: "سرعة الأداء",
    description: "تجربة سلسة وسريعة على الهاتف والكمبيوتر.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-white">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#" className="text-2xl font-black tracking-wide">
            KHALDOUN
            <span className="text-[#d4af37]"> AI</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-[#d4af37]">الرئيسية</a>
            <a href="#features" className="hover:text-[#d4af37]">المميزات</a>
            <a href="#about" className="hover:text-[#d4af37]">من نحن</a>
          </div>

          <a
            href="#features"
            className="rounded-xl border border-[#d4af37]/50 px-4 py-2 text-sm text-[#d4af37]"
          >
            استكشف المنصة
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-24 text-center md:py-36"
      >
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[110px]" />

        <div className="relative mb-8 flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
          <Sparkles size={16} />
          مستقبل الذكاء الاصطناعي يبدأ هنا
        </div>

        <h1 className="relative max-w-4xl text-4xl font-black leading-tight md:text-7xl">
          اكتشف قوة
          <span className="block bg-gradient-to-l from-[#d4af37] via-purple-400 to-purple-600 bg-clip-text text-transparent">
            الذكاء الاصطناعي
          </span>
          مع KHALDOUN AI
        </h1>

        <p className="relative mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          منصة ذكية تجمع بين التكنولوجيا المتقدمة
          والأدوات الحديثة لمساعدتك على تحويل أفكارك
          إلى إنجازات حقيقية.
        </p>

        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#features"
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 px-7 py-4 font-bold shadow-lg shadow-purple-900/30 transition hover:scale-105"
          >
            اكتشف المنصة
            <ArrowLeft size={19} />
          </a>

          <a
            href="#about"
            className="rounded-xl border border-white/15 px-7 py-4 text-gray-200 transition hover:border-[#d4af37]"
          >
            تعرف علينا
          </a>
        </div>

        <div className="relative mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-3">
          {[
            ["AI", "تقنيات ذكية"],
            ["24/7", "تجربة متاحة"],
            ["PRO", "أدوات احترافية"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-3xl font-black text-[#d4af37]">
                {value}
              </div>
              <div className="mt-2 text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold text-[#d4af37]">
            PLATFORM FEATURES
          </span>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            مميزات المنصة
          </h2>
          <p className="mt-4 text-gray-400">
            أدوات مصممة لتمنحك تجربة ذكاء اصطناعي متكاملة.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-purple-500/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <Icon size={25} />
                </div>
                <h3 className="mb-3 text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-5 py-20 text-center">
        <div className="rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-purple-950/50 to-black p-10 md:p-16">
          <Globe className="mx-auto mb-6 text-[#d4af37]" size={38} />
          <h2 className="text-3xl font-black">
            KHALDOUN <span className="text-[#d4af37]">AI</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            رؤيتنا بناء منصة تقنية متكاملة تجمع بين الذكاء الاصطناعي
            والابتكار، وتقدم أدوات مفيدة وسهلة الاستخدام للجميع.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-gray-500">
        © 2026 KHALDOUN AI. جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}
