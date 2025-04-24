
import DashboardLayout from "@/components/layout/DashboardLayout";
import { BenefitsGrid } from "@/components/dashboard/BenefitsGrid";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Benefit {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "active" | "available" | "pending";
}

const mockBenefits: Benefit[] = [
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
  {
    id: "4",
    title: "Plano Odontológico",
    description: "Cobertura odontológica completa",
    category: "Saúde",
    status: "pending",
  },
  {
    id: "5",
    title: "Gympass",
    description: "Acesso a academias e atividades físicas",
    category: "Bem-estar",
    status: "available",
  },
];

const categories = ["Todos", "Alimentação", "Saúde", "Transporte", "Bem-estar"];

export default function Benefits() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredBenefits = mockBenefits.filter((benefit) => {
    const matchesSearch = benefit.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || benefit.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBenefitSelect = (id: string) => {
    navigate(`/beneficios/${id}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-montserrat">Benefícios</h2>
          <p className="text-muted-foreground font-inter">
            Explore todos os benefícios disponíveis para você
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar benefícios..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="font-inter"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <BenefitsGrid benefits={filteredBenefits} onSelect={handleBenefitSelect} />
      </div>
    </DashboardLayout>
  );
}
