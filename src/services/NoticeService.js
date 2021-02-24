import axios from "axios";

const ENB_API_BASE_URL = "http://localhost:8080/api/v1/notices";

class NoticeService{
    getTodaysNotices(){
        return axios.get(ENB_API_BASE_URL+"-today");
    }

}

export default new NoticeService()