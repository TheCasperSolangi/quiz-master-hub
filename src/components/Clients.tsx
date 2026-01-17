import { motion } from "framer-motion";

const clients = [
  { name: "Vercel", logo: "V" },
  { name: "Stripe", logo: "S" },
  { name: "Notion", logo: "N" },
  { name: "Linear", logo: "L" },
  { name: "Figma", logo: "F" },
  { name: "Discord", logo: "D" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Trusted by industry leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Powering quizzes for the best teams
          </h2>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="group flex items-center gap-3 px-6 py-4 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.logo}
                </div>
                <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-medium mb-6">
            "QuizAPI transformed how we assess candidates. The API is incredibly 
            intuitive and the analytics are game-changing."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
              JD
            </div>
            <div className="text-left">
              <div className="font-semibold">John Doe</div>
              <div className="text-muted-foreground text-sm">VP of Engineering, TechCorp</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
