import React from 'react'
import { useLocation } from 'react-router-dom';
import { useInvoiceListData } from '../redux/hooks';
import InvoiceTable from './InvoiceTable';
import { Container } from 'react-bootstrap';
import NoData from './NoData';


const EditAll = () => {
    const location = useLocation();
    const encodedData = new URLSearchParams(location.search).get('data');
    const decodedData = JSON.parse(decodeURIComponent(encodedData));
    const { getMultipleInvoices } = useInvoiceListData();
    const data = getMultipleInvoices(decodedData);
    return (
        <Container className='d-flex flex-column gap-5'>
            {data.length > 0 ? <InvoiceTable invoiceData={data} /> : <NoData />
            }
        </Container>
    )
}

export default EditAll