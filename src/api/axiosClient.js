import axios from "axios";

const config = window.config;

const axiosClient = axios.create({
    baseURL: config.baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});
axiosClient.interceptors.response.use(

    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },

    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const { config, status, data } = error.response;
        if ((config.url === '/auth/local/register' || config.url === '/auth/local') && status === 400) {
            const errorList = data.data || [];
            const firstError = errorList.length > 0 ? errorList[0] : {};
            const messageList = firstError.messages || [];
            const firstMessage = messageList.length > 0 ? messageList[0] : {};
            throw new Error(firstMessage.message);

        }

        return Promise.reject(error);
    });
export default axiosClient;