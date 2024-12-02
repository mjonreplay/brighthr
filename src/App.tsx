import Header from './components/Header';
import AttendanceTable from './components/AttendanceTable/AttendanceTable';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='w-full mx-auto md:w-[800px] overflow-x-scroll'>
        <AttendanceTable />
      </div>
    </div>
  );
}

export default App;
