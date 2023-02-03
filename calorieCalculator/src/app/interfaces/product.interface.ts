export interface IProductsRequest {
    product_name: string;
    product_calorie: number;
    grams: number;
    id: number;
}

export interface IProduct {
    productName: string;
    productCalorie: number;
    grams: number;
    productId?: number;
}
