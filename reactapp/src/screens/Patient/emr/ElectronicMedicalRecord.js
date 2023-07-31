import { Card, Col, Grid ,Button,Image,Title,Text} from "@mantine/core";
import React from "react";
import { useState } from "react";
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import report from "../../../assests/doctorasrhr.svg"
const data = {
    labels: ['Body Temperature', 'Pulse', 'Blood Pressure', 'Breathing Rate', 'Sugar Level', 'Weight', 'Height'],
    datasets: [
      {
        data: [36.8, 80, 120, 18, 110, 70, 170],
        backgroundColor: [
          '#0088FE',
          '#00C49F',
          '#FFBB28',
          '#FF8042',
          '#8884D8',
          '#FF8C00',
          '#FF6384'
        ],
        hoverBackgroundColor: [
          '#0077D6',
          '#00B38F',
          '#FFAC1D',
          '#FF7234',
          '#776ED9',
          '#FF7800',
          '#FF5473'
        ]
      }
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          font: {
            size: 12
          }
        }
      }
    }
  };
const ElectronicMedicalRecord = () => {
    const bodyTemperature = 36.8;
    const pulse = 20;
    const bloodPressure = 23;
  
    const showConsultationCard = bodyTemperature > 95 || pulse > 50 || bloodPressure > 130;
    return(
        <Grid>
        <Col span={12}>
          <Card shadow="md" mt="lg" style={{ height: "50vh" }}>
            <Grid gutter="lg">
              <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",
                                        backgroundColor:"rgba(248, 249, 250, 1)"}}>
                    <div style={{ display: "flex", 
                                  flexDirection: "column",
                                  alignItems: "center", 
                                  justifyContent: "center", 
                                  height: "100%" }}>
                        <h3 style={{ 
                            marginBottom: "1px",
                            color:"rgba(134, 142, 150, 1)"}}>Body Temperature
                        </h3>
                        <h1 style={{ fontWeight: "bold", 
                                     fontSize: "25px" }}>35.4</h1>
                        <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>°C</p>
                    </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",
                                           backgroundColor:"rgba(248, 249, 250, 1)"}}>
                        <div style={{ display: "flex", 
                                      flexDirection: "column",
                                      alignItems: "center", 
                                      justifyContent: "center", 
                                      height: "100%" }}>
                            <h3 style={{ marginBottom: "1px",color:"rgba(134, 142, 150, 1)"}}>Pulse</h3>
                            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>85</h1>
                            <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>bpm</p>
                        </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",backgroundColor:"rgba(248, 249, 250, 1)"}}>
                        <div style={{ display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    height: "100%" }}>
                            <h3 style={{ marginBottom: "1px",color:"rgba(134, 142, 150, 1)"}}>Blood Pressure</h3>
                            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>80/70</h1>
                            <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>mm/Hg</p>
                        </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",backgroundColor:"rgba(248, 249, 250, 1)"}}>
                        <div style={{ display: "flex", 
                                      flexDirection: "column",
                                      alignItems: "center", 
                                      justifyContent: "center", 
                                      height: "100%" }}>
                            <h3 style={{ marginBottom: "1px",color:"rgba(134, 142, 150, 1)"}}>Breathing Rate</h3>
                            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>15</h1>
                            <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>breaths/m</p>
                        </div>
                </Card>
              </Col>
               <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",backgroundColor:"rgba(248, 249, 250, 1)"}}>
                        <div style={{ 
                                    display: "flex", 
                                    flexDirection: "column",
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    height: "100%" }}>
                            <h3 style={{ marginBottom: "1px",color:"rgba(134, 142, 150, 1)"}}>Sugar Level</h3>
                            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>80/70</h1>
                            <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>mg/Hw</p>
                        </div>
                </Card>
              </Col>
               <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",backgroundColor:"rgba(248, 249, 250, 1)"}}>
                        <div style={{ display: "flex", flexDirection: "column",alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <h3 style={{ marginBottom: "1px",color:"rgba(134, 142, 150, 1)"}}>Blood Group</h3>
                            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>O</h1>
                            <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>+ve</p>
                        </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",backgroundColor:"rgba(248, 249, 250, 1)"}}>
                        <div style={{ display: "flex", flexDirection: "column",alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <h3 style={{ marginBottom: "1px",color:"rgba(134, 142, 150, 1)"}}>Weight</h3>
                            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>69</h1>
                            <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>Kg</p>
                        </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" style={{ height: "20vh",backgroundColor:"rgba(248, 249, 250, 1)"}}>
                        <div style={{ display: "flex", flexDirection: "column",alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <h3 style={{ marginBottom: "1px",color:"rgba(134, 142, 150, 1)"}}>Height</h3>
                            <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>6.5</h1>
                            <p style={{ marginTop: "1px",color:"rgba(134, 142, 150, 1)" }}>ft</p>
                        </div>
                </Card>
              </Col>
              </Grid>
              </Card>
        </Col>
        <Col span={4}>
            <Card shadow="sm"  style={{height:"30vh"}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px'}}>
                      <Image
                      src={report}
                        // Replace with the actual image URL
                      alt="Image"
                      width={150}
                      height={150}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Full Body Report</Title>
                      <Text size="sm" color="gray">
                       14/23/22
                      </Text>
                    </div>
                  </div>
                </Card>
        </Col>
        <Col span={8}>
            <Card title="Health Data" 
            style={{ border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '16px' }}>
                <div 
                style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Pie data={data} options={options} />
                </div>
            </Card>
        </Col>
        <Col span={4}>
            {showConsultationCard ? (
            <Card title="Health Status" 
            style={{ marginTop: '16px', border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '8px', padding: '16px',bottom:"115%" }}>
                <p style={{ textAlign: 'center', color: '#FF0000', fontWeight: 'bold' }}>Consult a doctor</p>
            </Card>) : (
            <Card title="Health Status" style={{ marginTop: '16px', border: 'none', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '16px'
            ,bottom:"115%" }}>
            <p style={{ textAlign: 'center', color: '#008000', fontWeight: 'bold' }}>Health is normal</p>
            </Card>
            )}
        </Col>
      </Grid>
    );
}

export default ElectronicMedicalRecord;