export const meEn = {
    'WithDrawDes1':'The fastest transfer time is 1-7 working days.',
    'WithDrawDes2':'We are processing thousands of withdrawals daily , Please be patient, we will guarantee the distribution of your money',
    'WithDrawDes3':'Please continue to use our product and hope you can earn more! Thanks for your patience and understanding!',
    'invitedSwipe':(num)=>{
        return `invited ${num} friends and got`
    },
    'withdrawConfirm':(type)=>{
        return `Are you sure to cash out to ${type} Account`
    },
    'inviteJoin':(id)=>{
        return `Invite ${id} to join`
    },
    'inviteTask':(id)=>{
        return `Invited ${id} to complete the task`
    },
    'inviteSecond':()=>{
        return 'Your friend invite his(her) friend to complete task'
    },
    'completeTask':(task)=>{
        return `Complete ${task} task`
    },
    'accountType':(type)=>{
        switch (type) {
            case 'PIX':
                return 'The PIX account: Mobile or E-mail'
            case 'UPI':
                return 'Your UPI ID'
            default:
                return `The ${type} account`
        }
    },
    'phoneRechargeRules1':(money)=>{
        return `The phone bill only supports recharges above ${money}`
    },
    withdrawOp:(type)=>{
        return `Due to ${type} payment limit`
    },
    giftCardRules1:(type)=>{
        return `${type} cards can only be exchanged for more than 100 rupees`
    },
    giftCardRules3:(type)=>{
        switch (type) {
            case 'Amazon':
                return 'The gift card needs to be transferred to amazon.cn for redemption and shopping'
            case 'Flipkart':
                return 'The gift card needs to be transferred to flipkart.com for redemption and shopping'
            case 'Google Play':
                return 'The gift card needs to be transferred to play.google.com for redemption and shopping'
            default:
                return '';
        }
    },
    'CompletePrimeTask':(num)=>{
        return `Complete ${num} Prime task `
    }
}