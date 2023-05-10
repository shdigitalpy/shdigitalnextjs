import axios from "./index";

export const getComments = async () => {
    try {
        const res = await axios.get('/comment');
        return res.data;
    } catch (err) {
        console.log("Error", err)
    }
};

export const postComment = async (data) => {
    try {
        const res = await axios.post('/comment/', data);
        return res.data;
    } catch (err) {
        console.log("Error", err)
    }
};
