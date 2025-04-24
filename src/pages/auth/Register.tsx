
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, UserPlus, ArrowLeft } from "lucide-react";
import { AuthCard } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular cadastro - Substitua por sua lógica de autenticação
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Cadastro realizado!",
        description: "Sua conta foi criada com sucesso.",
      });
      navigate("/onboarding");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zargo-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zargo-primary font-montserrat">Zargo</h1>
          <p className="mt-2 text-gray-600 font-inter">Sistema de Benefícios</p>
        </div>

        <AuthCard
          title="Criar Conta"
          subtitle="Preencha seus dados para começar"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                required
                className="font-inter"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail corporativo</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@empresa.com"
                required
                className="font-inter"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="font-inter pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-zargo-primary hover:bg-zargo-primary/90 font-inter"
              disabled={isLoading}
            >
              {isLoading ? (
                "Criando conta..."
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" /> Criar conta
                </>
              )}
            </Button>

            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-zargo-primary hover:text-zargo-primary/80 font-medium font-inter"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para login
              </Link>
            </div>
          </form>
        </AuthCard>
      </div>
    </div>
  );
}
