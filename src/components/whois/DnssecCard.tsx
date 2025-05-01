
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface DnssecCardProps {
  dnssec: string;
  getValueOrDash: (value: any) => string;
}

export const DnssecCard = ({ dnssec, getValueOrDash }: DnssecCardProps) => {
  const dnssecValue = getValueOrDash(dnssec).toLowerCase();
  const isSecured = dnssecValue === "signed";
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className={`w-5 h-5 ${isSecured ? 'text-green-500' : 'text-[#4E4FEB]'}`} />
          DNSSEC Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-medium">DNSSEC:</span>{" "}
          <span className={isSecured ? "text-green-500 font-medium" : "text-gray-600"}>
            {isSecured ? "Secured (Signed)" : "Not Secured (Unsigned)"}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
