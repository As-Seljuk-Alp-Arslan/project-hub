
import axios from "axios";
import dotenv from "dotenv"

dotenv.config

//console.log(import.meta.env.VITE_RAWG_KEY)

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.VITE_RAWG_KEY
    }
})