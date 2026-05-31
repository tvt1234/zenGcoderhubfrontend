const Payments = () => {
  const payments = [
    {
      id: 1,
      student: "Rahul",
      amount: 5000,
      status: "Paid",
    },
    {
      id: 2,
      student: "Amit",
      amount: 3000,
      status: "Pending",
    },
  ];

  return (
    <div>
      <h1>Payments</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.student}</td>
              <td>₹{payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
