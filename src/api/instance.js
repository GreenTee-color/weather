import axios from "axios";
import { Message,Loading } from "element-ui";
const base_url='https://bird.ioliu.cn'

let instance = axios.create({
    time: 1000 * 60,
    baseURL: base_url,
});
// 请求拦截器
var loadingInstance;
instance.interceptors.request.use(
    (request) => {
        console.log(request);
      loadingInstance = Loading.service({
        text: "拼命加载中~",
      });
      return request;
    },
    (error) => {
      loadingInstance.close();
      Message.error({ message: "请求超时!" });
      return Promise.reject(error);
    }
  );
  
  // 响应拦截器即异常处理
  instance.interceptors.response.use(
    (response) => {
      loadingInstance.close();
      let data = response.data;
      let status = response.status;
      if (status === 200) {
        return Promise.resolve(data);
      } else {
        Message.error({ message: "服务器好像出了些问题~" });
        return Promise.reject(response);
      }
    },
    (error) => {}
  );
  
  export default instance;