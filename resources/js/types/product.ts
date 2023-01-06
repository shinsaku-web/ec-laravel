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
    created_at: string | null;
    updated_at: string | null;
};

export type ProductIndex = Product & {
    image1: string | null;
    image2: string | null;
    image3: string | null;
    image4: string | null;
    image_first: Image;
    image_second: Image;
    image_third: Image;
    image_fourth: Image;
};

export type ProductInput = Product & {
    image1: File | null;
    image2: File | null;
    image3: File | null;
    image4: File | null;
};
