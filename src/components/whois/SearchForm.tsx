
import { Search, Loader2 } from "lucide-react";

interface SearchFormProps {
  domain: string;
  loading: boolean;
  onDomainChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SearchForm = ({ domain, loading, onDomainChange, onSubmit }: SearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Enter domain name..."
          value={domain}
          onChange={(e) => onDomainChange(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E4FEB]"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <button 
        type="submit"
        disabled={loading}
        className="bg-[#4E4FEB] text-white px-8 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            Searching...
          </>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};
