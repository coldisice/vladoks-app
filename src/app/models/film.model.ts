export interface Film {
    id: number;
    title: string;
    year: number;
    category: string[];
    rating: number;
    link: string;
    image: string;
    description?: string
}