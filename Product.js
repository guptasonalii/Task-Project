import React from "react";
import "../Style.css";
import ear2 from "../Images/ear2.png";
import ear3 from "../Images/ear3.png";
const Product = () => {
  return (
    <>
      <div className="container1">
        <h1>List Product</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3">
              <div className="col-md-10  col-mg-8 col-11  max-auto main_cart mb-lg-0 mb-5 shadow">
                <div className="card p-4">
                  <h2 className="p-4">Cart Items</h2>
                  <div className="row">
                    <div className="col-md-5 col-11 max-auto bg-light d-flex justify-content-center align-itmes-center shadow product_img">
                      <img src={ear2} className="img-fluid" />
                    </div>
                    {/* cart product details */}
                    <div className="col-md-7 max-auto col-11 px-4 mt-2">
                      <div className="row">
                        {/* produt name */}
                        <div className="col-6 cart-title">
                          <h1 mb-4 prouct_name>
                            Stone Earing
                          </h1>
                          <p p className="m-2">
                            color:Blue
                          </p>
                          <p className="m-2">size:Small</p>
                        </div>
                        {/* quantity inc dec */}
                        <div className="col-6">
                          <ul className="pagination justify-content-end set_quantity">
                            <li className="page-item disabled">
                              <button className="page-link">
                                <i class="fa-solid fa-minus"></i>
                              </button>
                            </li>
                            <li className="page-item">
                              <input
                                type="text"
                                className="page-link"
                                value="1"
                                id="textbox"
                              />
                            </li>
                            <li className="page-item">
                              <button className="page-link">
                                <i class="fa-solid fa-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* remove move and price */}
                      <div className="row">
                        <div className="col-8 d-flex justify-content-between remove_wish">
                          <p>
                            <i class="fa-solid fa-trash"></i>Remove Item
                          </p>
                          <p>
                            <i class="fa-solid fa-heart"></i>Wshlist
                          </p>
                        </div>
                        <div className="col-4 d-flex justify-content-end price_money">
                          <h3>
                            $<span id="itemval">0.00</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 card */}
                <div className="card p-4">
                  <h2 className="p-4">Cart Items</h2>
                  <div className="row">
                    <div className="col-md-5 col-11 max-auto bg-light d-flex justify-content-center align-itmes-center shadow product_img">
                      <img src={ear3} className="img-fluid" />
                    </div>
                    {/* cart product details */}
                    <div className="col-md-7 max-auto col-11 px-4 mt-2">
                      <div className="row">
                        {/* produt name */}
                        <div className="col-6 cart-title">
                          <h1 mb-4 prouct_name>
                            Oxidised Earing
                          </h1>
                          <p p className="m-2">
                            color:Blue
                          </p>
                          <p className="m-2">size:Small</p>
                        </div>
                        {/* quantity inc dec */}
                        <div className="col-6">
                          <ul className="pagination justify-content-end set_quantity">
                            <li className="page-item disabled">
                              <button className="page-link">
                                <i class="fa-solid fa-minus"></i>
                              </button>
                            </li>
                            <li className="page-item">
                              <input
                                type="text"
                                className="page-link"
                                value="1"
                                id="textbox"
                              />
                            </li>
                            <li className="page-item">
                              <button className="page-link">
                                <i class="fa-solid fa-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* remove move and price */}
                      <div className="row">
                        <div className="col-8 d-flex justify-content-between remove_wish">
                          <p>
                            <i class="fa-solid fa-trash"></i>Remove Item
                          </p>
                          <p>
                            <i class="fa-solid fa-heart"></i>Wshlist
                          </p>
                        </div>
                        <div className="col-4 d-flex justify-content-end price_money">
                          <h3>
                            $<span id="itemval">0.00</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="col-md-12 col-lg-4 col-11 max-auto mt-md-5">
                <div className="right_side p-3 shadow bg-white">
                  <h2 className="product_name mb-5">Total Amount</h2>

                  <div className="price_indiv d-flex justify-content-between">
                    <p>product amount</p>
                    <p>
                      <span>$0.00</span>
                    </p>
                  </div>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>
                      <span>$0.00</span>
                    </p>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
