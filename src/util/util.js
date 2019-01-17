
import Spinner from './../config/ora'
export const setOra = (color='yellow',text = '执行中')=>{
    Spinner.color  = color
    Spinner.text = text
}

export const successOra = (text='成功')=>{
    Spinner.succeed(text)
}