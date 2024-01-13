import React, { useState } from 'react';
import HeartIcon from '@components/product/HeartIcon';

import { productState } from '@recoils/product';
import { userState } from '@recoils/users';
import { useRecoilValue } from 'recoil';


function ProductDetail() {
  const [showModal, setShowModal] = useState(false);
  const product = useRecoilValue(productState);
  const user = useRecoilValue(userState);

  const productPrice = product.sale_price;
  const userPoint = user.point;

  const finalPoint = userPoint - productPrice;

  const openPaymentModal = () => {
    setShowModal(true);
  };

  const closePaymentModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      <p className="btn border border-secondary px-4 py-2 mb-4 text-primary" onClick={openPaymentModal}>
        <i className="me-2 text-primary">🥕</i>구매하기
      </p>     


      {showModal && (
        <div className="modal" style={{ display: showModal ? 'block' : 'none'}}>
          <div className="modal-content p-0">
            <div className="container" style={{marginBottom: '30px' , marginTop: '20px'}} >
              <div className="row g-4 justify-content-center">
                <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4 bg-light rounded p-4">
                  <h1 className="display-6 mb-4">결제 <span className="fw-normal">모드</span></h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">보유 포인트</h5>
                    <p className="mb-0">{user.point} P</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">결제 포인트</h5>
                    <div>
                      <p className="mb-0">{product.sale_price} P</p>
                    </div>
                  </div>
                      <br />
                  <div className="py-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">잔여 포인트</h5>
                    <p className="mb-0 pe-4">{finalPoint} P</p>
                  </div>
                      <br />
                  <div className="text-center mt-4">
                    <button 
              className="btn border-secondary rounded-pill px-5 py-3 text-primary text-uppercase ml-4"
              type="button">결제하기</button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={closePaymentModal} className="btn border-secondary rounded-0 w-100 py-3 text-black text-uppercase" type="button">close</button>
          </div>
        </div>
      )}
    </div>
 
  );
}

export default ProductDetail;
