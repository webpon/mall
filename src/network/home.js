import {request} from "../../../../vue-cli3的使用/useaxios/src/network/request"

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}