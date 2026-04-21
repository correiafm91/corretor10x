import { motion } from "framer-motion";

const About = () => (
  <section className="py-24 px-6" id="sobre">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center p-8">
              <img
                src="https://i.postimg.cc/3JyrYKbr/1000288417.jpg"
                alt="Corretor 10x - Workshop para Corretores de Seguros"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-light text-2xl">10x</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Sobre o Corretor 10x
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
            O maior treinamento de{" "}
            <span className="text-primary font-normal">corretores de seguros</span> do Brasil
          </h2>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
            <p>
              O Corretor 10x é o workshop ao vivo que ensina corretores de seguros a dominarem marketing digital, posicionamento e prospecção — as três alavancas que separam profissionais comuns dos que faturam alto no mercado.
            </p>
            <p>
              Com mais de 1.000 corretores treinados em todo o Brasil, o Corretor 10x se tornou referência para quem quer escalar resultados de forma previsível e consistente, usando estratégias testadas e aprovadas no mercado real.
            </p>
            <p>
              Um método prático, direto ao ponto e focado em resultado — sem enrolação, sem teoria vazia. Apenas o que funciona para transformar corretores comuns em referências do mercado.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://instagram.com/corretor10x_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
            >
              @corretor10x_
            </a>
            <a
              href="https://youtube.com/@corretor10_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light hover:border-primary hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
