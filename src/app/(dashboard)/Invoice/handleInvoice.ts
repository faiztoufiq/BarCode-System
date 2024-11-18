import { invoiceText } from "@/common/constant";

export const printInvoice = ( setOrders:any, setTotalPrice: any) => {
    const printContents = document.getElementById(
      invoiceText.invoice
    )?.innerHTML;
    const printWindow = window.open("", invoiceText._blank);
    printWindow?.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
            h2, h3 { color: #333; }
            .invoice-container { width: 100%; max-width: 800px; margin: auto; }
            .invoice-header, .invoice-body, .invoice-footer { margin-bottom: 20px; }
            .invoice-header { text-align: center; }
            .invoice-details { display: flex; justify-content: space-between; }
            .invoice-item { padding: 10px; border-bottom: 1px solid #ccc; }
            .invoice-item:last-child { border-bottom: none; }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          ${printContents}
        </body>
      </html>
    `);
    printWindow?.document.close();

    localStorage.removeItem(invoiceText.orders);
    setOrders([]);
    setTotalPrice(0);
  };