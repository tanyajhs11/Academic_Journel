// PDFDocument.js
import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
});

const PDFDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.section}>First Name: {data["First Name*"]}</Text>
      <Text style={styles.section}>Department Name: {data["Department Name*"]}</Text>
      <Text style={styles.section}>Name of Journal: {data["Name of Journal"]}</Text>
      <Text style={styles.section}>Name of Conference: {data["Name of Conference*"]}</Text>
      {/* Add more fields as needed */}
    </Page>
  </Document>
);

export default PDFDocument;
