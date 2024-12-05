import Header from './components/Header';
import AbsenceTable from './components/AbsenceTable/AbsenceTable';

function App() {
  return (
    <div className='App bg-white dark:bg-gray-800'>
      <Header />
      <div className='w-full mx-auto md:w-[800px] overflow-x-scroll'>
        <h1 className='mb-2 text-2xl font-extrabold text-bright-main dark:text-white'>Absences</h1>
        <AbsenceTable />
      </div>
    </div>
  );
}

export default App;
