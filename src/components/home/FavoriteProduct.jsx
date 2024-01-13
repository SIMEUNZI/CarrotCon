import React from 'react'
import { Link } from 'react-router-dom'

function favoriteProduct() {
  return (
<>
      <div className="container-fluid py-5">
    <div className="container py-5" style={{ marginTop: '50px' }} >
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h5 className="display-5">인기 기프티콘</h5>
        <p>좋아요 순위에 따른 이번 주 인기 기프티콘입니다.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-xl-4">
          <div className="p-4 rounded bg-light">
            <div className="row align-items-center">
              <div className="col-6">
              <img src="/img/피자(1).png" classNameName="img-fluid rounded-circle w-100" alt="피자" 
              style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '100%' }} />

              </div>
              <div className="col-6">
                <Link href="#" className="h5">도미노피자</Link>
                <h4 className="mb-3">25,000 Point</h4>
                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                    className="fa fa-shopping-bag me-2 text-primary"></i> 구매 하러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4">
          <div className="p-4 rounded bg-light">
            <div className="row align-items-center">
              <div className="col-6">
                <img src="img/치킨(1).png" className="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div className="col-6">
                <Link href="#" className="h5">BHC 치킨</Link>
                <h4 className="mb-3">18,000 Point</h4>
                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                    className="fa fa-shopping-bag me-2 text-primary"></i> 구매 하러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4">
          <div className="p-4 rounded bg-light">
            <div className="row align-items-center">
              <div className="col-6">
                <img src="img/커피(1).png" className="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div className="col-6">
                <Link href="#" className="h5">파스쿠찌 커피</Link>

                <h4 className="mb-3">5,000 Point</h4>
                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                    className="fa fa-shopping-bag me-2 text-primary"></i> 구매 하러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4">
          <div className="p-4 rounded bg-light">
            <div className="row align-items-center">
              <div className="col-6">
                <img src="img/best-product-4.jpg" className="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div className="col-6">
                <Link href="#" className="h5">Organic Tomato</Link>
                <div className="d-flex my-3">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4 className="mb-3">3.12 $</h4>
                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                    className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4">
          <div className="p-4 rounded bg-light">
            <div className="row align-items-center">
              <div className="col-6">
                <img src="img/best-product-5.jpg" className="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div className="col-6">
                <Link href="#" className="h5">Organic Tomato</Link>
                <div className="d-flex my-3">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4 className="mb-3">3.12 $</h4>
                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                    className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4">
          <div className="p-4 rounded bg-light">
            <div className="row align-items-center">
              <div className="col-6">
                <img src="img/best-product-6.jpg" className="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div className="col-6">
                <Link href="#" className="h5">Organic Tomato</Link>
                <div className="d-flex my-3">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4 className="mb-3">3.12 $</h4>
                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                    className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  
  )
}

export default favoriteProduct;