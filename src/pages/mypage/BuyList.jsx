import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

import { loginState } from '@recoils/login';
import SubIntroSingle from '@pages/user/SubIntroSingle';

function Buy() {
  const navigate = useNavigate();

  const user = useRecoilValue(loginState);
  if (user?.id === '' && user?.email === '') navigate('/login');

  const [productList, setProductList] = useState({ no: '', size: '', total: '', products: [] });

  const getProductList = useCallback(async (no = 1, size = 5) => {
    try {
      const resp = await axios.get('http://localhost:8000/products/', { params: { no, size } });
      setProductList(resp.data.list);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getProductList(1, 10);
  }, [getProductList]);

  return (
    <main id="main">
        {/* <!-- Single Page Header heartt --> */}
      <div className="container-fluid page-header py-5" style={{ marginBottom: '50px' }}>
        <h1 className="text-center text-white display-6">My page</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item active text-white">Buy</li>
          <li className="breadcrumb-item"><Link to="/sellList">Sell</Link></li>
        </ol>
      </div>
        {/* <!-- Single Page Header End --> */}

      <SubIntroSingle title="구매 목록" pathName="Buy"></SubIntroSingle>

       {/* <!-- Cart Page Start --> */}
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">이미지</th>
                            <th scope="col">상품명</th>
                            <th scope="col">구매가</th>
                            <th scope="col">바코드번호</th>
                            <th scope="col">구매일자</th>
                            <th scope="col">유효기간</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                        <img src="img/vegetable-item-2.jpg" class="img-fluid me-5 rounded-circle" style={{width: '80px', height: '80px'}} alt="" />
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4">브로콜리 상품권</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">10,000 P</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4" style={{ width: '100px'}}>
                                        <div class="input-group-btn">
                                    <p>-</p>                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">2024-01-19</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4">2025-12-25</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
    </main>

  )
}
export default Buy;

Buy.defaultProps = {
  sub: ''
};
