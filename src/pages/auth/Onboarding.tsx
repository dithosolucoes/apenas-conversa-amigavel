
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Bem-vindo ao Zargo!",
    description: "Sua plataforma completa de gestão de benefícios corporativos.",
    image: "benefit-platform.svg",
  },
  {
    title: "Benefícios Personalizados",
    description: "Explore e ative os benefícios disponíveis para você.",
    image: "benefits.svg",
  },
  {
    title: "Acompanhamento em Tempo Real",
    description: "Monitore seus saldos e utilização de benefícios facilmente.",
    image: "monitoring.svg",
  },
  {
    title: "Suporte Quando Precisar",
    description: "Nossa equipe está sempre pronta para ajudar você.",
    image: "support.svg",
  },
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/inicio");
    }
  };

  const handleSkip = () => {
    navigate("/inicio");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zargo-background p-4">
      <Card className="w-full max-w-4xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Imagem ilustrativa (placeholder) */}
          <div className="w-full md:w-1/2 bg-zargo-primary p-8 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-64 h-64 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                {/* Aqui você pode adicionar as imagens do tour */}
                <span className="text-6xl">🎉</span>
              </div>
            </div>
          </div>

          {/* Conteúdo do passo atual */}
          <div className="w-full md:w-1/2 p-8">
            <div className="h-full flex flex-col">
              {/* Indicador de progresso */}
              <div className="flex gap-2 mb-8">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full ${
                      index <= currentStep
                        ? "bg-zargo-primary"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold font-montserrat text-gray-800">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-600 font-inter">
                  {steps[currentStep].description}
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <Button
                  onClick={handleNext}
                  className="w-full bg-zargo-primary hover:bg-zargo-primary/90 font-inter"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Começar
                    </>
                  ) : (
                    <>
                      Próximo <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                {currentStep < steps.length - 1 && (
                  <Button
                    variant="outline"
                    onClick={handleSkip}
                    className="w-full font-inter"
                  >
                    Pular tour
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
