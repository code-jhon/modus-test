export interface BannerProps {
  imageParam: string;
}

export interface Product {
  id:          string;
  title:       string;
  category:    string;
  description: string;
  images:      string[];
  variants:    Variant[];
  price:       string;
  tags:        Tag[];
}

export enum Tag {
  Awesome = "Awesome",
  Ergonomic = "Ergonomic",
  Fantastic = "Fantastic",
  Generic = "Generic",
  Gorgeous = "Gorgeous",
  Handcrafted = "Handcrafted",
  Handmade = "Handmade",
  Incredible = "Incredible",
  Intelligent = "Intelligent",
  Licensed = "Licensed",
  Practical = "Practical",
  Refined = "Refined",
  Rustic = "Rustic",
  Sleek = "Sleek",
  Small = "Small",
  Tasty = "Tasty",
  Unbranded = "Unbranded",
}

export interface Variant {
  id:       string;
  quantity: number;
  title:    Title;
  sku:      string;
}

export enum Title {
  Concrete = "Concrete",
  Cotton = "Cotton",
  Fresh = "Fresh",
  Frozen = "Frozen",
  Granite = "Granite",
  Metal = "Metal",
  Plastic = "Plastic",
  Rubber = "Rubber",
  Soft = "Soft",
  Steel = "Steel",
  Wooden = "Wooden",
}

export interface ProductsInterface {
  data: Product[] | undefined | unknown;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}