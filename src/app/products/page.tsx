"use client"
import { Container } from "@/components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/interfaces";
import Image from "next/image";
import clsx from "clsx";
import utils from "@/helpers/utils"
import Link from "next/link";
import Skeleton from "./Skeleton";

export default function Products() {
  const { data, isLoading } = useQuery<Product[]>(['products'], () => {
    return axios.get('https://my-json-server.typicode.com/mhafizd21/cora-products-list/products')
      .then(res => res.data);
  })

  return (
    <main className="pt-6 pb-10">
      <Container>
        <div>
          <p className="mb-6 text-4 text-7">
            Our Products
          </p>
        </div>
        <div>
          {!!data?.length && (
            <div className="product-card__container">
              { data?.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                >
                  <div className={clsx('product-card', product?.is_available ? '' : 'product-card--disabled')}>
                    <div className="product-card__image-container">
                      <Image
                        className="product-card__image"
                        src={product?.images[0]}
                        alt={product?.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <div className="product-card-desc">
                      <p className="product-card-desc__title">
                        {product?.name}
                      </p>
                      {!product.is_available && (
                        <p className="product-card-desc--unavailable">
                          Unavailable
                        </p>
                      )}
                      <p className="product-card-desc__price">
                        {`Rp${utils.toNumberFormat(product?.price)}`}
                      </p>
                      <p className="product-card-desc__rating">
                        <span className="material-symbols-rounded product-card-desc-rating__star">
                          star
                        </span>
                        {product?.rating}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!data?.length && isLoading && (
            <div className="product-card__container">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(item => (
                <Skeleton key={item} />
              ))}
            </div>
          ) }
        </div>

      </Container>
    </main>
  )
}
