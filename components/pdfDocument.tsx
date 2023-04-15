import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

const PdfDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.text}>Hello, this is a PDF document!</Text>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
