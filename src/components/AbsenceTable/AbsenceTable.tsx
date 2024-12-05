import { useState } from 'react';
import { useAbsences } from '../../hooks/useAbsences';
import AbsenteeRow, { AbsenceDataType } from './AbsenteeRow';
import tableHeadings from '../../helpers/absenceTableHelpers';

const AbsenceTable = () => {
    const { absenceData } = useAbsences();
    const [sortType, setSortType] = useState('');
    const [sortOrder, setSortOrder] = useState('ASC');

    const getNestedValue = (obj: AbsenceDataType, path: string) => {
        return path.split('.').reduce((value: { [x: string]: any; }, key: string) => value[key], obj);
    };

    const handleSort = (sortKey: string) => {
        if (sortType !== sortKey) {
            setSortType(sortKey);
        } else {
            setSortOrder((prevState) => prevState === 'ASC' ? 'DESC' : 'ASC')
        }
    };

    return (
        <table className='bg-bright-gradient dark:bg-none dark:bg-gray-800 w-full text-sm text-left rtl:text-right mb-4'>
            <thead className='text-xs text-white uppercase bg-bright-main dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    {tableHeadings.map((heading, index) => {
                        return (
                            <th key={index} scope='col' className={`px-6 py-3 ${heading.sort && 'cursor-pointer'}`} onClick={() => handleSort(heading.sort)}>
                                {heading.name}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {absenceData.sort((first, second) => {
                    const firstValue = getNestedValue(first, sortType);
                    const secondValue = getNestedValue(second, sortType);
                    return (sortOrder === 'ASC') ? firstValue > secondValue ? 1 : -1 : secondValue > firstValue ? 1 : -1;
                }).map((absence, index) => {
                    return (
                        <AbsenteeRow key={index} absenceData={absence}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AbsenceTable;
