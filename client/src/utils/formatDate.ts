import moment from "moment";


export const formatDate=(createdAt:Date)=>{
   let changedDate =  moment(createdAt).format('MMMM D, YYYY');
   return changedDate
}