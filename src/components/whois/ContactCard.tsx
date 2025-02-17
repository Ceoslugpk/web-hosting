
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ContactInfo {
  organization?: string;
  state?: string;
  country?: string;
  email?: string;
  phone?: string;
}

interface ContactCardProps {
  title: string;
  icon: LucideIcon;
  contact: ContactInfo;
  getValueOrDash: (value: any) => string;
  showState?: boolean;
}

export const ContactCard = ({ title, icon: Icon, contact, getValueOrDash, showState = true }: ContactCardProps) => {
  const hasData = contact && Object.keys(contact).length > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-[#4E4FEB]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {hasData ? (
          <>
            <p><span className="font-medium">Organization:</span> {getValueOrDash(contact.organization)}</p>
            {showState && <p><span className="font-medium">State/Province:</span> {getValueOrDash(contact.state)}</p>}
            <p><span className="font-medium">Country:</span> {getValueOrDash(contact.country)}</p>
            <p><span className="font-medium">Email:</span> {getValueOrDash(contact.email)}</p>
            <p><span className="font-medium">Phone:</span> {getValueOrDash(contact.phone)}</p>
          </>
        ) : (
          <p className="text-gray-500">Contact information is private</p>
        )}
      </CardContent>
    </Card>
  );
};
