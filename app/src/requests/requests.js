import axios from "axios";

const axios_instance = axios.create({
	baseURL: "http://localhost:8000/",
	withCredentials: false,
});

const dummyList = [
	{ _id: "01", title: "Learn Docker" },
	{ _id: "02", title: "Learn React" },
];

export const fetchData = async () => {
	const url = "/todo/";
	const body = null;
	try {
		const res = await axios_instance.get(url, body);
		console.log(res);
		return res.data ? res.data : null;
	} catch (err) {
		console.log(err);
		return { data: null, error: err.message ? err.message : "Not connected to the server" };
	}
};

export const addData = async (todoTitle) => {
	const url = "/todo/addtodo/";
	const body = { title: todoTitle };
	try {
		const res = await axios_instance.post(url, body);
		console.log(res);
		return res.data ? res.data : null;
	} catch (err) {
		console.log(err);
		return { data: null, error: err.message ? err.message : "Not connected to the server" };
	}
};
