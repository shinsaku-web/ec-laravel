import { Image } from "./image";

export type Product = {
    id: number;
    shop_id: number;
    name: string;
    information: string;
    price: number;
    is_selling: boolean;
    sort_order: number;
    secondary_category_id: number;
    image1: string | null;
    image2: string | null;
    image3: string | null;
    image4: string | null;
    image_first: Image;
    image_second: Image;
    image_third: Image;
    image_fourth: Image;
    created_at: string | null;
    updated_at: string | null;
};
