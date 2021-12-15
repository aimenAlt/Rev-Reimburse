// export class Request {
//   reqID: number = 0;
//   employeeID: number = 0;
//   description: string = '';
//   cost: number = 0.00;
//   purchaseDate: string = '';
//   status: string = '';
//   imageLink: string = '';
// }

export class ViewRequest {
  reqID: number = 0;
  empID: number = 0;
  firstName: string = '';
  lastName: string = '';
  description: string = '';
  cost: number = 0.00;
  purchaseDate: string = '';
  requestDate: string = '';
  status: RequestStatus = RequestStatus.None;
  receiptPic:string = '';
}

export enum RequestStatus {
  None = "None",
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  DENIED = "DENIED"

}
