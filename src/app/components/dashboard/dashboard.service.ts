import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class DashBoardService {
  constructor(
    private http: HttpClient,
  ) {}
  getChallenges() {
 
    return this.http.get(environment.api_url + "challenges/"+localStorage.getItem('accessToken')+'.json');
    // get Data here
  }


  updateChallengeStatus(data){
    return this.http.put(environment.api_url + "challenges/"+localStorage.getItem('accessToken')+'/'+ (parseInt(data.id)-1)+'/.json',{
     ...data,
      status: "Accepted",
      

    })
  }

  getBidData(row){
   return  this.http.get(environment.api_url+"bid/"+row.bidId + '/.json');

  }
  submitBid(data){
   

   return this.http.put(environment.api_url + "bid/"+ data.bidId+'/'+localStorage.getItem('accessToken')+'/.json',{
     
      
    bidPrice: data.bidPrice

    })


  }

 

 
}
