import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  { q: "O que é a Pro Estate?", a: "A Pro Estate é uma consultoria de vendas especializada em corretores de imóveis. Transformamos corretores comuns em vendedores persuasivos de alta performance através de técnicas avançadas de negociação, persuasão e fechamento." },
  { q: "Como funciona o diagnóstico gratuito?", a: "Você preenche o formulário com suas informações e nossa equipe analisa sua abordagem comercial atual, identificando os gargalos que impedem o fechamento de mais vendas. Em seguida, entramos em contato com um plano personalizado." },
  { q: "Preciso ter experiência como corretor?", a: "Não. Nossas técnicas de vendas são desenhadas tanto para iniciantes quanto para corretores experientes que querem dominar a arte da persuasão e fechar mais negócios." },
  { q: "Quanto tempo leva para ver resultados?", a: "Aplicando as técnicas de vendas corretas, a maioria dos nossos clientes vê resultados já nas primeiras semanas. Em 3 meses, é possível sair do zero a R$30 mil em comissões." },
  { q: "Funciona para qualquer tipo de imóvel?", a: "Sim. As técnicas de vendas, persuasão e fechamento são adaptáveis para imóveis residenciais, comerciais, alto padrão, populares e qualquer segmento." },
  { q: "O que é o grupo da comunidade?", a: "É um grupo exclusivo para clientes da Pro Estate onde compartilhamos novidades, técnicas de vendas e realizamos aulas ao vivo pelo Zoom. Você entra no grupo ao contratar a consultoria." },
  { q: "Quanto custa a consultoria?", a: "O diagnóstico inicial é 100% gratuito. Após a análise, apresentamos uma proposta personalizada de consultoria de vendas adequada às suas necessidades e objetivos." },
];

const FAQ = () => (
  <section className="py-24 px-6" id="faq">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
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
    </div>
  </section>
);

export default FAQ;
