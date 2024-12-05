import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import AbsenceTable from './AbsenceTable';
import tableHeadings from '../../helpers/absenceTableHelpers';

describe('AbsenceTable', () => {
  it('should render table headings', () => {
    render(<AbsenceTable />);

    tableHeadings.forEach(heading => {
      expect(screen.getByText(heading.name)).toBeInTheDocument();
    });
  });
});
