import { Link } from 'react-router-dom';

interface LinkCardProps {
  title: string;
  date?: string;
  href: string;
}

export function LinkCard({ title, date, href }: LinkCardProps) {
  return (
    <Link to={href} className="block transition-transform hover:scale-[1.01] outline-none">
      
      <div 
        className="bg-background rounded-xl px-6 py-4 flex flex-row justify-between items-center gap-4 hover:bg-secondary/80 transition-colors shadow-sm cursor-pointer"
        style={{ border: '5px solid var(--secondary)' }} 
      >
        
        <h3 className="text-2xl font-bold text-foreground leading-normal tracking-tight truncate">
          {title}
        </h3>
        
        {date && (
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap text-right flex-shrink-0">
            {date}
          </span>
        )}
        
      </div>
      
    </Link>
  );
}