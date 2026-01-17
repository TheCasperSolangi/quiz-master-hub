import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and experimentation.",
    features: [
      "1,000 quiz responses/month",
      "5 active quizzes",
      "Basic analytics",
      "Community support",
    ],
    cta: "Get Started",
    variant: "heroOutline" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams and serious applications.",
    features: [
      "50,000 quiz responses/month",
      "Unlimited quizzes",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Webhooks",
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments and specific needs.",
    features: [
      "Unlimited responses",
      "Unlimited quizzes",
      "Real-time analytics",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "SOC 2 compliance",
    ],
    cta: "Contact Sales",
    variant: "heroOutline" as const,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 section-dark">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-section-dark-muted text-lg max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-accent bg-accent/5"
                  : "border-white/10 bg-section-dark"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-section-dark-muted">{plan.period}</span>
                  )}
                </div>
                <p className="text-section-dark-muted mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
