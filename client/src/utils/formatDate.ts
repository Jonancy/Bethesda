import moment from "moment";


export const formatDate=(createdAt:Date)=>{
   const changedDate =  moment(createdAt).format('MMMM D, YYYY');
   return changedDate
}  