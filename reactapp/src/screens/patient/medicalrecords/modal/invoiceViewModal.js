
import {
    Card,
    Button,
    TextInput,
    Select,
    Grid,
    Col,
    Title,
    Container,
    Modal
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  import { Textarea } from "@mantine/core";
  import { DatePickerInput } from "@mantine/dates";
  import { useState,useEffect } from "react";
  
  import { TimeInput } from "@mantine/dates";
  import { IconCalendar, IconClock2 } from "@tabler/icons-react";

export default function InvoiceViewModal(props) {
    
    const{open, close}=props
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [dateOfIssue, setDateOfIssue] = useState("");
    //   const [billedTo, setBilledTo] = useState('');
    const [patientName, setPatientName] = useState("");
    const [patientMobileNumber, setPatientMobileNumber] = useState("");
    const [identityNumber, setIdentityNumber] = useState("");
  
    // Simulating auto-generation of invoice number and date of issue
    useEffect(() => {
      // const generatedInvoiceNumber = generateInvoiceNumber(); // Your logic to generate invoice number
      const currentDate = new Date().toLocaleDateString(); // Get the current date
  
      // setInvoiceNumber(generatedInvoiceNumber);
      setDateOfIssue(currentDate);
    }, []);
  
    // Simulating auto-reflection of patient's information
    useEffect(() => {
      // Simulated patient data
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
      // Submit the form or perform further actions here
    };  
  return (
    <>
 <Modal size="lg" opened={open} onClose={close} >
 <form onSubmit={handlePay}>
    <Grid  pt="lg" m={0} px={0}>
      <Grid.Col xs={12} lg={12}>
        <div style={{ display: "flex", color: "grey" }}>
          <Title mb="md">Invoice</Title>
        </div>
      </Grid.Col>
   
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
   
      <Grid.Col xs={3} lg={3}>
        {invoiceNumber}
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
   
      <Grid.Col xs={3} lg={3}></Grid.Col>
      <Grid.Col xs={3} lg={3}></Grid.Col>
      <Grid.Col xs={3} lg={3}>
        Mobile Number
      </Grid.Col>
      <Grid.Col xs={3} lg={3}>
        {patientMobileNumber}
      </Grid.Col>
      </Grid>
    
    <Grid  pt="lg" m={0} px={0} style={{ borderBottom: "1px solid black"}}>
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
      <Grid pt="lg" m={0} px={0} style={{textAlign:"end"}} >
    
      {/* <Grid.Col xs={3} lg={3}></Grid.Col>
      <Grid.Col xs={3} lg={3}></Grid.Col> */}
      <Grid.Col xs={6} lg={6}>
        Grand Total
      </Grid.Col>
      <Grid.Col xs={6} lg={6}>
        {grandTotal()}
      </Grid.Col>
    
      {/* <Grid.Col xs={3} lg={3}></Grid.Col>
      <Grid.Col xs={3} lg={3}></Grid.Col> */}
      <Grid.Col xs={6} lg={6}>
        Discount
      </Grid.Col>
      <Grid.Col xs={6} lg={6}>
        0
      </Grid.Col>
    
      {/* <Grid.Col xs={3} lg={3}></Grid.Col>
      <Grid.Col xs={3} lg={3}></Grid.Col> */}
      <Grid.Col
        xs={6}
        lg={6}
        style={{
          borderBottom: "1px solid black",
          paddingBottom: "10px",
        }}
      >
        Tax
      </Grid.Col>
      <Grid.Col
        xs={6}
        lg={6}
        style={{
          borderBottom: "1px solid black",
          paddingBottom: "10px",
        }}
      >
        0
      </Grid.Col>
   
      {/* <Grid.Col xs={3} lg={3}></Grid.Col>
      <Grid.Col xs={3} lg={3}></Grid.Col> */}
      <Grid.Col xs={6} lg={6}>
        Net Total
      </Grid.Col>
      <Grid.Col xs={6} lg={6}>
        {grandTotal()}
      </Grid.Col>
    
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
   
           
      </Modal>
    </>
  )
}
