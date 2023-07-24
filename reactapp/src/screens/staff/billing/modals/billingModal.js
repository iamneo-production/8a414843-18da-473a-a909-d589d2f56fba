import {
  Card,
  Button,
  TextInput,
  Select,
  Grid,
  Col,
  Title,
  Container,
  Modal,
  Text,
  Checkbox,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState, useEffect } from "react";

import { TimeInput } from "@mantine/dates";
import { IconCalendar, IconClock2 } from "@tabler/icons-react";
import { get, post } from "../../../../api";
import EndPoints from "../../../../api/endPoints";
import CustomTable from "../../../../components/customTable";

export default function InvoiceViewModal(props) {
  const { open, close, records } = props;
  const [medicineDatas, setMedicineDatas] = useState([]);
  console.log("rec", records);

  let total = 0;

  const getBillingDetails = async () => {
    await get(`${EndPoints.getBillingDetails}/${records.id}`)
      .then((response) => {
        // setBillGenerating(response[0]);
        setMedicineDatas(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBillingDetails();
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

  const handlePay = async (e) => {
    e.preventDefault();
    let data = {
      appointmentId: records?.id,
      patientId: records?.patient?.id,
      paid: true,
    };
    await post(`${EndPoints.createBilling}`, data)
      .then((response) => {
        close();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Modal
        size={800}
        opened={open}
        onClose={close}
        title={<Text>Payment</Text>}
      >
        <form onSubmit={handlePay}>
          <Grid>
            <Grid.Col xs={2.7} lg={2.7}>
              <Text>Description</Text>
            </Grid.Col>

            <Grid.Col xs={1.3} lg={1.3}>
              <Text>Morning</Text>
            </Grid.Col>

            <Grid.Col xs={1} lg={1}>
              <Text>Noon</Text>
            </Grid.Col>

            <Grid.Col xs={1} lg={1}>
              <Text>Night</Text>
            </Grid.Col>

            <Grid.Col xs={2} lg={2}>
              <Text>Unit Cost</Text>
            </Grid.Col>

            <Grid.Col xs={2} lg={2}>
              <Text>Quantity</Text>
            </Grid.Col>

            <Grid.Col xs={2} lg={2}>
              <Text>Amount</Text>
            </Grid.Col>
            {/*  */}

            {medicineDatas?.map((d) => {
              total += d?.inventory?.price * d?.quantity;
              return (
                <>
                  <Grid.Col xs={3} lg={3}>
                    <Text>
                      {d?.inventory?.medicineName?.charAt(0).toUpperCase() +
                        d?.inventory?.medicineName?.slice(1)}
                    </Text>
                  </Grid.Col>

                  <Grid.Col m={0} xs={1} lg={1}>
                    <Checkbox size="md" label checked={d?.morning} />
                  </Grid.Col>

                  <Grid.Col xs={1} lg={1}>
                    <Checkbox size="md" label="" checked={d?.noon} />
                  </Grid.Col>

                  <Grid.Col xs={1} lg={1}>
                    <Checkbox size="md" label="" checked={d?.night} />
                  </Grid.Col>

                  <Grid.Col xs={2} lg={2}>
                    <Text>₹{d?.inventory?.price}</Text>
                  </Grid.Col>

                  <Grid.Col xs={2} lg={2}>
                    <Text>{d?.quantity}</Text>
                  </Grid.Col>

                  <Grid.Col xs={2} lg={2}>
                    <Text>₹{d?.inventory?.price * d?.quantity}</Text>
                  </Grid.Col>
                </>
              );
            })}

            <Grid.Col xs={12} lg={12}>
              <Divider />
            </Grid.Col>

            <Grid.Col xs={10} lg={10}>
              <Text align="end" pr={100}>
                Grand Total
              </Text>
            </Grid.Col>
            <Grid.Col xs={2} lg={2}>
              <Text>₹{total}</Text>
            </Grid.Col>

            <Grid.Col xs={10} lg={10}>
              <Text align="end" pr={100}>
                Discount
              </Text>
            </Grid.Col>
            <Grid.Col xs={2} lg={2}>
              <Text>0</Text>
            </Grid.Col>

            <Grid.Col xs={10} lg={10}>
              <Text align="end" pr={100}>
                Tax
              </Text>
            </Grid.Col>
            <Grid.Col xs={2} lg={2}>
              <Text>0</Text>
            </Grid.Col>

            <Grid.Col xs={12} lg={12}>
              <Divider />
            </Grid.Col>

            <Grid.Col xs={10} lg={10}>
              <Text align="end" pr={100}>
                Net Total
              </Text>
            </Grid.Col>
            <Grid.Col xs={2} lg={2}>
              <Text>₹{total}</Text>
            </Grid.Col>

            <Grid.Col xs={10} lg={10} />

            <Grid.Col xs={2} lg={2}>
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

          {/* <Grid pt="lg" m={0} px={0} style={{ textAlign: "end" }}>
            <Grid.Col xs={6} lg={6}>
              Grand Total
            </Grid.Col>
            <Grid.Col xs={6} lg={6}>
              <Text>100</Text>
            </Grid.Col>

      <Grid.Col xs={12} lg={12}>
        <Divider />
      </Grid.Col>

            <Grid.Col xs={6} lg={6}>
              Net Total
            </Grid.Col>
            <Grid.Col xs={6} lg={6}>
              {grandTotal()}
            </Grid.Col>

            {/* <Grid.Col xs={6} lg={6}>
          Pay the invoice within 5 days of receiving it.
        </Grid.Col> */}

          {/* </Grid>  */}
        </form>
      </Modal>
    </>
  );
}
