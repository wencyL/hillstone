import  { request } from "../request"

const getUserList = async () => {
    const res: any[] = await request({
        url: "userList",
        method: "GET"
    })
    return res
}

export default {
    getUserList
};