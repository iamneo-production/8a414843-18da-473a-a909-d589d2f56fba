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
import teamworkhms from "../../assests/teamworkhms.svg"
import turusthms from "../../assests/turusthms.svg"
import experiencehms from "../../assests/experiencehms.svg"
import innovationhms from "../../assests/innovationhms.svg"



export default function AboutUspages(){
    return (
      
       
<Grid>

<Grid.Col xs={12} lg={12}> 
</Grid.Col >
<Grid.Col xs={12} lg={12}> 
</Grid.Col >

<Grid.Col xs={12} lg={12}>
</Grid.Col >


<Grid.Col xs={12} lg={12}>
<Title style={{ fontSize: "20px", textAlign: "center"}} >
  A CHOICE THAT MAKES THE DIFFERENCE
  </Title>
 <Grid.Col xs={12} lg={12}> 
 </Grid.Col >
      <div style={{ textAlign: 'center' }}>
      <Text size="sm">
       Reasons to Choose Us
      </Text>
      </div>
         
          </Grid.Col >
<Grid.Col xs={12} lg={12}> 
</Grid.Col >
<Grid.Col xs={2} lg={2}>
</Grid.Col>
<Grid.Col xs={4} lg={4}>
  <Card shadow="sm" padding="lg" radius="md" withBorder>
<Card.Section>
<Image
  src={innovationhms}
  height={200}
  alt="Norway"
/>

</Card.Section>

<Group position="apart" mt="md" mb="xs">
<Text weight={500}>
  Innovation 
</Text>
</Group>

<Text size="sm" >
In health care, innovations enable us to treat previously incurable diseases or to make better use of scarce resources.
</Text>
</Card>
</Grid.Col>


<Grid.Col xs={4} lg={4}>
<Card shadow="sm" padding="lg" radius="md" withBorder>
<Card.Section>
<Image
  src={teamworkhms}
  height={200}
  alt="Norway"
/>

</Card.Section>

<Group position="apart" mt="md" mb="xs">
<Text weight={500}>
  Teamwork 
</Text>
</Group>

<Text size="sm" >
Teamwork also reduces issues that lead to burnout. No longer is one person responsible for the patient's health.
</Text>
</Card>
</Grid.Col>
  
<Grid.Col xs={2} lg={2}>
</Grid.Col>
<Grid.Col xs={2} lg={2}>
</Grid.Col>
<Grid.Col xs={4} lg={4}>
<Card shadow="sm" padding="lg" radius="md" withBorder>
<Card.Section>
<Image
  src={turusthms}
  height={200}
  alt="Norway"
/>

</Card.Section>

<Group position="apart" mt="md" mb="xs">
<Text weight={500}>
Trust 
</Text>

</Group>

<Text size="sm" >
The doctor-patient relationship lies at the heart of health care, and patient trust is a fundamental aspect of that relationship.
</Text>
</Card>
</Grid.Col>


<Grid.Col xs={4} lg={4}>
<Card shadow="sm" padding="lg" radius="md" withBorder>
<Card.Section>
<Image
  src={experiencehms}
  height={200}
  alt="Norway"
/>

</Card.Section>

<Group position="apart" mt="md" mb="xs">
<Text weight={500}>
Experience
  </Text>
</Group>

<Text size="sm" >
The physician provides continuous care for the patient while in the hospital or ambulatory setting.
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

    )
}
