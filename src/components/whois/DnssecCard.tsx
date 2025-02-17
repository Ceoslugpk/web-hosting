
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface DnssecCardProps {
  dnssec: string;
  getValueOrDash: (value: any) => string;
}

export const DnssecCard = ({ dnssec, getValueOrDash }: DnssecCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#4E4FEB]" />
          DNSSEC Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p><span className="font-medium">DNSSEC:</span> {getValueOrDash(dnssec)}</p>
      </CardContent>
    </Card>
  );
};
