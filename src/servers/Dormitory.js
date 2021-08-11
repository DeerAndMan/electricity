import Vue from 'vue'
import request from './request.js'

/* GET 请求 */
const GET = async (url, params) => {
    return await new Promise( (resolve, reject) => {
        request.get( url,  { params } )
        .then( res => {
            if( res.code >= 0 ) resolve(res)
            else {
                Vue.prototype.$message.error(res.message);
                reject( res )
            }
            
        })
        .catch( rej => {
            reject(rej)
        })
    })
}

/* 人均与总用电 */
/* 表一 */
export const listTableOneByMonth = async (params={}) => {
    return GET(
        'park_power/park_power_month_summary/listTableOneByMonth',
        params
    )
}
/* 表二 */
export const listTableTwoByMonth = async (params={}) => {
    return GET(
        '/park_power/park_power_month_summary/listTableTwoByMonth',
        params
    )
}
/* 人力导出 */
export const baseFindByPage = async (params={}) => {
    return GET(
        '/park_power/park_power_people/baseFindByPage',
        params
    )
}



/* 房间用电 */
/* 上表格 详细 */
export const listRoomElectricityTableOne = async (params={}) => {
    return GET(
        '/park_power/park_power_month_summary/listRoomElectricityTableOne', 
        params
    )
}
/* 每五分钟数据 */
export const listElectricByFiveMinute = async (params={}) => {
    return GET(
        '/park_power/park_power_one/listElectricByFiveMinute', 
        params
    )
}
/* 房间 中间 折线图数据 */
export const listRoomHistoryByMonth = async (params={}) => {
    return GET(
        '/park_power/park_power_month_summary/listRoomHistoryByMonth', 
        params
    )
}
/* 房间 折线图数据 */
export const listAreaHistoryByMonth = async (params={}) => {
    return GET(
        '/park_power/park_power_month_summary/listAreaHistoryByMonth', 
        params
    )
}



/* 公共用电 */
/* 表格 */
export const listPublicElectricityTableOne = async (params={}) => {
    return GET(
        '/park_power/park_power_month_summary/listPublicElectricityTableOne', 
        params
    )
}
/* 每五分钟详情 */
export const listElectricByFiveMinutePublic = async (params={}) => {
    return GET(
        '/park_power/park_power_two/listElectricByFiveMinute', 
        params
    )
}



/* 历史数据查询 */
/* 楼栋总用电 */
export const listHistoryTableOne = async (params={}) => {
    return GET(
        '/park_power/park_power_month_summary/listHistoryTableOne', 
        params
    )
}
/* 房间用电， 公共区域用电 */
export const listHistoryTableTwoOrThree = async (params={}) => {
    return GET(
        '/park_power/park_power_month_summary/listHistoryTableTwoOrThree', 
        params
    )
}
