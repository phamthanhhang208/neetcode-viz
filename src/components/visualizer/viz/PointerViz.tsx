import ArrayViz from './ArrayViz';
import type { ArrayVizState } from '@/data/types';

interface Props {
  data: ArrayVizState;
  pointers: Record<string, number>;
}

export default function PointerViz({ data, pointers }: Props) {
  return <ArrayViz data={data} pointers={pointers} />;
}
