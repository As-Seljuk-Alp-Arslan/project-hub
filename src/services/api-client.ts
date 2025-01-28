
import axios from "axios";

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "95c29ffb43f147c09c93fe4a6682604c"
    }
})