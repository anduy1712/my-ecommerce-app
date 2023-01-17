import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-b from-nc-primary to-nc-secondary text-white">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between py-1">
          <ul className="flex gap-5">
            <li>
              <a
                href="#"
                className="relative text-sm font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Kênh Người Bán
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-sm font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Trở Thành Người Bán Shopee
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-sm font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Tải Ứng Dụng
              </a>
            </li>
            <li>
              <a href="#" className="relative text-sm font-light ">
                Kết Nối
              </a>
            </li>
          </ul>
          <ul className="flex gap-5">
            <li>
              <a
                href="#"
                className="relative text-sm font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Thông báo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-sm font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Hỗ Trợ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-sm font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Tiếng Việt
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-sm font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Đăng Ký
              </a>
            </li>
            <li>
              <a href="#" className="relative text-sm font-light ">
                Đâng Nhập
              </a>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
