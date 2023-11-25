import { useSelector } from "react-redux";
import { selectInvoiceList } from "./invoicesSlice";

export const useInvoiceListData = () => {
  const invoiceList = useSelector(selectInvoiceList);

  const getOneInvoice = (receivedId) => {
    return (
      invoiceList.find(
        (invoice) => invoice.id.toString() === receivedId.toString()
      ) || null
    );
  };

  const getMultipleInvoices = (arr) => {
    return arr.map((id) => getOneInvoice(id));
  };

  const listSize = invoiceList.length;

  return {
    invoiceList,
    getOneInvoice,
    getMultipleInvoices,
    listSize,
  };
};
