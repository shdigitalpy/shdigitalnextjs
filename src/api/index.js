import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MAIN_API_URL,
    headers: {
        'Authorization': `Token ${process.env.NEXT_PUBLIC_MAIN_API_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

export default instance;
