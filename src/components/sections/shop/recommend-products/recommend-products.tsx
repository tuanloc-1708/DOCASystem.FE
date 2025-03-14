"use client";

import { useState, useEffect } from "react";
import { GetProductDetailResponse } from "@/api/generated";
import CardProduct from "@/components/common/card/card-product/card-food";
import { ProductService } from "@/service/product-service";

interface RecommendProductsProps {
  currentProductId: string;
}

export default function RecommendProducts({
  currentProductId,
}: RecommendProductsProps) {
  const [products, setProducts] = useState<GetProductDetailResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecommendedProducts();
  }, [currentProductId]);

  const fetchRecommendedProducts = async () => {
    setLoading(true);
    try {
      const response = await ProductService.getProducts({
        page: 1,
        size: 4,
      });

      if (response.data.items) {
        const filteredProducts = response.data.items.filter(
          (product) => product.id !== currentProductId
        );
        setProducts(filteredProducts);
      }
    } catch (error) {
      console.error("Error fetching recommended products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-6">Đang tải sản phẩm đề xuất...</div>;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
