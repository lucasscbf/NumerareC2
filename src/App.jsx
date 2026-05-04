import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5586999614557";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, vim pelo site da NUMERARE e gostaria de atendimento contábil."
)}`;
const logoUrl = `${import.meta.env.BASE_URL}logo_numerare_sem_fundo_nova.png`;

const fadeUp = {
  hidden: { opacity: 0, y: 46, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionHeader({ label, title, text, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#c79a35]">{label}</p>
      <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-white/65">{text}</p>}
    </motion.div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 170, damping: 18 }}
      className={`rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function NumerareInstitucionalPremium() {
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  useEffect(() => {
    const sections = ["inicio", "quem-somos", "servicos", "como-funciona", "noticias", "contato"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 35);

      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "quem-somos", label: "Quem somos" },
    { id: "servicos", label: "Serviços" },
    { id: "como-funciona", label: "Como funciona" },
    { id: "noticias", label: "Notícias" },
  ];

  const servicos = [
    {
      icon: "01",
      title: "Assessoria contábil",
      text: "Rotina contábil completa para empresas privadas, com acompanhamento técnico e consultivo.",
    },
    {
      icon: "02",
      title: "Assessoria fiscal e tributária",
      text: "Organização fiscal, obrigações tributárias e apoio para reduzir riscos fiscais.",
    },
    {
      icon: "03",
      title: "Assessoria trabalhista e previdenciária",
      text: "Folha, admissões, férias, rescisões e obrigações trabalhistas com segurança.",
    },
    {
      icon: "04",
      title: "Consultoria contábil",
      text: "Orientação estratégica para empresários tomarem decisões com mais clareza e controle.",
    },
  ];

  const passos = [
    {
      n: "01",
      title: "Entendemos sua empresa",
      text: "Analisamos o segmento, rotina fiscal, folha, documentos e principais necessidades do negócio.",
      tag: "Diagnóstico inicial",
    },
    {
      n: "02",
      title: "Organizamos sua contabilidade",
      text: "Estruturamos processos contábeis, fiscais e trabalhistas para reduzir riscos e atrasos.",
      tag: "Sem burocracia",
    },
    {
      n: "03",
      title: "Acompanhamos sua evolução",
      text: "Você recebe orientação contínua para tomar decisões melhores e manter a empresa segura.",
      tag: "Suporte consultivo",
    },
  ];

  const noticias = [
    "Reforma Tributária: o que sua empresa precisa acompanhar",
    "Simples Nacional: cuidados para evitar pendências fiscais",
    "Como organizar documentos contábeis da empresa",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    const msg = encodeURIComponent(
      `Olá, meu nome é ${form.nome}. Vim pelo site da NUMERARE. Telefone: ${form.telefone}. E-mail: ${form.email}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#090908] text-white">
      {sent && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#11100e] p-8 text-center shadow-2xl">
            <h3 className="font-serif text-3xl">Mensagem enviada!</h3>
            <p className="mt-3 text-white/60">Em breve entraremos em contato com você.</p>
            <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-[#c79a35] px-7 py-3 font-black text-[#17120a]">Fechar</button>
          </motion.div>
        </div>
      )}

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-12%] top-[-15%] h-[40rem] w-[40rem] rounded-full bg-[#c79a35]/25 blur-[130px]" />
        <div className="absolute right-[-14%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#fff1b8]/10 blur-[130px]" />
        <div className="absolute bottom-[-20%] left-[30%] h-[38rem] w-[38rem] rounded-full bg-[#8a6721]/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#090908]/90 shadow-xl backdrop-blur-2xl" : "bg-[#090908]/60 backdrop-blur-xl"
        }`}
      >
        <div className={`mx-auto flex max-w-7xl items-center px-5 transition-all duration-500 ${scrolled ? "h-[66px]" : "h-[78px]"}`}>
          <a href="#inicio" className="flex w-[230px] shrink-0 items-center">
            <img
              src={logoUrl}
              alt="Numerare Assessoria Contábil"
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-11" : "h-14"}`}
            />
          </a>

          <nav className="hidden flex-1 items-center gap-10 text-[15px] font-semibold text-white/75 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition-all duration-300 hover:text-white ${
                  activeSection === item.id ? "text-white" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#d9b766] transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            className="ml-auto shrink-0 rounded-full bg-gradient-to-r from-[#b88422] to-[#f0d38b] px-8 py-3 text-sm font-black text-[#17120a] shadow-lg shadow-[#c79a35]/20 transition hover:scale-105 hover:shadow-[#c79a35]/35"
          >
            Fale Conosco
          </a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1974&auto=format&fit=crop"
            alt="Escritório de contabilidade"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="font-serif text-5xl leading-tight md:text-7xl">
              Contabilidade de alto nível
              <br /> com estratégia e precisão
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg text-white/70">
              Estratégia, precisão e resultados para empresas que buscam crescimento com segurança contábil.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex gap-4">
              <a href={whatsappUrl} className="rounded-full bg-gradient-to-r from-[#b88422] to-[#f0d38b] px-8 py-4 font-black text-[#17120a] shadow-xl">
                Solicitar atendimento
              </a>

              <a href="#servicos" className="rounded-full border border-white/20 px-8 py-4 font-bold text-white">
                Ver serviços
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="quem-somos" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:py-32">
        <SectionHeader
          label="Quem somos"
          title="Uma assessoria contábil criada para apoiar empresários."
          text="A Numerare Assessoria Contábil foi criada em 2011 pelo contador Aciel Castelo Branco, com intuito de contribuir com os empresários do Piauí, Maranhão e região, oferecendo serviços contábeis com ética e excelência. Atualmente atuamos na área de contabilidade de empresas privadas com serviços de consultoria e assessoria contábil."
        />
      </section>

      <section id="servicos" className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <SectionHeader label="Serviços" title="Soluções para proteger e impulsionar sua empresa." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-12 grid gap-5 md:grid-cols-4">
          {servicos.map((s) => (
            <GlassCard key={s.title}>
              <span className="font-serif text-5xl text-[#f0d38b]">{s.icon}</span>
              <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/62">{s.text}</p>
            </GlassCard>
          ))}
        </motion.div>
      </section>

      <section id="como-funciona" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:py-32">
        <SectionHeader center label="Como funciona" title="Comece em 3 passos simples" text="Um processo objetivo, inspirado em sites modernos com seções que aparecem suavemente ao rolar." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-12 grid gap-6 md:grid-cols-3">
          {passos.map((p) => (
            <GlassCard key={p.n}>
              <span className="font-serif text-6xl text-[#f0d38b]">{p.n}</span>
              <h3 className="mt-5 font-serif text-2xl">{p.title}</h3>
              <p className="mt-4 text-white/62">{p.text}</p>
              <p className="mt-6 inline-block rounded-full bg-[#d9b766]/15 px-4 py-2 text-sm font-black text-[#f0d38b]">{p.tag}</p>
            </GlassCard>
          ))}
        </motion.div>
      </section>

      <section id="noticias" className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="rounded-[3rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl md:p-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9b766]">Notícias contábeis</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Informação para empresários.</h2>
            </div>
            <a href={whatsappUrl} className="font-bold text-[#f0d38b]">Receber novidades →</a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {noticias.map((n) => (
              <article key={n} className="rounded-3xl bg-[#0f0e0c] p-6 ring-1 ring-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#d9b766]">Artigo</p>
                <h3 className="mt-4 font-serif text-2xl">{n}</h3>
                <p className="mt-4 text-sm text-white/55">Conteúdo claro para apoiar empresários em temas fiscais, tributários e trabalhistas.</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contato" className="relative z-10 px-5 py-28 md:py-36">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mx-auto grid max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.06] backdrop-blur-2xl md:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9b766]">Fale conosco</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Preencha seus dados e entraremos em contato rapidinho.</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input required placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none focus:border-[#d9b766]" />
              <input required type="email" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none focus:border-[#d9b766]" />
              <input required placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none focus:border-[#d9b766]" />
              <button className="w-full rounded-full bg-gradient-to-r from-[#b88422] to-[#f0d38b] px-8 py-4 font-black text-[#17120a]">Enviar</button>
            </form>
          </div>
          <div className="bg-gradient-to-r from-[#b88422] to-[#f0d38b] p-8 text-[#17120a] md:p-12">
            <h3 className="font-serif text-4xl">Atendimento</h3>
            <div className="mt-8 space-y-3 font-semibold opacity-85">
              <p>Telefone: 86 3303-2789</p>
              <p>WhatsApp: 86 99966-5365</p>
              <p>E-mail: contato@numerareac.com.br</p>
              <p>Site: www.numerareac.com.br</p>
              <p>Instagram: @numerareac</p>
              <p>Facebook: fb.me/numerareac</p>
              <p>Rua Desembargador Pires de Castro, nº 1449, Marquês, Teresina-PI</p>
            </div>
            <div className="mt-8 rounded-3xl bg-[#17120a]/10 p-6 font-black">
              <p>Segunda a sexta</p>
              <p>08h às 12h • 14h às 18h</p>
            </div>
            <a href={whatsappUrl} className="mt-8 inline-block rounded-full bg-[#17120a] px-9 py-4 font-black text-white">Chamar no WhatsApp</a>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-white/60 bg-[#090908]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.18em] text-white">NUMERARE</h3>
            <p>Assessoria Contábil</p>
          </div>
          <p>© 2026 NUMERARE Assessoria Contábil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
