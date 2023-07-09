import { ElOption } from "element-plus"
//form查询
export interface FormConfigItem {
    type: string,
    label: string,
    key: string,
    resetValue?: any,
    props?: Record<string, unknown>, // 用于存放额外的属性信息
    options?: Array<typeof ElOption>, // 用于存放select属性信息
    value?: string[] // 用于存放值
}


//table
