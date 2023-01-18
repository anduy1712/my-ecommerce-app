import React from 'react';
import FacebookIcon from 'src/assets/icons/FacebookIcon';
import LogoIcon from 'src/assets/icons/LogoIcon';
import { Link } from 'react-router-dom';
import CartIcon from 'src/assets/icons/CartIcon';
import SearchHeader from '../SearchHeader/SearchHeader';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-nc-primary to-nc-secondary text-white">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between py-1">
          <ul className="flex items-center gap-5">
            <li className="flex items-center h-full">
              <a
                href="#"
                className="relative text-xs font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Kênh Người Bán
              </a>
            </li>
            <li className="flex items-center h-full">
              <a
                href="#"
                className="relative text-xs font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Trở Thành Người Bán Shopee
              </a>
            </li>
            <li className="flex items-center h-full">
              <a
                href="#"
                className="relative text-xs font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Tải Ứng Dụng
              </a>
            </li>
            <li className="flex items-center h-full">
              <a href="#" className="relative text-xs font-light mr-1">
                Kết Nối
              </a>
              <FacebookIcon size={16} color="white" />
            </li>
          </ul>
          <ul className="flex gap-5">
            <li className="flex items-center h-full">
              <a
                href="#"
                className="relative text-xs font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Thông báo
              </a>
            </li>
            <li className="flex items-center h-full">
              <a
                href="#"
                className="relative text-xs font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Hỗ Trợ
              </a>
            </li>
            <li className="flex items-center h-full">
              <a
                href="#"
                className="relative text-xs font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Tiếng Việt
              </a>
            </li>
            <li className="flex items-center h-full">
              <a
                href="#"
                className="relative text-xs font-light after:absolute after:bg-white	after:w-[0.2px] after:h-[.9375rem] after:top-2/4 after:right-[-10px] after:-translate-y-1/2"
              >
                Đăng Ký
              </a>
            </li>
            <li className="flex items-center h-full">
              <a href="#" className="relative text-xs font-light ">
                Đâng Nhập
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-start my-3">
          <Link className="mr-5" to="/">
            <LogoIcon />
          </Link>
          <div className="w-[70%] mr-5">
            <SearchHeader />
            <ul className="flex gap-4 text-xs font-light mt-1 items-center">
              <li>Tui Xach Nu</li>
              <li>Tui Xach Nu</li>
              <li>Tui Xach Nu</li>
            </ul>
          </div>
          <div className="px-4 ">
            <Link to="">
              <CartIcon size={36} color="white" />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
