export type Product = {
    id: number;
    shop_id: number;
    name: string;
    information: string;
    price: number;
    is_selling: boolean;
    sort_order: number;
    secondary_category_id: number;
    image1: number | null;
    image2: number | null;
    image3: number | null;
    image4: number | null;
    created_at: string | null;
    updated_at: string | null;
};
