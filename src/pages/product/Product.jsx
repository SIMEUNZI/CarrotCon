import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { productState } from '@recoils/product';

import HeartIcon from '@components/product/HeartIcon';

function Product() {

    const navigate = useNavigate();
    const [products, setProducts] = useRecoilState(productState);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const resp = await axios.get('http://localhost:8000/product/getProductList');
          setProducts(resp.data);
        } catch (error) {
          console.error('상품 목록을 불러오는데 실패했습니다.', error);
        }
      };
      fetchProducts();
    }, [setProducts]);

  const handleButtonClick = () => {
    navigate('/sellpage');
  };

  return (
        <div>
        <div class="container-fluid page-header py-5">
            <h1 class="text-center text-white display-6">Shop</h1>
            <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                <li class="breadcrumb-item active text-white">Shop</li>
                <li class="breadcrumb-item"><Link href="#">Sell</Link></li>
            </ol>
        </div>

        <div class="container-fluid fruite py-5">
            <div class="container py-5">
                <h1 class="mb-4">Gift shop</h1>
                <div class="row g-4">
                    <div class="col-lg-12">
                        <div class="row g-4">
                            <div class="col-xl-3 ">
                            <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100" 
                            style={{ borderWidth: '2px', marginBottom: '30px', borderColor: 'green' }} 
                            onClick={handleButtonClick}>상품 등록</button>    
                            </div>
                            <div class="col-6"> 
                                <div class="input-group w-100 mx-auto d-flex">
                                    <input type="search" class="form-control p-3" placeholder="찾으시는 상품명을 입력해주세요!" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
                                </div>
                            </div>
                            <div class="col-xl-3">
                                <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label for="fruits">Default Sorting:</label>
                                    <select id="fruits" name="fruitlist" class="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="volvo">최신순</option>
                                        <option value="saab">등록순</option>
                                        <option value="opel">조회순</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-3">
                                <div class="row g-4">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <h4>가격대별</h4>
                                            <ul class="list-unstyled fruite-categorie">
                                                <li>
                                                    <div class="d-flex justify-content-between fruite-name">
                                                        <Link href="#"><i class="fas fa-apple-alt me-2"></i>10,000 Point</Link>
                                                        <span>(3)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex justify-content-between fruite-name">
                                                        <Link href="#"><i class="fas fa-apple-alt me-2"></i>20,000 Point</Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex justify-content-between fruite-name">
                                                        <Link href="#"><i class="fas fa-apple-alt me-2"></i>30,000 Point</Link>
                                                        <span>(2)</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <h4 class="mb-3">최근 본 상품</h4>
                                        <div class="d-flex align-items-center justify-content-heartt">
                                            <div class="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src="img/best3.jpg" class="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 class="mb-2">스타벅스</h6>
                                                <div class="d-flex mb-2">
                                                      <HeartIcon />
                                                </div>
                                                <div class="d-flex mb-2">
                                                    <h5 class="fw-bold me-2">2.99 $</h5>
                                                    <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-heartt">
                                            <div class="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src="img/best6.jpg" class="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 class="mb-2">기프트카드 1만원권</h6>
                                                <div class="d-flex mb-2">
                                                     <HeartIcon />
                                                </div>
                                                <div class="d-flex mb-2">
                                                    <h5 class="fw-bold me-2">10 $</h5>
                                                    <h5 class="text-danger text-decoration-line-through">13.5 $</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-heartt">
                                            <div class="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                <img src="img/best2-1.jpg" class="img-fluid rounded" alt="" />
                                            </div>
                                            <div>
                                                <h6 class="mb-2">신세계상품권</h6>
                                                <div class="d-flex mb-2">
                                                    <HeartIcon />
                                                </div>
                                                <div class="d-flex mb-2">
                                                    <h5 class="fw-bold me-2">2.99 $</h5>
                                                    <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center my-4">
                                            <Link href="#" class="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                                <div className="col-lg-9">
                                <div>
                                <div className="row g-4 justify-content-center">
                                {products?.resp?.map((product) => (
                                <div key={product.product_id} className="col-md-6 col-lg-6 col-xl-4">
                                    <div className="rounded position-relative fruite-item">
                                    <div className="border border-lightgray">
                                        {/* 이미지 표시 */}
                                        <img
                                        key={product.product_id}
                                        src={product.imageName}
                                        alt={product.name}
                                        style={{ width: '300px', height: '250px', objectFit: 'cover' }}
                                        className="img-fluid w-100 rounded-top"
                                        />
                                        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" 
                                            style={{top: '10px', left: '10px', marginLeft: '77%'}}>
                                            <HeartIcon />
                                        </div>
                                    </div>
                                        <div className="p-4 border border-lightgray rounded-bottom">
                                        {/* 상품 정보 표시 */}
                                        <h5>{product.name}</h5>
                                        <div className="d-flex justify-content-between flex-lg-wrap">
   
                                           {/* <p style={{ color: 'gray', textDecoration: 'line-through'}}>{product.cost_price} P </p> */}

                                         <p className="text-dark fs-5 fw-bold" 
                                               style={{marginTop: '5px'}}>{`${product.sale_price}`} P</p>

                                            <Link to={"/productDetail/"+product.product_id} 
                                                className="btn border border-secondary px-3 mt-3"
                                                style={{marginTop: '1px'}}>
                                            <i className="me-2"></i>상세 보기
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                    </div>
                                    </div>
                                </div>
                                    <div class="col-12">
                                        <div class="pagination d-flex justify-content-center mt-5">
                                            <Link href="#" class="rounded">&laquo;</Link>
                                            <Link href="#" class="active rounded">1</Link>
                                            <Link href="#" class="rounded">2</Link>
                                            <Link href="#" class="rounded">3</Link>
                                            <Link href="#" class="rounded">4</Link>
                                            <Link href="#" class="rounded">5</Link>
                                            <Link href="#" class="rounded">&raquo;</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 )
};

export default Product;