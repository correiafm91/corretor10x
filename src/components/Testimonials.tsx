import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Martins",
    role: "Corretor Auto/Vida — SP",
    stars: 5,
    result: "+R$28k em 3 meses",
    text: "A consultoria do Corretor 10x reorganizou toda minha operação. Em 3 meses saí do zero a R$28 mil em comissões com método e previsibilidade.",
  },
  {
    name: "Fernanda Oliveira",
    role: "Corretora Saúde — RJ",
    stars: 5,
    result: "Triplicou a carteira",
    text: "Aprendi a me posicionar como autoridade. Hoje meus clientes me procuram, não preciso mais correr atrás de indicações para fechar venda.",
  },
  {
    name: "Ricardo Santos",
    role: "Corretor Empresarial — MG",
    stars: 5,
    result: "10x em comissões",
    text: "Mudou minha visão sobre o mercado de seguros. Faturo 10x mais do que antes e construí uma carteira sólida e recorrente.",
  },
  {
    name: "Ana Paula Costa",
    role: "Corretora Vida — PR",
    stars: 5,
    result: "+R$22k mensais",
    text: "As estratégias de prospecção digital são um divisor de águas. Nunca mais dependi só de indicação para vender seguros.",
  },
  {
    name: "Marcos Ferreira",
    role: "Corretor Multi-ramos — BA",
    stars: 5,
    result: "+R$32k em 4 meses",
    text: "A consultoria me deu o que nenhuma seguradora ensina: marketing, posicionamento e fechamento de alto valor.",
  },
  {
    name: "Juliana Almeida",
    role: "Corretora Residencial — SC",
    stars: 5,
    result: "Referência regional",
    text: "Conteúdo claro, prático e que funciona. Hoje sou referência na minha cidade graças ao posicionamento que construímos juntos.",
  },
];

const Testimonials = () => (
  <section className="py-24 px-6 bg-secondary/30" id="depoimentos">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
          Resultados Reais
        </span>
        <h2 className="text-3xl md:text-5xl font-extralight mb-4">
          Corretores que <span className="text-primary font-normal">Multiplicaram</span> suas vendas
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Mais de 1.000 corretores transformaram seus resultados com a consultoria.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors relative"
          >
            <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/20" strokeWidth={1.5} />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-4">
              {t.result}
            </div>
            <p className="text-foreground/90 font-light mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary text-sm font-medium">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-normal">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
