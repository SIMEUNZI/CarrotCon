import React, { useEffect, useState } from 'react';
import SubIntroSingle from '@pages/user/SubIntroSingle';

function Wishlist() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProductList(storedProducts);
  }, []);

  const handleRemoveFromWishlist = (index) => {
    const updatedProducts = [...productList];
    updatedProducts[index].liked = false; 

    setProductList(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const wishlistProducts = productList.filter((product) => product.liked);

  return (
    <div>
      <div className="container-fluid page-header py-5" style={{ marginBottom: '50px' }}>
        <h1 className="text-center text-white display-6">My page</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="/buy">Buy</a></li>
          <li className="breadcrumb-item active text-white">Wishlist</li>
        </ol>
      </div>
      <SubIntroSingle title="찜한 목록" pathName="Buy"></SubIntroSingle>
      <div className="container-fluid py-5 mt-5 d-flex justify-content-center" style={{ marginBottom: '10%' }}>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>상품명</th>
                <th>정가</th>
                <th>유효기간</th>
                <th>판매가</th>
                <th>좋아요</th>
              </tr>
<i className="fa fa-heart fa-2x text-danger"></i> 
<i className="far fa-heart fa-2x text-danger"></i>

            </thead>
            <tbody>
              {wishlistProducts.map((product, index) => (
                <tr key={index}>
                  <td style={{ verticalAlign: 'middle' }}>{product.name}</td>
                  <td style={{ verticalAlign: 'middle' }}>{product.price}</td>
                  <td style={{ verticalAlign: 'middle' }}>{product.expiration}</td>
                  <td style={{ verticalAlign: 'middle' }}>{product.finalPrice}</td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <button className="btn btn-md rounded-circle bg-light border" onClick={() => handleRemoveFromWishlist(index)}>
                      <i className="fa fa-heart text-danger"></i>
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

export default Wishlist;
