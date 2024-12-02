import Header from './components/Header';
import AbsenceTable from './components/AttendanceTable/AbsenceTable';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='w-full mx-auto md:w-[800px] overflow-x-scroll'>
        <AbsenceTable />
      </div>
    </div>
  );
}

export default App;
