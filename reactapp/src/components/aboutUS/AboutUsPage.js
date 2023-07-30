import {
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Text,
    Menu,
    Title,
    Card,
    Badge,
    Image
} from "@mantine/core";
import VaccinationResearch from "../../assests/VaccinationResearch .svg"
import hospitalhms from "../../assests/hospitalhms.svg"
import nursinghms from "../../assests/nursinghms.svg"
import inpatienthms from "../../assests/inpatienthms.svg"
import outpatienthms from "../../assests/outpatienthms.svg"
import surgicalhms from "../../assests/surgicalhms.svg"


export default function AboutUspage(){
    return (
      <Box>
      
        <Grid>
        <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
        <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
        <Grid.Col xs={12} lg={12}>
        </Grid.Col >
        <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
          <Grid.Col xs={4} lg={4}>
          <Image
          src={hospitalhms}
          height={300}
          width={470}
          alt="Norway"
          style={{ borderRadius: '50px' }}
          
        />
      
        </Grid.Col>
          
          <Grid.Col xs={8} lg={8}>
          <Title style={{ fontSize: "40px", textAlign: "center"}} >About Us</Title>
          <Grid.Col xs={12} lg={12}> 
          </Grid.Col >
          <Text size="sm" >A tertiary care hospital, it is part of the React Group of Educational Institutions and Companies, 
          which has wide spectrum of activities viz. Chemical Industries,Distilleries, Transformers and LT switch board manufacturing, Plantation, 
          Real Estates and Transportation.</Text>
          <Grid.Col xs={12} lg={12}> 
          </Grid.Col >
          
          <Grid>
          <Grid.Col xs={12} lg={12}> 
          </Grid.Col >
          <Grid.Col xs={6} lg={6}>
          <Title style={{ fontSize: "25px" }}>
          <span style={{ backgroundColor:'#ADD8E6' }}>
            Mission
          </span>
          </Title>
          <Grid.Col xs={12} lg={12}> 
         </Grid.Col >

          <Text size="sm" >The mission of the Hotel Grand is to put hospitality services on the highest level in order to satisfy the demands and expectations of guests.
          Our aim is to make the Hotel Grand a place for encounters, business success, pleasant meetings and gala ceremonies.</Text>
          
          </Grid.Col >
          <Grid.Col xs={6} lg={6}>
          <Title style={{ fontSize: "25px" }}>
          <span style={{ backgroundColor:'#ADD8E6' }}>
            Vision
          </span>
          </Title>
          <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
          <Text size="sm" >The ideology of our vision is to continue to apply and set the highest standards of service quality and in that way justify
          and uphold the reputation that we have among the guests, partners, competitors and the wider community.</Text>

          </Grid.Col >
          </Grid>
          </Grid.Col>   
        <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
          
        <Grid.Col xs={12} lg={12}>
        <Title style={{ fontSize: "30px", textAlign: "center"}} >Our Team</Title>
        </Grid.Col >
         <Grid.Col xs={12} lg={12}> </Grid.Col >
          
        <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      <Image
          src={outpatienthms}
          height={200}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Outpatient department </Text>
        <Badge color="pink" variant="light">
          Available
        </Badge>
      </Group>

      <Text size="sm" >
      What is the meaning of OPD department?
      Official Personnel Folders (OPF) are primarily administrative records used by the government to 
      make accurate employment decisions throughout a Federal employee's career.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      <Image
          src={surgicalhms}
          height={200}
          alt="Norway"
        />
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Surgical department</Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      Department of Surgery Goal To provide proper medical service to all patients with surgical diseases who 
      seek consultation and treatment in the hospital To examine all patients to make a rational and accurate diagnosis.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      <Image
          src={inpatienthms}
          height={200}
          alt="Norway"
        />
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}> Inpatient service</Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm"  textAlign="justify">
      Inpatient Department consists of a wards with Nursing Station, Beds, and all other facility & services 
      necessary for good patient care. It is one of the important aspects of hospital as every ratios and calculation for hospital planning.
      </Text>
      </Card>
      </Grid.Col>

      
      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      <Image
          src={nursinghms}
          height={200}
          alt="Norway"
        />
      
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Nursing department </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      The nursing department is the organizational structure through which nurses provide nursing care for clients under the jurisdiction of the institution. The nursing department consists of nursing service and nursing education.
      </Text>
      </Card>
      </Grid.Col>
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >

      
      </Grid>
      </Box>
        
      );
}