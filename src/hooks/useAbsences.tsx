import { useEffect, useState } from 'react';
import { AbsenceDataType } from '../components/AbsenceTable/AbsenteeRow';

export const getAbsenceEndDate = (startDate: Date | string, days: number) => {
    const newDate = new Date(startDate);
    const endDate = new Date(newDate.setDate(newDate.getDate() + days));
    return endDate;
}

export const useAbsences = () => {
    const [absenceData, setAbsenceData] = useState<AbsenceDataType[]>([]);
    const apiUrl = 'https://front-end-kata.brighthr.workers.dev/api/absences';
    
    useEffect(() => {
        async function getAbsences() {
            try {
                const request = await fetch(apiUrl)
                const data: AbsenceDataType[] = await request.json()
                console.log(data)
                
                const conflictsPromises = data.map(async (item) => {
                    let hasConflict = await getConflictData(item.employee.id);
                    return { ...item, hasConflict };
                });
        
                const dataWithConflicts = await Promise.all(conflictsPromises);
                console.log(dataWithConflicts)
        
                setAbsenceData(dataWithConflicts);
            }
            catch(error) {
                console.log(error)
            }
        }
        getAbsences()
    }, []);

    async function getConflictData(id: string) {
        const apiUrl = `https://front-end-kata.brighthr.workers.dev/api/conflict/${id}`;
        try {
            const request = await fetch(apiUrl)
            const data = await request.json()
            console.log(id + data.conflicts)
            return await data.conflicts
        }
        catch(error) {
            console.log(error)
        }
    }

    return { absenceData, setAbsenceData };
};
