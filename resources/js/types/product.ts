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
    image_first: Image | null;
    image_second: Image | null;
    image_third: Image | null;
    image_fourth: Image | null;
};
