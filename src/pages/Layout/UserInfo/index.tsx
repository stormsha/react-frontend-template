// import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import { removeAllCookies } from "@/utils/cookies.ts";
import { localStorageRemoveItemAll } from "@/utils/localStorage.ts";
import { useNavigate } from "react-router-dom";
import Clock from "../NowTime";

const UserInfo: React.FC = () => {
  const navigateTo = useNavigate();

  const LogoutClick = () => {
    removeAllCookies();
    localStorageRemoveItemAll();
    navigateTo("/login");
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <a href="#" onClick={LogoutClick}>
          退出登录
        </a>
      ),
      key: "1",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "5px" }}>
        <Clock />
      </div>
      <Dropdown menu={{ items }} trigger={["click"]} arrow={true}>
        <Avatar
          style={{ backgroundColor: "#00a2ae", cursor: "pointer" }}
          shape="square"
          size="large"
          gap={4}
          onClick={(e) => e?.preventDefault()}
        >
          {"卢"}
        </Avatar>
      </Dropdown>
    </div>
  );
};

export default UserInfo;
