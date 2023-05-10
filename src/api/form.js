import axios from "./index";

export const postForm = async (data) => {
    try {
        const res = await axios.post('/form/', data);
        return res.data;
    } catch (err) {
        console.log("Error", err)
    }
};

export const postEmailForm = async (data) => {
    try {
        const res = await axios.post('/smallform/', data);
        return res.data;
    } catch (err) {
        console.log("Error", err)
    }
};
