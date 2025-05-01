
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server } from "lucide-react";

interface NameServersCardProps {
  nameServers: {
    hostNames?: string[];
  };
}

export const NameServersCard = ({ nameServers }: NameServersCardProps) => {
  // Ensure we have an array of hostNames, even if the prop structure is unexpected
  const hostNames = Array.isArray(nameServers?.hostNames) 
    ? nameServers.hostNames 
    : [];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server className="w-5 h-5 text-[#4E4FEB]" />
          <span>Name Servers</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {hostNames.length > 0 ? (
            hostNames.map((ns: string, index: number) => (
              <li key={index} className="text-[#2D5087]">{ns}</li>
            ))
          ) : (
            <li className="text-gray-500">No nameservers found</li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};
