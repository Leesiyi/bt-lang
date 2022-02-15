import { activityId } from "./activity.js";
import { meId } from "./me.js";
import { shopId } from "./shop.js";
import { taskId } from "./task.js";

export const id = Object.assign({},meId,shopId,taskId,activityId)