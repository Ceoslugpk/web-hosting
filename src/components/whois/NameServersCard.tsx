
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server } from "lucide-react";

interface NameServersCardProps {
  nameServers: {
    hostNames?: string[];
  };
}

export const NameServersCard = ({ nameServers }: NameServersCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server className="w-5 h-5 text-[#4E4FEB]" />
          Name Servers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {nameServers?.hostNames?.filter(Boolean).map((ns: string, index: number) => (
            <li key={index} className="text-[#2D5087]">{ns}</li>
          )) || <li>-</li>}
        </ul>
      </CardContent>
    </Card>
  );
};
