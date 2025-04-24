
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

interface BenefitCardProps {
  title: string;
  value: string;
  description: string;
}

export function BenefitCard({ title, value, description }: BenefitCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium font-inter">{title}</CardTitle>
        <CreditCard className="h-4 w-4 text-zargo-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-montserrat text-zargo-primary">{value}</div>
        <p className="text-xs text-muted-foreground font-inter">{description}</p>
      </CardContent>
    </Card>
  );
}
