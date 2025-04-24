
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Novo Benefício Disponível",
    message: "O benefício Gympass está disponível para ativação.",
    date: "2024-04-24",
    read: false,
  },
  {
    id: "2",
    title: "Crédito Recebido",
    message: "Seu Vale Refeição foi creditado com R$ 500,00.",
    date: "2024-04-23",
    read: true,
  },
  {
    id: "3",
    title: "Lembrete de Renovação",
    message: "Seu plano de saúde precisa ser renovado em 30 dias.",
    date: "2024-04-22",
    read: true,
  },
];

export default function Notifications() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-montserrat">Notificações</h2>
          <p className="text-muted-foreground font-inter">
            Mantenha-se atualizado sobre seus benefícios
          </p>
        </div>

        <div className="space-y-4">
          {mockNotifications.map((notification) => (
            <Card
              key={notification.id}
              className={`transition-colors hover:bg-muted/50 ${
                !notification.read ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <CardContent className="flex items-start gap-4 p-6">
                <Bell className="h-5 w-5 mt-1 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold font-montserrat">{notification.title}</h3>
                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <Badge variant="default" className="font-inter">
                          Nova
                        </Badge>
                      )}
                      <span className="text-sm text-muted-foreground font-inter">
                        {new Date(notification.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">{notification.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
