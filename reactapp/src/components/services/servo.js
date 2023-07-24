import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    Col,
    rem,
    Card,
  } from '@mantine/core';
  import {  IconCircleDotted, IconFileCode,IconSettingsExclamation,IconCornerDownLeftDouble, } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    
  }));
  
  const features = [
    {
      icon: IconSettingsExclamation,
      title: 'Software Development & Services',
      description: 'We at Medilab understand the challenges associated with Software Product Development & Product Engineering.',
    },
    {
      icon: IconFileCode,
      title: 'Software Product Development Spans',
      description: 'Product Conceptualization, Product Migration & Software Porting, Independent Quality Assurance & Testin, Product Re-engineering',
    },
    {
      icon: IconCircleDotted,
      title: 'Software Product Development & Services: Advantages',
      description:
        'Transparent and Proven Software Product Development Methodology.Highly Qualified People & Intellectually Work Environment',
    },
    {
      icon: IconCornerDownLeftDouble ,
      title: 'End-to-end services',
      description:
        'Software Product Development,As a proactive Product Development & IT Services partner, we empower our global clients with optimal solutions through our focused Competency Centers.',
    },
  ];
  
  export function FeaturesTitle() {
    const { classes } = useStyles();
  
    const items = features.map((feature) => (
      <div key={feature.title}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
        >
          <feature.icon size={rem(26)} stroke={1.5} />
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <Text c="dimmed" fz="sm">
          {feature.description}
        </Text>
      </div>
    ));
  
    return (
      <div className={classes.wrapper}>
        <Grid gutter={80}>
        <Grid.Col xs={12} lg={12}> </Grid.Col >
        
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
            Hospital Development Services
            </Title>
            <Text c="dimmed">
            Product Development ServicesAdroit Infosystems is a leading healthcare software development company. We develop high quality, reliable and cost-effective healthcare software.

            </Text>
  
            <Card
             
              color='blue'
              size="lg"
              radius="md"
              mt="xl"
            >
              Services Implementation
              </Card>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
          <Grid.Col xs={12} lg={12}> </Grid.Col >
          
        </Grid>
      </div>
    );
  }