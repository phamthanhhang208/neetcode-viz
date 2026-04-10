import { Star } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { cn } from '@/lib/utils';

interface Props {
  problemId: string;
  size?: number;
}

export default function FavoriteStar({ problemId, size = 14 }: Props) {
  const favorites = useFavorites((s) => s.favorites);
  const toggleFavorite = useFavorites((s) => s.toggleFavorite);
  const isFav = favorites.includes(problemId);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavorite(problemId);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'transition-colors flex-shrink-0',
        isFav
          ? 'text-accent-yellow hover:text-accent-yellow/70'
          : 'text-text-muted/30 hover:text-accent-yellow/50',
      )}
    >
      <Star size={size} fill={isFav ? 'currentColor' : 'none'} />
    </button>
  );
}
