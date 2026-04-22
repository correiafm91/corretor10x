import { motion } from "framer-motion";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";

const QualificationForm = () => {
  useEffect(() => {
    if (!document.querySelector("#respondi_src")) {
      const script = document.createElement("script");
      script.async = true;
      script.id = "respondi_src";
      script.src = "https://embed.respondi.app/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 px-6 bg-secondary/30" id="formulario">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Diagnóstico 100% gratuito — Vagas limitadas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Solicite seu <span className="text-primary font-normal">Diagnóstico Gratuito</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Preencha o formulário abaixo e nosso time entrará em contato para identificar os gargalos da sua operação e mostrar como multiplicar suas vendas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-4 md:p-6"
        >
          <div
            data-respondi-container=""
            data-respondi-mode="regular"
            data-respondi-src="https://form.respondi.app/H5k95weS"
            data-respondi-width="100%"
            data-respondi-height="600px"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QualificationForm;
