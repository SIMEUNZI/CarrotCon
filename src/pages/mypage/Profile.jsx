import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productState } from '@recoils/product';
import { Link, useNavigate } from 'react-router-dom';
import { userState } from '@recoils/users';

function Profile() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const localstorage = window.localStorage;

  useEffect(() => {
    if (!localstorage.user && user.email === '') {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  });

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

const handleDelete = async (product_id) => {
  try {
    await axios.delete(`http://localhost:8000/product/deleteProduct/${product_id}`);
    
    setProducts((prevProducts) => ({
      resp: prevProducts.resp.filter((product) => product.product_id !== product_id),
    }));
    
    console.log(`${product_id} 상품을 삭제했습니다.`);
  } catch (error) {
    console.error('상품 삭제 중 오류가 발생했습니다.', error);
  }
};


  return (
    <div>
      <div className="container-fluid page-header py-5" style={{ marginBottom: '50px' }}>
        <h1 className="text-center text-white display-6">My page</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/buyList">Buy</Link></li>
          <li className="breadcrumb-item active text-white">Sell</li>
        </ol>
      </div>
      <div style={{ display: 'inline-block', border: '1px solid black', padding: '10px', marginLeft: '5%' }}>
        <h5>{user?.nickname} 님</h5>
        <h5>보유 포인트: {user?.point}</h5>
      </div>

      <div style={{ display: 'inline-block', border: '1px solid black', padding: '10px', marginLeft: '25%' }}>
        <h5>{user?.name} 님</h5>
        <h5>보유 포인트: {user?.point}</h5>
        <h5>전화번호: {user.tel || user.id}</h5>
        <h5>보유 포인트: {user?.email}</h5>
      </div>
      <div className="container-fluid py-5 mt-5 d-flex justify-content-center" style={{ marginBottom: '10%' }}>
        <div className="container">
          {/* 상품 정보 표시 테이블 */}
          <table className="table">
            <thead>
              <tr>
                <th>이미지</th>
                <th>상품명</th>
                <th>바코드 번호</th>
                <th>정가</th>
                <th>유효기간</th>
                <th>판매가</th>
                <th>판매상태</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {products?.resp?.map((product) => (
                <tr key={product.product_id}>
                  {/* 이미지 표시 */}
                  <td>
                    <Link to={"/productDetail/"+product.product_id} 
                        className="btn border border-secondary px-3"
                        style={{marginTop: '1px'}}>
                    <i className="me-2"></i>
                    <img
                      src={product.imageName}
                      alt={product.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    </Link>
                  </td>
                  {/* 상품 정보 */}
                  <td>{product.name}</td>
                  <td>{product.barcode}</td>
                  <td>{product.cost_price} P</td>
                  <td>{product.ex_date}</td>
                  <td>{product.sale_price} P</td>
                  <td>판매중</td>
                  {/* 삭제 버튼 */}
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border" onClick={() => handleDelete(product.product_id)}>
                      <i className="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default Profile