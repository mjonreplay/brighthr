import { getAbsenceEndDate } from '../../hooks/useAbsences';

type LeaveType = 'ANNUAL_LEAVE' | 'SICKNESS' | 'MEDICAL';

type EmployeeData = {
    firstName: string,
    lastName: string,
    id: string
}

export interface AbsenceDataType {
    hasConflict: boolean,
    id: boolean,
    startDate: Date,
    days: number,
    absenceType: LeaveType,
    employee: EmployeeData,
    approved: boolean
}

type AttendeeRowProps = {
    absenceData: AbsenceDataType;
};

const AtendeeRow = (props: AttendeeRowProps) => {
    const { absenceData } = props;

    return (
        <tr className={`border-b ${absenceData.hasConflict && 'bg-red-700 dark:bg-red-900'} border-gray-700`} key={absenceData.employee.id} >
            <td className='px-6 py-4 text-white'>
                {`${absenceData.employee.firstName} ${absenceData.employee.lastName}`}
            </td>
            <td className='px-6 py-4 text-white'>
                {new Date(absenceData.startDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                })}
            </td>
            <td className='px-6 py-4 text-white'>
                {getAbsenceEndDate(absenceData.startDate, absenceData.days).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                })}
            </td>
            <td className='px-6 py-4 text-white'>{absenceData.approved? 'True': 'False'}</td>
            <td className='px-6 py-4 text-white'>{absenceData.absenceType}</td>
        </tr>
    )
}

export default AtendeeRow;


