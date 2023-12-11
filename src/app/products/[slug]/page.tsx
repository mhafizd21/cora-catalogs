import { Container } from '@/components'
import { Product } from '@/interfaces'
import axios from 'axios'
import React, { FC, useState } from 'react'
import Gallery from './Gallery'
import utils from '@/helpers/utils'

async function getData(id: string) {
  const data = await axios.get(`https://my-json-server.typicode.com/mhafizd21/cora-products-list/products/${id}`)
    .then(res => res.data)

  return data
}

const ProductDetail: FC<{ params: { slug: string } }> = async ({ params }) => {
  const { slug } = params;
  const detail: Product = await getData(slug);

  return (
    <main className="pt-6 pb-10">
      <Container>
        <div className="product-detail">
          <div>
            <Gallery images={detail?.images} />
          </div>
          <div>
            <h1 className="product-detail__title">
              {detail.name}
            </h1>
            <div className="product-detail__helper">
              <p className="product-detail__category">
                {detail.category?.name}
              </p>
              <p className="product-detail__rating">
                <span className="material-symbols-rounded product-detail-rating__star">
                  star
                </span>
                {detail.rating}
              </p>
              {!detail.is_available && (
                <p className="product-detail__availability">
                  Unavailable
                </p>
              )}
            </div>
            <p className="product-detail__price">
              {`Rp${utils.toNumberFormat(detail.price)}`}
            </p>
            <p className="product-detail__desc">
              {detail.description}
            </p>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default ProductDetail