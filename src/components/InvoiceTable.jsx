import { updateInvoice } from "../redux/invoicesSlice";
import { Button, Form, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const InvoiceTable = ({ invoiceData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleInputChange = (index, key, value) => {
        invoiceData[index] = { ...invoiceData[index], [key]: value };
    };

    const handleSubmit = () => {
        invoiceData.map(data =>
            dispatch(updateInvoice({ id: data.id, updatedInvoice: data }))
        )
        navigate("/");
    }

    return (
        <>
            <h1>Invoice Sheet</h1>

            <Table striped bordered hover  >
                <thead>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Bill To</th>
                        <th>Bill From</th>
                        <th>Bill From Address</th>
                        <th>Bill From Email</th>
                        <th>Current Date</th>
                        <th>Date of Issue</th>
                        <th>Tax Rate</th>
                        <th>Discount Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td >
                                    {data.invoiceNumber}
                                </td>
                                <td >
                                    <Form.Control type="text" defaultValue={data.billTo
                                    }
                                        onChange={(e) => handleInputChange(index, "billTo", e.target.value)}
                                    />
                                </td>
                                <td >
                                    <Form.Control type="text" defaultValue={data.billFrom}
                                        onChange={(e) => handleInputChange(index, "billFrom", e.target.value)}
                                    />
                                </td>
                                <td >
                                    <Form.Control type="text" defaultValue={data.billFromAddress}
                                        onChange={(e) => handleInputChange(index, "billFromAddress", e.target.value)}
                                    />
                                </td>
                                <td >
                                    <Form.Control type="text" defaultValue={data.billFromEmail}
                                        onChange={(e) => handleInputChange(index, "billFromEmail", e.target.value)}
                                    />
                                </td>
                                <td>
                                    {data.currentDate}
                                </td>
                                <td >
                                    <Form.Control type="date" defaultValue={data.dateOfIssue}
                                        onChange={(e) => handleInputChange(index, "dateOfIssue", e.target.value)}
                                    />
                                </td>
                                <td >
                                    <Form.Control type="text" defaultValue={data.taxRate}
                                        onChange={(e) => handleInputChange(index, "taxRate", e.target.value)}
                                    />
                                </td>
                                <td >
                                    <Form.Control type="text" defaultValue={data.discountRate}
                                        onChange={(e) => handleInputChange(index, "discountRate", e.target.value)}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table >
            <Button variant="primary" onClick={handleSubmit} style={{ width: "fit-content" }} className="align-self-end">
                Submit
            </Button>
        </>

    );
};

export default InvoiceTable;