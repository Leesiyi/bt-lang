export const taskEn = {
    'installText':(count)=>{
        return `Complete ${count} more install tasks to earn a bonus`
    },
    'comulativeLoginText':(total,type)=>{
        return `You have logged in for ${total} days, log in for ${type} days to get rewards`
    },
    'continuousLoginText':(total,type)=>{
        return `You have logged in ${total} days in a row, login for ${type} days continuously to receive rewards`
    },
    'installNum':(num)=>{
        return `Complete ${num} offers`
    },
    'inviteNum':(num)=>{
        return `Invite ${num} friends`
    },
}