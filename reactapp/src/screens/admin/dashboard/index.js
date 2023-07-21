import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
//import { Col, Grid, Card, Title } from '@mantine/core';
import { Line } from 'react-chartjs-2';
import { 
  Container,
  Grid,
  Col,
  Card, 
  Title, 
  Text, 
  Paper, 
  Button, 
  Avatar, 
  Textarea,
  TextInput,
  Image} from '@mantine/core';
import Profile from "../../../assests/Profilerhr.svg"
import { 
  useRef,
  useEffect } from 'react';
import { useForm } from '@mantine/form';
import doctor from "../../../assests/doctorasrhr.svg"
import money from "../../../assests/moneyrhr.svg"
import man from "../../../assests/man1rhr.svg"
import patient from "../../../assests/patientrhr.svg"
import appointment from "../../../assests/appointmentrhr.svg"
import { IconPhone } from '@tabler/icons-react';
import { useDispatch,useSelector } from 'react-redux';
const AdminDashboard = () => {
  /* const dispatch = useDispatch()
  const user = useSelector((s) => s?.user?.value)
  console.log("userdate",user); */
    const hospitalProfitData = [
      { month: 'Jul', profit: 218500 },
      { month: 'Aug', profit: 117000 },
      { month: 'Sep', profit: 219500 },
      { month: 'Oct', profit: 117200 },
      { month: 'Nov', profit: 418500 },
      { month: 'Dec', profit: 217800 },
      { month: 'Jan', profit: 115000 },
      { month: 'Feb', profit: 218000 },
      { month: 'Mar', profit: 116000 },
      { month: 'Apr', profit: 319000 },
      { month: 'May', profit: 417500 },
      { month: 'Jun', profit: 311000 },
    ];
    const chartData = {
      labels: hospitalProfitData.map((data) => data.month),
      datasets: [
        {
          label: 'Hospital Profit',
          data: hospitalProfitData.map((data) => data.profit),
          fill: true,
          backgroundColor: 'rgba(136, 132, 216, 0.2)',
          borderColor: 'rgba(136, 132, 216, 1)',
          pointBackgroundColor: 'rgba(136, 132, 216, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(136, 132, 216, 1)',
          tension: 0.4,
        },
      ],
    };
  
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            font: {
              weight: 600,
            },
            color: '#888',
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => `$${value}`,
            font: {
              weight: 600,
            },
            color: '#888',
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [3, 3],
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: 'rgba(136, 132, 216, 1)',
          titleColor: '#fff',
          bodyColor: '#fff',
          titleFont: {
            size: 14,
            weight: 600,
          },
          bodyFont: {
            size: 14,
            weight: 500,
          },
          displayColors: false,
          callbacks: {
            label: (context) => `$${context.parsed.y}`,
          },
        },
      },
    };
    return (
      <Grid gutter="lg" 
      style={{fontFamily:"sans-serif",}} >
        <Col span={12}>
          <Card shadow="sm" m="md">
          <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
              <Image src={man} width={50}></Image>
              </div>
              <div  style={{ flex: '1 1 auto' }}>
                <Title order={2}>Medilab Hospital</Title>
                <Text size="sm" color="gray">Welcome back! Admin</Text>
              </div>
          </div>
          </Card>
          </Col>
          <Col span={12}>
          <Card shadow="sm" m="md">
            <Title order={2}
            style={{
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '1.5rem',
              color: '#333',
            }}>
              Hospital Activity
            </Title>
            <Grid gutter="md">
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div 
                  style={{ 
                  display: 'flex', 
                  alignItems: 'center' }}>
                    <div 
                    style={{ 
                      flex: '0 0 auto', 
                      marginRight: '16px' 
                      }}>
                      <Image
                      src={appointment} // Replace with the actual image URL
                      alt="Image"
                      width={100}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Today Appointments</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center' 
                    }}>
                    <div 
                    style=
                    {{ 
                      flex: '0 0 auto', 
                      marginRight: '16px' }}
                    >
                      <Image
                      src={patient} // Replace with the actual image URL
                      alt="Image"
                      width={100}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Patients Active</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
                      <Image
                      src={doctor} // Replace with the actual image URL
                      alt="Image"
                      width={100}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Total Doctors</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
                      <Image
                      src={doctor} // Replace with the actual image URL
                      alt="Image"
                      width={100}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Active Doctors</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
                      <Image
                      src={doctor} // Replace with the actual image URL
                      alt="Image"
                      width={100}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Total Staffs</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
                      <Image
                      src={doctor} // Replace with the actual image URL
                      alt="Image"
                      width={100}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Active Staffs</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
                      <Image
                      src={money} // Replace with the actual image URL
                      alt="Image"
                      width={80}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}} >Total Revenue</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={3}>
                <Card shadow="sm" m="xs">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: '0 0 auto', marginRight: '16px' }}>
                      <Image
                      src={money} // Replace with the actual image URL
                      alt="Image"
                      width={80}
                      height={100}
                      radius="md"
                      />
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <Title order={4} style={{fontWeight:600}}>Total Expenses</Title>
                      <Text size="sm" color="gray">
                       80
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col span={12}>
        <Card
          shadow="sm"
          m="md"
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            height: '500px',
          }}
        >
          <Title
            order={2}
            style={{
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '1.5rem',
              color: '#333',
            }}
          >
            Hospital Profit (Last 12 Months)
          </Title>
          <div style={{ height: 'calc(100% - 3rem)' }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </Card>
        </Col>
    </Grid>
  );
};

export default AdminDashboard;
