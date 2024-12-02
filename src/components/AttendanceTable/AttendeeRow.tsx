export type LeaveType = 'ANNUAL_LEAVE' | 'SICKNESS' | 'MEDICAL';
export type EmployeeData = {
    firstName: string,
    lastName: string,
    id: string
}

export interface TableRowDataType {
    id: boolean,
    startDate: Date,
    days: number,
    absenceType: LeaveType,
    employee: EmployeeData,
    approved: boolean
}

type AttendeeRowProps = {
    tableRowData: TableRowDataType;
};

const AtendeeRow = (props: AttendeeRowProps) => {
    const { tableRowData } = props;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={tableRowData.employee.id} >
            <td className="px-6 py-4 dark:text-white">
                {`${tableRowData.employee.firstName} ${tableRowData.employee.lastName}`}
            </td>
            <td className="px-6 py-4 dark:text-white">
                {new Date(tableRowData.startDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                })}
            </td>
            <td className="px-6 py-4 dark:text-white">
                {tableRowData.days}
            </td>
            <td className="px-6 py-4 dark:text-white">{tableRowData.approved? 'True': 'False'}</td>
            <td className="px-6 py-4 dark:text-white">{tableRowData.absenceType}</td>
        </tr>
    )
}

export default AtendeeRow;


