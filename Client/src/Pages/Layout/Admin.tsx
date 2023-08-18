import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
import type { MenuProps } from "antd";
const Admin = () => {
  // const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  //   key,
  //   label: `nav ${key}`,
  // }));
  const menuList = [
    {
      id: 1,
      name: "Thêm sản phẩm",
      url: "/admin",
    },
    {
      id: 2,
      name: "Xem sản phẩm",
      url: "/admin/show",
    },
    {
      id: 3,
      name: "Thêm danh mục",
      url: "/admin/Category",
    },
    {
      id: 4,
      name: "Xem danh mục",
      url: "/admin/Show/Category",
    },
    {
      id: 5,
      name: "Xem sản phẩm",
      url: "/admin/show",
    },
    {
      id: 6,
      name: "Xem sản phẩm",
      url: "/admin/show",
    },
  ];
  const items2: MenuProps["items"] = [UserOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Admin`,
      children: new Array(6).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: <Link to={menuList[j].url}>{menuList[j].name}</Link>,
        };
      }),
    };
  });
  return (
    <div>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            // items={items1}
          />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#ffffff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: "#ffffff",
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
