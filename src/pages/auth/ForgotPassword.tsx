
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { AuthCard } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio de email - Substitua por sua lógica
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
      toast({
        title: "E-mail enviado!",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
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
          title="Recuperar Senha"
          subtitle={
            emailSent
              ? "Verifique seu e-mail para prosseguir"
              : "Digite seu e-mail para recuperar sua senha"
          }
        >
          {!emailSent ? (
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

              <Button
                type="submit"
                className="w-full bg-zargo-primary hover:bg-zargo-primary/90 font-inter"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" /> Enviar instruções
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
          ) : (
            <div className="space-y-4">
              <p className="text-center text-gray-600 font-inter">
                Se houver uma conta associada a este e-mail, você receberá as instruções
                para redefinir sua senha.
              </p>
              <Button
                variant="outline"
                className="w-full font-inter"
                onClick={() => setEmailSent(false)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Tentar novamente
              </Button>
              <div className="text-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm text-zargo-primary hover:text-zargo-primary/80 font-medium font-inter"
                >
                  Voltar para login
                </Link>
              </div>
            </div>
          )}
        </AuthCard>
      </div>
    </div>
  );
}
