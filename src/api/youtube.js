import axios from "axios";

const KEY = "AIzaSyCk2GzenHKLT2ZJfZlZwYTHG9q2vdJl9us";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3", 
	params: {
		part: "snippet",
		maxResults: 10,
		type: "video",
		key: KEY
	}
});