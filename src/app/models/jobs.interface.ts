export interface IJobs {
   jobs: Job[],
   pager: Pager
}


export interface Job {
   _id: string,
   location: [],
   city: string,
   company: string,
   profileType: string,
   designation: string,
   annualSalary: string,
   imageURL: string,
   venue: string,
   eventDate: string,
   status: string
}

export interface Pager {
   currentPage: number,
   totalItems: number,
   totalPages: number
}
