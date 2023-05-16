const db = require("../database");


const getUser = async (req, res) => {
  try {
    const sql = `SELECT
    customers.customerName AS name,
    customers.customerName,
    customers.phone,
    orders.orderNumber,
    orders.orderDate,
    orders.requiredDate,
    orders.status,
    SUM(orderDetails.priceEach) AS orderTotal
  FROM
    orders
    JOIN customers ON orders.customerNumber  = customers.customerNumber 
    JOIN orderDetails ON orders.orderNumber = orderDetails.orderNumber
  WHERE
    orders.status != 'Shipped'
  GROUP BY
    orders.orderNumber `;
    db.query(sql, (error, result) => {
      if (error) {
        return res.status(500).json({ Error: error.message });
      }else{
        return res.status(200).json({ Data: result });
      }
    })
  } catch (error) {
    console.log("error")
    return res.status(500).json({ Error: err.message });
  }
};



module.exports = { getUser };
