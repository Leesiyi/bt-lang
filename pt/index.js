import { mePt } from './me.js'
import { shopPt } from './shop.js'
import { activityPt } from './activity.js'
import { taskPt } from './task.js'

export const pt = Object.assign({},mePt,shopPt,activityPt,taskPt)

console.log(pt);