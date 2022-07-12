// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

function createInvoice(services = {}) {
  return {
    phone: services.hasOwnProperty("phone") ? services.phone : 3000,
    internet: services.hasOwnProperty("internet") ? services.internet : 5500,

    total() {
      return this.phone + this.internet;
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let idx = 0; idx < invoices.length; idx += 1) {
    total += invoices[idx].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(
  createInvoice({
    phone: 1000,
    internet: 4500,
  })
);
console.log(invoiceTotal(invoices));
