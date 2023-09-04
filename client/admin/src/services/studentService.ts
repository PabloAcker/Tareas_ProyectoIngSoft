import { auxAPI } from "./apis";

export const getUserByName = async () => {
    const studentData  = await auxAPI.get("/user")
    console.log("🚀 ~ file: apis.ts:38 ~ getUserByName ~ studentData:", studentData)
    return studentData.data;
}