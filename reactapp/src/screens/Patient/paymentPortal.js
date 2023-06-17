import React, { useState, useEffect } from "react";
import { Input, Title, Textarea, Button, Grid, Card } from "@mantine/core";

const Payment = () => {
 
  const [dateOfIssue, setDateOfIssue] = useState("");
  
  const [patientName, setPatientName] = useState("");
  const [patientMobileNumber, setPatientMobileNumber] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");

 
  useEffect(() => {
   
    const currentDate = new Date().toLocaleDateString(); 

    
    setDateOfIssue(currentDate);
  }, []);

 
  useEffect(() => {
   
    const patientData = {
      name: "Sangya",
      mobileNumber: "6289789432",
      identityNumber: "191001002008",
    };

    setPatientName(patientData.name);
    setPatientMobileNumber(patientData.mobileNumber);
    setIdentityNumber(patientData.identityNumber);
  }, []);

  const meds = [
    {
      med: "Paracetamol",
      cost: 20,
      quantity: 5,
    },
    {
      med: "Aspirin",
      cost: 15,
      quantity: 5,
    },
    {
      med: "Syrup1",
      cost: 120,
      quantity: 1,
    },
  ];
  const grandTotal = () => {
    let total = 0;
    for (let i = 0; i < meds.length; i++) {
      const med = meds[i];
      total += med.cost * med.quantity;
    }
    return total;
  };

  const handlePay = (e) => {
    e.preventDefault();
    
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        minHeight: "100vh",
      }}
    >
      <Card
        pt={5}
        pb={1}
        px={10}
        style={{ height: "620px", width: "1060px", backgroundColor: "#F8F8F8" }}
      >
        <Card
          radius="md"
          style={{
            height: "60px",
            width: "120px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#9370DB",
            color: "white",
            marginBottom: "6px",
            marginLeft: "20px",
          }}
        >
          <img src=""></img>
          <p>Payment Portal</p>
        </Card>
        <Card
          pt={30}
          px={120}
          style={{
            height: "540px",
            width: "1040px",
            backgroundColor: "#D8D8D8",
          }}
        >
          <Card
            radius="lg"
            pt={1}
            px={20}
            bg="white"
            style={{ height: "470px", width: "800px" }}
          >
            <form onSubmit={handlePay}>
              <Grid>
                <Grid.Col xs={12} lg={12}>
                  <div style={{ display: "flex", color: "grey" }}>
                    <Title mb="md">Invoice</Title>
                  </div>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3} lg={3}>
                  Invoice Number
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  Date of Issue
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  Billed to
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  {patientName}
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3} lg={3}>
                  {/* {invoiceNumber} */}
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  {dateOfIssue}
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  Identity Number
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  {identityNumber}
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  Mobile Number
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  {patientMobileNumber}
                </Grid.Col>
              </Grid>
              <Grid pt="lg" style={{ borderBottom: "1px solid black" }}>
                <Grid.Col xs={6} lg={6}>
                  Description
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  Unit cost
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  Quantity
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  Amount
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={6} lg={6}>
                  {meds[1].med}
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  {meds[1].cost}
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  {meds[1].quantity}
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  {meds[1].cost * meds[1].quantity}
                </Grid.Col>
              </Grid>
              <Grid
                style={{
                  borderBottom: "1px solid black",
                  paddingBottom: "30px",
                }}
              >
                <Grid.Col xs={6} lg={6}>
                  {meds[2].med}
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  {meds[2].cost}
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  {meds[2].quantity}
                </Grid.Col>
                <Grid.Col xs={2} lg={2}>
                  {meds[2].cost * meds[2].quantity}
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  Grand Total
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  {grandTotal()}
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  Discount
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  0
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col
                  xs={3}
                  lg={3}
                  style={{
                    borderBottom: "1px solid black",
                    paddingBottom: "10px",
                  }}
                >
                  Tax
                </Grid.Col>
                <Grid.Col
                  xs={3}
                  lg={3}
                  style={{
                    borderBottom: "1px solid black",
                    paddingBottom: "10px",
                  }}
                >
                  0
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}></Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  Net Total
                </Grid.Col>
                <Grid.Col xs={3} lg={3}>
                  {grandTotal()}
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={6} lg={6}>
                  Pay the invoice within 5 days of receiving it.
                </Grid.Col>

                <Grid.Col
                  xs={6}
                  lg={6}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    type="submit"
                    radius="md"
                    size="md"
                    style={{ backgroundColor: "#9370DB" }}
                  >
                    PAY
                  </Button>
                </Grid.Col>
              </Grid>
            </form>
          </Card>
        </Card>
      </Card>
    </div>
  );
};

export default Payment;

