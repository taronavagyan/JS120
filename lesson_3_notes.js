// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    amountPaid: 0,

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.amountPaid += payment.total();
    },

    addPayments(payments) {
      payments.forEach((payment) => (this.amountPaid += payment.total()), this);
    },

    amountDue() {
      return this.total() - this.amountPaid;
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

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,

    total() {
      return this.amount || this.phone + this.internet;
    },
  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment) => sum + payment.total(), 0);
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue()); // this should return 0
