
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Benefit {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "available" | "active" | "pending";
}

interface BenefitsGridProps {
  benefits: Benefit[];
  onSelect: (id: string) => void;
}

export function BenefitsGrid({ benefits, onSelect }: BenefitsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {benefits.map((benefit) => (
        <Card key={benefit.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="font-montserrat">{benefit.title}</CardTitle>
              <Badge variant={benefit.status === "active" ? "default" : "secondary"}>
                {benefit.status === "active" ? "Ativo" : "Disponível"}
              </Badge>
            </div>
            <CardDescription>{benefit.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4 font-inter">{benefit.description}</p>
            <Button
              onClick={() => onSelect(benefit.id)}
              variant="outline"
              className="w-full font-inter"
            >
              Ver detalhes
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
