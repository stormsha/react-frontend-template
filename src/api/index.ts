// 根据环境变量设置基础 URL
import * as process from "process";

let baseUrl = '';

if (process.env.NVM_HOME === 'development') {
    baseUrl = 'http://localhost:8080';
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://www.love.me';
}

// 可能一个服务服务，请求多个后端服务，可以在这里定义多个后端服务地址，方便使用
let baseUrl2 = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl2 = 'http://localhost:8080';
} else if (process.env.NODE_ENV === 'production') {
    baseUrl2 = 'https://www.love.me';
}

// 导出所有 API 模块
export default {
    baseUrl,
    baseUrl2
};