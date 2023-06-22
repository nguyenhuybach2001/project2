import React from "react";
import "./index.style.scss";
import { Button, Input } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { item } from "./header";

export default function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <>
      <div className=" bg-[#1c89f5]">
        <div className="container  h-28 grid grid-cols-10 gap-x-3 items-center m-auto">
          <h1 className="text-white col-span-2"> Bán sách lậu</h1>
          <div className="col-span-5">
            <Search
              placeholder="input search text"
              enterButton={
                <Button type="primary" size="large" icon={<SearchOutlined />}>
                  Tìm kiếm
                </Button>
              }
              size="large"
              onSearch={onSearch}
            />
          </div>
          <div className="col-span-2  text-center text-white">
            <UserOutlined className="mr-3 text-2xl" />
            <Link className="no-underline !text-white">Đăng nhập</Link> /{" "}
            <Link className="no-underline !text-white">Đăng ký</Link>
          </div>
          <div className="col-span-1 cursor-pointer text-white text-right">
            <ShoppingCartOutlined className="mr-2 text-2xl" />
            Giỏ hàng
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <Carousel
          swipe={false}
          animation="slide"
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              height: "100%",
              padding: 0,
              border: "none",
            },
          }}
          NavButton={({ onClick, style, next, prev }) => {
            return (
              <Button onClick={onClick} style={style}>
                {prev && <LeftOutlined />}
                {next && <RightOutlined />}
              </Button>
            );
          }}
          navButtonsAlwaysVisible={true}
          cycleNavigation={false}
          autoPlay={false}
          indicators={false}
          className="h-12 flex items-center "
        >
          {item.map((item, id) => (
            <div key={id} className="h-full  px-[14px]">
              {item.title}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
