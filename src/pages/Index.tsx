
import DashboardLayout from "@/components/layout/DashboardLayout";
import { BenefitCard } from "@/components/dashboard/BenefitCard";
import { BenefitsGrid } from "@/components/dashboard/BenefitsGrid";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Dados mockados para exemplo - removed 'as const' to make it mutable
const mockBenefits = [
  {
    id: "1",
    title: "Vale Refeição",
    description: "Benefício para alimentação durante o expediente",
    category: "Alimentação",
    status: "active",
  },
  {
    id: "2",
    title: "Plano de Saúde",
    description: "Cobertura médica completa",
    category: "Saúde",
    status: "available",
  },
  {
    id: "3",
    title: "Vale Transporte",
    description: "Auxílio para deslocamento",
    category: "Transporte",
    status: "active",
  },
];

export default function Index() {
  const navigate = useNavigate();

  const handleBenefitSelect = (id: string) => {
    navigate(`/beneficios/${id}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-montserrat text-zargo-dark">
            Bem-vindo de volta!
          </h2>
          <p className="text-muted-foreground font-inter">
            Aqui está um resumo dos seus benefícios
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <BenefitCard
            title="Saldo Vale Refeição"
            value="R$ 850,00"
            description="Disponível para uso"
          />
          <BenefitCard
            title="Saldo Vale Alimentação"
            value="R$ 650,00"
            description="Disponível para uso"
          />
          <BenefitCard
            title="Benefícios Ativos"
            value="4"
            description="Total de benefícios em uso"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 font-montserrat">Seus Benefícios</h3>
          <BenefitsGrid benefits={mockBenefits} onSelect={handleBenefitSelect} />
        </div>
      </div>
    </DashboardLayout>
  );
}
