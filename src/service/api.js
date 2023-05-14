import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/api/v1/user/`;

const API_URLS = { POST_LIST: `${COMMON_URL}list` };

export const postList = (payload) => apis.post(API_URLS.POST_LIST, payload);
