
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { AuthCard } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular login - Substitua por sua lógica de autenticação
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Bem-vindo de volta!",
        description: "Login realizado com sucesso.",
      });
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
          title="Login"
          subtitle="Entre com suas credenciais para acessar"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
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

            <div className="flex items-center justify-between text-sm">
              <Link
                to="/recuperar-senha"
                className="text-zargo-primary hover:text-zargo-primary/80 font-medium font-inter"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-zargo-primary hover:bg-zargo-primary/90 font-inter"
              disabled={isLoading}
            >
              {isLoading ? (
                "Entrando..."
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" /> Entrar
                </>
              )}
            </Button>

            <p className="text-center text-sm text-gray-600 font-inter">
              Não tem uma conta?{" "}
              <Link
                to="/cadastro"
                className="text-zargo-primary hover:text-zargo-primary/80 font-medium"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </AuthCard>
      </div>
    </div>
  );
}
