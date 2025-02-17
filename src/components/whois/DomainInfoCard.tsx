
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface DomainInfoCardProps {
  domainInfo: {
    domainName: string;
    status: string;
    createdDate: string;
    updatedDate: string;
    expiresDate: string;
    domain_age: string;
    domain_grace_period: string;
  };
  formatDate: (date: string) => string;
  getValueOrDash: (value: any) => string;
}

export const DomainInfoCard = ({ domainInfo, formatDate, getValueOrDash }: DomainInfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#4E4FEB]" />
          Domain Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p><span className="font-medium">Domain Name:</span> {getValueOrDash(domainInfo.domainName)}</p>
        <p><span className="font-medium">Status:</span> {getValueOrDash(domainInfo.status)}</p>
        <p><span className="font-medium">Created:</span> {formatDate(domainInfo.createdDate)}</p>
        <p><span className="font-medium">Updated:</span> {formatDate(domainInfo.updatedDate)}</p>
        <p><span className="font-medium">Expires:</span> {formatDate(domainInfo.expiresDate)}</p>
        <p><span className="font-medium">Domain Age:</span> {getValueOrDash(domainInfo.domain_age)}</p>
        <p><span className="font-medium">Grace Period:</span> {getValueOrDash(domainInfo.domain_grace_period)}</p>
      </CardContent>
    </Card>
  );
};
