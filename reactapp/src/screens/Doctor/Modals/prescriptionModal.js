import { useEffect, useState } from "react";
import {
  Box,
  Card,
  ScrollArea,
  Text,
  Button,
  Modal,
  Grid,
  Container,
  Notification,
  TextInput,
  Select,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import EndPoints from "../../../api/endPoints";
import { get, post } from "../../../api/index";

export default function PrescriptionModal(props) {
  const { open, close, appointmentData, getFunction } = props;
  const [medicineList, setMedicineList] = useState([]);
  const [noOfDays, setNoOfDays] = useState(null);

  const form = useForm({
    initialValues: {
      medicineLists: [
        {
          medicineId: null,
          morning: false,
          noon: false,
          night: false,
        },
      ],
    },
  });

  async function getAllmedicineList() {
    await get(`${EndPoints.inventoryList}`)
      .then((response) => {
        setMedicineList(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleSubmit() {
    let prev = form.values.medicineLists;
    for (let i = 0; i < prev.length; i++) {
      prev[i].appointmentId = appointmentData?.id;
      prev[i].prescribedDays = Number(noOfDays);
      let count = 0;
      if (prev[i].morning) {
        count += 1;
      }
      if (prev[i].noon) {
        count += 1;
      }
      if (prev[i].night) {
        count += 1;
      }
      prev[i].quantity = count * Number(noOfDays);
    }
    console.log("dwdq", prev);
    await post(EndPoints.createPharmacy, prev)
      .then((response) => {
        getFunction();
      })
      .catch((error) => {
        console.log(error);
      });
    close();
  }

  useEffect(() => {
    getAllmedicineList();
  }, []);

  console.log("form", form.values.medicineLists, appointmentData);

  return (
    <Modal opened={open} onClose={close} size="lg" title="Add Prescription">
      <Container>
        <form
          onSubmit={form.onSubmit((values) => {
            handleSubmit();
          })}
        >
          <TextInput
            mb="xl"
            label="No of Days"
            style={{ width: "50%" }}
            onChange={(e) => {
              setNoOfDays(e.target.value);
            }}
          />
          {form.values.medicineLists.map((d, index) => {
            return (
              <>
                <Grid>
                  <Grid.Col xs={4} lg={4}>
                    <Select
                      label="Medicine"
                      placeholder="Pick one"
                      data={
                        Array.isArray(medicineList)
                          ? medicineList.map((d, i) => {
                              return {
                                value: d?.id,
                                label: `${d?.medicineName} (${d?.quantity})`,
                                quantity: d?.quantity,
                              };
                            })
                          : []
                      }
                      {...form.getInputProps(
                        `medicineLists.${index}.medicineId`
                      )}
                      transitionProps={{
                        transition: "pop-top-left",
                        duration: 80,
                        timingFunction: "ease",
                      }}
                      maxDropdownHeight={100}
                      clearable
                      withinPortal
                    />
                  </Grid.Col>
                  <Grid.Col
                    xs={2}
                    lg={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: "0.875rem" }}>Morning</label>
                    <Checkbox
                      size="md"
                      label=""
                      style={{ alignSelf: "center", marginTop: 5 }}
                      {...form.getInputProps(`medicineLists.${index}.morning`)}
                    />
                  </Grid.Col>
                  <Grid.Col
                    xs={2}
                    lg={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: "0.875rem" }}>Noon</label>
                    <Checkbox
                      size="md"
                      label=""
                      style={{ alignSelf: "center", marginTop: 5 }}
                      {...form.getInputProps(`medicineLists.${index}.noon`)}
                    />
                  </Grid.Col>
                  <Grid.Col
                    xs={2}
                    lg={2}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <label style={{ fontSize: "0.875rem" }}>Night</label>
                    <Checkbox
                      size="md"
                      label=""
                      style={{ alignSelf: "center", marginTop: 5 }}
                      {...form.getInputProps(`medicineLists.${index}.night`)}
                    />
                  </Grid.Col>
                  {/* <Grid.Col xs={2} lg={2} style={{display:'flex',flexDirection:'column'}}>
                
                </Grid.Col> */}
                  <Grid.Col
                    xs={2}
                    lg={2}
                    style={{ display: "flex", marginTop: 20 }}
                  >
                    {form.values.medicineLists.length > 1 && (
                      <IconTrash
                        style={{ cursor: "pointer" }}
                        color="red"
                        onClick={() => {
                          form.removeListItem("medicineLists", index);
                        }}
                      />
                    )}
                    {form.values.medicineLists.length - 1 === index && (
                      <IconPlus
                        style={{
                          cursor: "pointer",
                          color: "#228BE6",
                          marginLeft: 10,
                        }}
                        onClick={() => {
                          form.insertListItem("medicineLists", {
                            medicineId: null,
                            morning: false,
                            noon: false,
                            night: false,
                          });
                        }}
                      />
                    )}
                  </Grid.Col>
                </Grid>
                {/* <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Select
                  //   maw={320}
                  label="Medicine"
                  placeholder="Pick one"
                  data={["React", "Angular", "Svelte", "Vue"]}
                  transitionProps={{
                    transition: "pop-top-left",
                    duration: 80,
                    timingFunction: "ease",
                  }}
                  maxDropdownHeight={100}
                  clearable
                  withinPortal
                />
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ fontSize: "0.875rem" }}>Morning</label>
                  <Checkbox
                    size="md"
                    label=""
                    style={{ alignSelf: "center", marginTop: 5 }}
                  />
                </Box>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ fontSize: "0.875rem" }}>Noon</label>
                  <Checkbox
                    size="md"
                    label=""
                    style={{ alignSelf: "center", marginTop: 5 }}
                  />
                </Box>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ fontSize: "0.875rem" }}>Night</label>
                  <Checkbox
                    size="md"
                    label=""
                    style={{ alignSelf: "center", marginTop: 5 }}
                  />
                </Box>
                <Box
                  style={{ alignSelf: "center", marginTop: 5, display: "flex" }}
                >
                    <Box>
                       
                  {form.values.medicineLists.length > 1 && (
                    <IconTrash
                      style={{ cursor: "pointer" }}
                      color="red"
                      onClick={() => {
                        form.removeListItem("medicineLists", index);
                      }}
                    />
                  )}
                  
                  </Box>
                  <Box>
                  {form.values.medicineLists.length - 1 === index && (
                    <IconPlus
                      style={{ cursor: "pointer", color: "#228BE6" }}
                      onClick={() => {
                        form.insertListItem("medicineLists", {
                          medicineId: null,
                          morning: false,
                          noon: false,
                          night: false,
                        });
                      }}
                    />
                  )}
                  </Box>
                </Box>
              </Box> */}
              </>
            );
          })}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Button
              onClick={() => {
                close();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </Box>
        </form>
      </Container>
    </Modal>
  );
}
