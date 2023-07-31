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



export default function Cards(){
    return (
      <Box>
      
        <Grid>
        <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
        <Grid.Col xs={12} lg={12}> 
        </Grid.Col >
       
      
          
        <Grid.Col xs={12} lg={12}>
        <Title style={{ fontSize: "30px", textAlign: "center"}} >Specialists</Title>
        </Grid.Col >
         <Grid.Col xs={12} lg={12}> 
         </Grid.Col >
          
        <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
   
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Anesthesiologists 
            </Text>
        <Badge color="pink" variant="light">
          Available
        </Badge>
      </Group>

      <Text size="sm" >
      These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. 
      They monitor your vital signs.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Cardiologists
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      They’re experts on the heart and blood vessels. 
      You might see them for heart failure, a heart attack, high blood pressure.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
             Colon and Rectal Surgeons
             </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm"  textAlign="justify">
      You would see these doctors for problems with your small intestine, colon, and bottom. 
      They can treat colon cancer, hemorrhoids.
      </Text>
      </Card>
      </Grid.Col>

      
      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
     
      
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Critical Care Specialists
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      They care for people who are critically ill or injured, often heading intensive care units in hospitals. 
      You might see them if your heart or other organs 
      </Text>
      </Card>
      </Grid.Col>
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >

      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
   
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Endocrinologists
            </Text>
        <Badge color="pink" variant="light">
          Available
        </Badge>
      </Group>

      <Text size="sm" >
      These are experts on hormones and metabolism. T
      hey can treat conditions like diabetes, thyroid problems, infertility.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Family Physicians
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      They care for the whole family, including children, adults, and the elderly. 
      They do routine checkups and screening test.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}> 
        Gastroenterologists
        </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm"  textAlign="justify">
      They’re specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder. 
      You might see them for abdominal pain, ulcers.
      </Text>
      </Card>
      </Grid.Col>

      
      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
     
      
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Medical Geneticists
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      They diagnose and treat hereditary disorders passed down from parents to children. 
      These doctors may also offer genetic counseling and screening tests.
      </Text>
      </Card>
      </Grid.Col>
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >

      
      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
   
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Pediatricians
            </Text>
        <Badge color="pink" variant="light">
          Available
        </Badge>
      </Group>

      <Text size="sm" >
      They care for children from birth to young adulthood. 
      Some pediatricians specialize in pre-teens and teens, child abuse, 
      or children's developmental issues.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Physiatrists
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      These specialists in physical medicine and rehabilitation treat neck or back pain and sports or 
      spinal cord injuries as well as other disabilities caused by accidents or diseases.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}> 
        Plastic Surgeons
        </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm"  textAlign="justify">
      You might call them cosmetic surgeons. They rebuild or repair your skin, face, hands, breasts, or body. 
      That can happen after an injury or disease or for cosmetic reasons.
      </Text>
      </Card>
      </Grid.Col>

      
      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
     
      
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Pulmonologists
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      You would see these specialists for problems like lung cancer, pneumonia, asthma, emphysema, 
      and trouble sleeping caused by breathing issues,repetitive injuries, and fibromyalgia.
      </Text>
      </Card>
      </Grid.Col>
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col >
      <Grid.Col xs={12} lg={12}> 
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
   
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Sleep Medicine Specialists
            </Text>
        <Badge color="pink" variant="light">
          Available
        </Badge>
      </Group>

      <Text size="sm" >
      They find and treat causes behind your poor sleep. They may have sleep labs or give you 
      take-home tests to chart your sleep-wake patterns.prevent injuries related to sports and exercise.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            General Surgeons
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      These doctors can operate on all parts of your body. They can take out tumors, appendices, 
      or gallbladders and repair hernias. Many surgeons have subspecialties, like cancer, hand, or vascular surgery.
      </Text>
      </Card>
      </Grid.Col>

      <Grid.Col xs={3} lg={3}> 
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
      
        
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
             Urologists
             </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm"  textAlign="justify">
      These are surgeons who care for men and women for problems in the urinary tract, like a leaky bladder.
       They also treat male infertility and do prostate exams.
      </Text>
      </Card>
      </Grid.Col>

      
      <Grid.Col xs={3} lg={3}> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
     
      
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>
            Radiologists
            </Text>
        <Badge color="pink" variant="light">
        Available
        </Badge>
      </Group>

      <Text size="sm" >
      They use X-rays, ultrasound, and other imaging tests to diagnose diseases. 
      They can also specialize in radiation oncology to treat conditions like cancer, hand ,vascular surgery.
      </Text>
      </Card>
      </Grid.Col>
      </Grid>
      </Box>
        
      );
}