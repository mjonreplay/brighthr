import AtendeeRow, {TableRowDataType} from "./AttendeeRow";
import { useEffect, useState } from "react";


const AttendanceTable = () => {
    const [test, setTest] = useState<TableRowDataType[]>([]);
    const tableHeadings = ['Employee name', 'Start date', 'End date', 'Approval Status', 'Absence type'];

    async function getData() {
        const apiUrl = 'https://front-end-kata.brighthr.workers.dev/api/absences';
        try {
            const request = await fetch(apiUrl)
            const data: TableRowDataType[] = await request.json()
            console.log(data)
            setTest(data)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {tableHeadings.map((heading, index) => {   
                        return (
                            <th key={index} scope="col" className="px-6 py-3">
                                {heading}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {test.map((attendeeData, index) => {
                    return (
                        <AtendeeRow key={index} tableRowData={attendeeData}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AttendanceTable;
