
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthCard({ children, title, subtitle }: AuthCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-2 text-center">
        <h2 className="text-3xl font-bold font-montserrat text-zargo-primary">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 font-inter">{subtitle}</p>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
