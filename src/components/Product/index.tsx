import React from 'react';

function Product() {
  return (
    <div className="mt-[110px] z-10">
      <div className="md:container md:mx-auto">
        <div className="bg-white text-center shadow-md mb-2 py-4 text-nc-primary sticky top-[110px] after:absolute after:w-full after:h-1 after:bg-nc-primary after:left-0 after:bottom-0">
          <h3>GỢI Ý HÔM NAY</h3>
        </div>
        <div className="flex flex-wrap -mx-1.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="w-1/6 px-1.5">
              <div className="shadow-md mb-2 font-light rounded-sm overflow-hidden hover:border hover:border-nc-primary hover:cursor-pointer">
                <img
                  src="https://cf.shopee.vn/file/sg-11134201-22110-5co0i2evafkve8_tn"
                  alt="img card"
                />
                <div className="px-2 py-2 text-x">
                  <h4 className="mb-5 font-normal text-black">
                    Lorem ipsum dolor sit amet consectetur.
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-nc-primary">75.000</p>
                    <span className="text-[10px] ">Da Ban 2,2k</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
