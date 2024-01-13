/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import axios from 'axios';
import { productState } from '@recoils/product';

import Pay from '@components/product/Pay';
import { userState } from '@recoils/users';
import HeartIcon from '@components/product/HeartIcon';

function ProductDetail() {
  const navigate = useNavigate();
  const localstorage = window.localStorage;

  useEffect(() => {
    if (!localstorage.user && user.email === '') {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  });

  const { id } = useParams();
  const user = useRecoilValue(userState);
  const product = useRecoilValue(productState);

  const getProductRecoild = useRecoilCallback(({ set }) => async (id) => {
    try {
      const resp = await axios.get('http://localhost:8000/product/checkProduct/'+ id);
      set(productState, resp.data.data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    getProductRecoild(id);
  }, [getProductRecoild, id]);

  return (
    <main id="main">
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5 rounded d-flex">
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div style={{ marginTop: '70px'}}> 
                <img
                  src={product?.imageName}
                  className="img-fluid rounded"
                  alt="사진"
                  style={{ width: '90%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center" style={{marginTop: '5%'}}>
              <h4 className="fw-bold mb-3 text-center text-secondary">
                {'\u2003'.repeat(6)}{product?.name}{'\u2003'.repeat(6)}
              </h4>
              <hr />
              <div className="text-center mb-3">
                <p className="fw-bold text-gray">정상가</p>
                <p>{'\u2003'.repeat(6)}<del>{product?.cost_price} Point</del> {'\u2003'.repeat(6)}</p>
              </div>
               {/* <hr /> */}
              <div className="text-center mb-3">
                <p className="fw-bold">할인가</p>
                <p className="fw-bold text-dark" style={{marginLeft: '-9%'}}>{'\u2003'.repeat(6)}{product?.sale_price} Point{'\u2003'.repeat(6)} 
                  <b className='text-danger' style={{fontSize: '15px', marginLeft: '-12%'}}>( {product.sale}% )</b></p>
              </div>
                {/* <hr /> */}
              <div className="text-center mb-3">
                <p className="fw-bold">유효기간</p>
                <p className="fw-bold text-dark">{'\u2003'.repeat(6)}{product?.ex_date} 까지{'\u2003'.repeat(6)}</p>
              </div>
                <hr />
              <div className="text-center mb-3">
                <p className="fw-bold">이용안내</p>
                <p className="fw-bold text-dark">{'\u2003'.repeat(6)}기간연장 및 환불불가{'\u2003'.repeat(6)}</p>
              </div>
              <div className="text-center mt-4 d-flex align-items-center" style={{ marginLeft: '30%' }}>
                <Pay />
                <i className="me-2 text-primary" style={{ marginLeft: '5px' }}></i>
                <p className="btn border border-secondary px-4 py-2 mb-4 text-primary">
                  <i className="me-2 text-primary" style={{ marginLeft: '5px' }}><HeartIcon /></i>
                </p>
              </div>

            </div>
            <div className="col-lg-12">
              <div className="tab-content mb-5">
                <div
                  className="tab-pane active"
                  id="nav-about"
                  role="tabpanel"
                  aria-labelledby="nav-about-tab"
                >
        <p style={{marginLeft: '20px'}}>🐇 판매자 ( <b>{user.nickname}</b> ) 님의 한마디 </p>
              <hr />
              <p className="fw-bold mb-5 text-center">
                {'\u2003'.repeat(6)} <h5>" {product.info} "</h5>{'\u2003'.repeat(6)}
              </p>
                  <div className="text-end">
                    <button className="btn btn-outline-secondary"  onClick={() => navigate('/product')}>목록</button>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
