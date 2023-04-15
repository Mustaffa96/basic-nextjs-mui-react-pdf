import React, { useState } from 'react';
import { Button } from '@mui/material';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import PdfDocument from '../components/pdfDocument';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<PdfDocument />).toBlob();
      saveAs(blob, 'example.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Next.js, MUI, and React-PDF Example</h1>
      <Button variant="contained" color="primary" onClick={handleDownload} disabled={loading}>
        {loading ? 'Loading document...' : 'Download PDF'}
      </Button>
    </div>
  );
};

export default Home;
