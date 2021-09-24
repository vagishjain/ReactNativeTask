export interface ProductInterface {
  id: number;
  brand?: string;
  name?: string;
  price?: string;
  image_link?: string;
  description?: string;
  rating?: number;
  product_colors?: ProductColors[];
}

export interface ProductColors {
  hex_value: string;
  colour_name: string;
}

export interface ProductListInterface {
  productList: ProductInterface[];
  isLoading: boolean;
}
