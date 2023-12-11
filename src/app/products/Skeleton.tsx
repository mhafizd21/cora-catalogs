import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
      <ContentLoader 
        speed={2}
        width="100%"
        height={200}
        viewBox="0 0 100% 200"
        backgroundColor="#cfc9c9"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="2" ry="2" width="100%" height="200" />
      </ContentLoader>
      </div>
      <div className="product-card-desc">
      <ContentLoader 
        speed={2}
        width="100%"
        height={63}
        viewBox="0 0 100% 63"
        backgroundColor="#cfc9c9"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="4" ry="4" width="100" height="16" /> 
        <rect x="0" y="22" rx="4" ry="4" width="120" height="18" /> 
        <rect x="0" y="47" rx="4" ry="4" width="50" height="16" />
      </ContentLoader>
      </div>
    </div>
  )
}

export default Skeleton