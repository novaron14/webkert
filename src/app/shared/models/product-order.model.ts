import { DateSelectionModelChange } from "@angular/material/datepicker";

export interface productOrder {
  id: String;
  href: String;
  cancellationDate: Date;
  cancellationReason: String;
  category: String;
  completionDate: string;
  expectedCompletionDate: string;
  externalld: String;
  notificationContact: String;
  orderDate: string;
  priority: String;
  requestedCompletionDate: string;
  requestedStartDate: string;
  state: string;


}
