import axios from "axios";

const axios_instance = axios.create({
	baseURL: "http://localhost:8000/",
	withCredentials: false,
});

const dummyList = [
	{ id: "01", title: "Learn Docker" },
	{ id: "02", title: "Learn React" },
];

export const fetchData = async () => {
	const url = "";
	const body = null;
	try {
		const res = await axios_instance.post(url, body);
		return res;
	} catch (err) {
		return err.response ? err.response : { data: dummyList, error: "Not connected to the server" };
	}
};

export const addData = async (todoTitle) => {
	const url = "addtodo/";
	const body = { title: todoTitle };
	try {
		const res = await axios_instance.get(url, body);
		return res;
	} catch (err) {
		return err.response ? err.response : { data: dummyList, error: "Not connected to the server" };
	}
};
