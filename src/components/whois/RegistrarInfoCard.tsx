
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";

interface RegistrarInfoCardProps {
  registrar: {
    name: string;
    ianaId: string;
    url: string;
    email: string;
    phone: string;
  };
  getValueOrDash: (value: any) => string;
}

export const RegistrarInfoCard = ({ registrar, getValueOrDash }: RegistrarInfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#4E4FEB]" />
          Registrar Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p><span className="font-medium">Registrar:</span> {getValueOrDash(registrar?.name)}</p>
        <p><span className="font-medium">IANA ID:</span> {getValueOrDash(registrar?.ianaId)}</p>
        <p><span className="font-medium">URL:</span> {getValueOrDash(registrar?.url)}</p>
        <p><span className="font-medium">Email:</span> {getValueOrDash(registrar?.email)}</p>
        <p><span className="font-medium">Phone:</span> {getValueOrDash(registrar?.phone)}</p>
      </CardContent>
    </Card>
  );
};
