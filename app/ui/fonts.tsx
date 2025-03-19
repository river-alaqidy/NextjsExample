import { Inter, Lusitana } from 'next/font/google';

// idk if this should be .ts or .tsx

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'] 
});