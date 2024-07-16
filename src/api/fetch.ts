// 定义 HTTP 请求方法类型
import {getCookie} from "@/utils/cookies.ts";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// 定义数据对象的接口
interface Data {
    [key: string]: any;
}

// 定义选项对象的接口
interface Options {
    beforeEach: () => void; // 请求前的回调函数
    afterEach: () => void;  // 请求后的回调函数
    catchEach: (error: any) => void; // 请求错误的回调函数
}

// 将对象转换为查询字符串
function obj2String(obj: Data): string {
    let objArr: string[] = [];

    for (let key in obj) {
        objArr.push(
            key + '=' + (typeof obj[key] === 'object' ? JSON.stringify(obj[key]) : obj[key])
        );
    }
    return objArr.join('&');
}

/**
 * 发起 HTTP 请求的函数
 * @param url 请求地址
 * @param data 请求参数
 * @param method 请求方式
 * @param callback 回调函数
 * @returns 返回一个 Promise 对象
 */
async function commonFetch(
    url: string,
    method: Method = 'GET',
    data?: Data,
    callback?: () => void,
): Promise<any> {
    let initObj: RequestInit = {};
    const token = getCookie("Authorization")
    const headers = {
        ...(token ? {'Authorization': `Bearer ${token}`} : {}) // 添加 token 到请求头
    }   // 构造请求头
    // GET 请求处理
    if (method === 'GET') {
        url = data ? url + '?' + obj2String(data) : url;
        initObj = {
            method,
            headers: headers,
        };
    } else { // 非 GET 请求处理
        if (data && data.file) { // 如果包含文件数据
            initObj = {
                method,
                headers: headers,
                body: data.file
            };
        } else { // 其他数据类型
            initObj = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            };
        }
    }

    try {
        const res = await fetch(url, initObj);
        if (callback) {
            callback();
        }
        // 检查响应状态码
        if (res.status >= 400) {
            const error = await res.json();
            return Promise.reject(error);
        } else {
            return res.json();
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

// 定义选项对象，包含请求前、请求后和请求错误的回调函数
const options: Options = {
    beforeEach() {
        console.log('请求前');
    },
    afterEach() {
        console.log('请求后');
    },
    catchEach(error) {
        console.log('请求错误', error);
    },
};

// 定义 HTTP 请求对象，包含 GET、POST、PUT、DELETE 和 PATCH 方法
const http = {
    get: (url: string, data?: Data) => {
        options.beforeEach();
        return commonFetch(url, 'GET', data, () => {
            options.afterEach();
        }).catch((error) => {
            options.catchEach(error);
        });
    },
    post: (url: string, data: Data) => {
        options.beforeEach();
        return commonFetch(url, 'POST', data, () => {
            options.afterEach();
        }).catch((error) => {
            options.catchEach(error);
        });
    },
    put: (url: string, data: Data) => {
        options.beforeEach();
        return commonFetch(url, 'PUT', data, () => {
            options.afterEach();
        }).catch((error) => {
            options.catchEach(error);
        });
    },
    delete: (url: string, data: Data) => {
        options.beforeEach();
        return commonFetch(url, 'DELETE', data, () => {
            options.afterEach();
        }).catch((error) => {
            options.catchEach(error);
        });
    },
    patch: (url: string, data: Data) => {
        options.beforeEach();
        return commonFetch(url, 'PATCH', data, () => {
            options.afterEach();
        }).catch((error) => {
            options.catchEach(error);
        });
    }
};

export default http;
