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



export default function Values(){
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
        <Title style={{ fontSize: "30px", textAlign: "center"}} >
             Patients Benefits
             </Title>
        </Grid.Col >
         <Grid.Col xs={12} lg={12}> 
         </Grid.Col >
          
        <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Values 
            </Text>
        <Badge color="pink" variant="light">
          Available
        </Badge>
      </Group>

      <Text size="sm" >
      Our value system defines us, and acts as an anchor when we are faced with challenges. 
      We have a culture of customer focus
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Customer Focus
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      Listening to the customers, and rapidly evolving the product helps DocPulse not only meet the customer
       expectations but also lead the market 
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Continuous Improvement
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm"  textAlign="justify">
      We believe quality is a journey and we are constantly striving to provide the features that just works for our customers
      </Text>
      </Card>
      </Grid.Col>

      
      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Customer service
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      Our focus on customer service makes our customers not only happy but also enthusiastically refer to other customers.
      </Text>
      </Card>
      </Grid.Col>
      <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
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