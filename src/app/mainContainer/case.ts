export interface Case {
  _id: string;
  caseNum: string;
  lender: Array<any>;
  borrower: Array<any>;
  lenderAttorney: Array<any>;
  borrowerAttorney: Array<any>;
  otherParties: Array<any>;
  property: Array<any>;
  documents: Object;
  loan: Object;
  currentVesting: string;
  saleInfo: Object;
  tasks: Array<any>;
  status: Array<any>;
}