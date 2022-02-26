import axios from "./axios"  // 导入配置好的axios文件
// 封装axios请求函数，并用export导出

// 获取校史人物列表
export function getFigureList(datas) {
  return axios({
    url: "/shuhistorytest/figure/list",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式x-www-form-urlencoded
    },
    data: datas
  })
}

// 获取校史任务详情
export function getFigureDetail({id}) {
  return axios({
    url: "/shuhistorytest/figure/detail",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式为x-www-form-urlencoded
    },
    params: {id}
  })
}

// 获取建校地标列表
export function getLandmarkList(datas) {
  return axios({
    url: "/shuhistorytest/landmark/list",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式为x-www-form-urlencoded
    },
    data: datas
  })
}

// 获取建校地标详情
export function getLandmarkDetail(datas) {
  return axios({
    url: "/shuhistorytest/landmark/detail",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式为x-www-form-urlencoded
    },
    data: datas
  })
}

// 获取团史列表
export function getGroupList(datas) {
  return axios({
    url: "/shuhistorytest/grouphistory/list",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式为x-www-form-urlencoded
    },
    data: datas
  })
}

// 获取团史详情
export function getGroupDetail(datas) {
  return axios({
    url: "/shuhistorytest/grouphistory/detail",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式为x-www-form-urlencoded
    },
    data: datas
  })
}

// 获取光荣榜列表
export function getMessageList(datas) {
  return axios({
    url: "/shuhistorytest/halloffame/list",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式为x-www-form-urlencoded
    },
    data: datas
  })
}

// 获取光荣榜详情
export function getMessageDetail(datas) {
  return axios({
    url: "/shuhistorytest/halloffame/detail",
    method: "get",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //设置请求头请求格式为x-www-form-urlencoded
    },
    data: datas
  })
}
