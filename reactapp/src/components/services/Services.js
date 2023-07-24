import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  Grid
} from '@mantine/core';
import { IconHeart,IconUser,IconStethoscope} from '@tabler/icons-react';

const mockdata = [
  {
    title: 'Better Patient Interactions',
    description:
   " Medical Scribe person improves the physician-patient relationship because the physician is able to pay full attention to the patient and is not distracted by data entry.",
    icon: IconHeart,
  },
  {
    title: 'Higher Physician Satisfaction',
    description:
    "Physicians don't burn out doing EHR documentation. Medical scribes help in during that work load",
    icon: IconUser,
  },
  {
    title: 'Higher Physician Productivity',
    description:
    "Allows physicians to see more patient as they are not burned out by documentation.",
    icon: IconStethoscope,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
      
    <Container size="lg" py="xl"  style={{
      backgroundColor: '#ADD8E6', // Replace with the desired background color
    }}>
      <Grid>
      <Grid.Col xs={12} lg={12}> </Grid.Col >
      <Grid.Col xs={12} lg={12}> </Grid.Col >
      
      
      </Grid>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Best Hospital ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
      eScribe - Medical Scribe
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      Medical scribes document physician and patient interactions during treatment. They transcribe a patient's information to the EHR, allowing phycians to save time and focus on the patient 
      rather than the documentation. Use of scribbles results in lower documentation burden, improved efficiency and better patient-physician interaction.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}