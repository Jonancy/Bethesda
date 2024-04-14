import { url } from "@/Services/index/index.services";


export function GetAllMemberAdminUrl() { 
    return url.get(`/team-member/all`);
  }
