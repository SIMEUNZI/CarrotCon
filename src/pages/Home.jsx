import React from 'react'
import { Link } from 'react-router-dom';
import HeartIcon from '@components/product/HeartIcon';


function Home() {
  return (
    <>

    <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-md-12 col-lg-7">
                    <h4 className="mb-3 text-secondary">최대 50% 할인</h4>
                    <h1 className="mb-10 display-3"><sub>기프티콘 혁명,</sub> 캐롯티콘</h1>
                </div>
                <div className="col-md-12 col-lg-5">
                    <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active rounded">
                        <Link to="product" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3   px-5" style={{marginTop: '-80px'}}>BUY</Link>
                              <img src="img/ss.png" alt="First slide"/>
                                <h4 className="text-primary">지금 바로 구매하세요...!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid service py-5">
        <div className="container py-5">
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <Link href="#">
                        <div className="service-item bg-secondary rounded border border-secondary">
                            <img src="img/best1.jpg" className="img-fluid rounded-top w-100" alt="" />
                            <div className="px-4 rounded-bottom">
                                <div className="service-content bg-primary text-center p-4 rounded">
                                    <h5 className="text-white">불금치킨+모짜치즈볼+콜라1.25L</h5>
                                    <h3 className="mb-0">20% OFF</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Link href="#">
                        <div className="service-item bg-dark rounded border border-dark">
                            <img src="img/best2-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                            <div className="px-4 rounded-bottom">
                                <div className="service-content bg-light text-center p-4 rounded">
                                    <h5 className="text-primary">신세계상품권 교환권</h5>
                                    <h3 className="mb-0">30% OFF</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Link href="#">
                        <div className="service-item bg-primary rounded border border-primary">
                            <img src="img/best3.jpg" className="img-fluid rounded-top w-100" alt="" />
                            <div className="px-4 rounded-bottom">
                                <div className="service-content bg-secondary text-center p-4 rounded">
                                    <h5 className="text-white"><small>카페 아메리카노 T 2잔 + 부드러운 생크림 카스텔라</small></h5>
                                    <h3 className="mb-0">20% OFF</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={{maxWidth: '700px'}}>
                <h1 className="display-4 text-secondary">Best Product</h1>
                <p>좋아요 순위에 따른 이번주 인기 기프티콘 입니다.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="img/best1.jpg" className="img-fluid rounded-circle w-100" alt=""/>
                            </div>
                            <div className="col-6">
                                <Link href="#" className="h5">굽네치킨</Link>
                                <div className="d-flex my-3">
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="me-2 text-primary"><HeartIcon /></i> Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="img/best4.jpg" className="img-fluid rounded-circle w-100" alt=""/>
                            </div>
                            <div className="col-6">
                                <Link href="#" className="h5">굽네치킨</Link>
                                <div className="d-flex my-3">
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="me-2 text-primary"><HeartIcon /></i> Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="img/best5.jpg" className="img-fluid rounded-circle w-100" alt=""/>
                            </div>
                            <div className="col-6">
                                <Link href="#" className="h5">굽네치킨</Link>
                                <div className="d-flex my-3">
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart text-primary"></i>
                                    <i className="fas fa-heart"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="me-2 text-primary"><HeartIcon /></i> Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="img/best-product-4.jpg" className="img-fluid rounded-circle w-100" alt=""/>
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
                                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="img/best-product-5.jpg" className="img-fluid rounded-circle w-100" alt=""/>
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
                                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <img src="img/best-product-6.jpg" className="img-fluid rounded-circle w-100" alt=""/>
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
                                <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
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

export default Home;