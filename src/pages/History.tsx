
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Transaction {
  id: string;
  date: string;
  benefit: string;
  amount: string;
  type: "credit" | "debit";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2024-04-24",
    benefit: "Vale Refeição",
    amount: "R$ 50,00",
    type: "credit",
  },
  {
    id: "2",
    date: "2024-04-23",
    benefit: "Vale Refeição",
    amount: "R$ 25,00",
    type: "debit",
  },
  {
    id: "3",
    date: "2024-04-22",
    benefit: "Vale Transporte",
    amount: "R$ 100,00",
    type: "credit",
  },
];

export default function History() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight font-montserrat">Extrato</h2>
          <p className="text-muted-foreground font-inter">
            Histórico de transações dos seus benefícios
          </p>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Benefício</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{new Date(transaction.date).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell>{transaction.benefit}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.type === "credit" ? "default" : "destructive"}>
                      {transaction.type === "credit" ? "Crédito" : "Débito"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
}
