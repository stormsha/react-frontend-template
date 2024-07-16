import http from "@/api/fetch.ts";
import baseUrl from "./index"

interface ApiData {
    [key: string]: any;
}

// 示例用户 API
const userApi = {
    // 获取用户信息
    getUserInfo: (userId: string) => {
        const url = `${baseUrl}/user/${userId}`;
        return http.get(url, {});
    },

    // 用户登录
    login: (username: string, password: string) => {
        const url = `${baseUrl}/login`;
        const data = {username, password};
        return http.post(url, data);
    },

    // 用户注册
    register: (userInfo: ApiData) => {
        const url = `${baseUrl}/register`;
        return http.post(url, userInfo);
    },

    // 更新用户信息
    updateUser: (userId: string, userInfo: ApiData) => {
        const url = `${baseUrl}/user/${userId}`;
        return http.put(url, userInfo);
    },

    // 删除用户
    deleteUser: (userId: string) => {
        const url = `${baseUrl}/user/${userId}`;
        return http.delete(url, {});
    }
};

// 导出 API 模块
export default userApi