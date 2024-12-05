export type tableHeadingsType = headingtype[]

export interface headingtype {
  name: string
  sort: string
}

const tableHeadings: tableHeadingsType = [
    {
        name: 'Employee name',
        sort: 'employee.firstName'
    }, 
    {
        name: 'Start date',
        sort: 'startDate'
    }, 
    {
        name: 'End date',
        sort: ''
    }, 
    {
        name: 'Approval Status',
        sort: 'approved'
    }, 
    {
        name: 'Absence type',
        sort: 'absenceType'
    }
];
  
export default tableHeadings;