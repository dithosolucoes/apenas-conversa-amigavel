
import { Bell, Home, User, CreditCard, FileText, Star } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "/inicio" },
  { title: "Benefícios", icon: Star, url: "/beneficios" },
  { title: "Extrato", icon: FileText, url: "/extrato" },
  { title: "Perfil", icon: User, url: "/perfil" },
  { title: "Notificações", icon: Bell, url: "/notificacoes" },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-zargo-primary font-montserrat">Zargo</h1>
          <p className="text-sm text-gray-500 font-inter">Sistema de Benefícios</p>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
