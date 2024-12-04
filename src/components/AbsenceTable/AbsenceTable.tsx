import { useAbsences } from '../../hooks/useAbsences';
import AbsenteeRow from './AbsenteeRow';
import tableHeadings from '../../helpers/absenceTableHelpers';

const AbsenceTable = () => {
    const { absenceData } = useAbsences();

    return (
        <table className='bg-bright-gradient dark:bg-none dark:bg-gray-800 w-full text-sm text-left rtl:text-right mb-4'>
            <thead className='text-xs text-white uppercase bg-[#0057ad] dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    {tableHeadings.map((heading, index) => {
                        return (
                            <th key={index} scope='col' className='px-6 py-3'>
                                {heading}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {absenceData.map((absence, index) => {
                    return (
                        <AbsenteeRow key={index} absenceData={absence}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AbsenceTable;
