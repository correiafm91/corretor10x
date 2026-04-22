import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  { q: "O que é a Consultoria Corretor 10x?", a: "É uma consultoria de vendas estratégica e personalizada para corretores de seguros que querem escalar suas comissões com método, posicionamento e prospecção previsível — sem depender só de indicação." },
  { q: "Como funciona o diagnóstico gratuito?", a: "Você preenche o formulário com informações sobre sua operação atual. Em seguida, nosso time entra em contato para uma conversa onde identificamos seus principais gargalos e mostramos como a consultoria pode acelerar seus resultados." },
  { q: "Para quem é a consultoria?", a: "Para corretores de seguros iniciantes que querem começar com o pé direito e para corretores experientes que querem escalar de forma previsível. Adaptamos o plano à sua realidade." },
  { q: "Quanto tempo leva para ver resultados?", a: "A maioria dos corretores começa a ver melhorias nas primeiras semanas de aplicação. Resultados consistentes e expressivos costumam aparecer entre 60 e 90 dias." },
  { q: "Funciona para qualquer ramo de seguro?", a: "Sim. As estratégias são adaptáveis para auto, vida, saúde, empresarial, residencial e qualquer outro ramo. O foco está em vendas, marketing e posicionamento." },
  { q: "Como é o acompanhamento?", a: "Você recebe mentoria contínua, scripts de vendas, materiais prontos, plano de prospecção e acompanhamento dos seus indicadores semana a semana." },
  { q: "Quanto custa a consultoria?", a: "O investimento varia conforme o plano ideal para o seu momento. O valor é apresentado durante o diagnóstico gratuito, depois de entendermos sua realidade." },
  { q: "As vagas são limitadas?", a: "Sim. Para garantir qualidade e atenção individual, atendemos um número limitado de corretores por mês. Solicite seu diagnóstico antes de fecharmos a agenda." },
];

const FAQ = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6" id="faq">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Perguntas <span className="text-primary font-normal">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-left font-light hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base"
          >
            Quero meu diagnóstico gratuito
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
