import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid,
    createStyles,
    rem,
  } from '@mantine/core';
  
  const IMAGES = {
    Arrow: 'data:image/png;base64,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',
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8Pm-v6ON46ZkSCT_50Rh-2mE9u833iNsiLWs6pjv6femC36eBg63VVjSgAOtI3DOeIo&usqp=CAU',
    partner: 'data:image/jpeg;base64,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',
    support:'https://cdn-icons-png.flaticon.com/512/80/80630.png',
  };
  
  const data = [
   
          {
            "image": "Arrow",
            "title": "Sales",
            "description": "Looking for a demo, have questions about products and pricing?"
          },
          {
            "image": "person",
            "title": "Careers",
            "description": "Want to make a difference? So do we. Step in to explore the career opportunities"
          },
          {
            "image": "partner",
            "title": "Partners",
            "description": "We love partnering with other great organizations. Let’s discuss it."
          },
          
          {
            "image": "support",
            "title": "24/7 Support",
            "description": "Rapidash usually can be seen casually cantering in the fields and plains."
          },
         
        ]
      
  
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  
    item: {
      display: 'flex',
    },
  
    itemIcon: {
      padding: theme.spacing.xs,
      marginRight: theme.spacing.md,
    },
  
    itemTitle: {
      marginBottom: `calc(${theme.spacing.xs} / 2)`,
    },
  
    supTitle: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 800,
      fontSize: theme.fontSizes.sm,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      letterSpacing: rem(0.5),
    },
  
    title: {
      lineHeight: 1,
      textAlign: 'center',
      marginTop: theme.spacing.xl,
    },
  
    description: {
      textAlign: 'center',
      marginTop: theme.spacing.xs,
    },
  
    highlight: {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      padding: rem(5),
      paddingTop: 0,
      borderRadius: theme.radius.sm,
      display: 'inline-block',
      color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
    },
  }));
  
  export function FeaturesImages() {
  
    const supTitle = " Reach out to our team directly for immediate assistance for all inquiries";
    const description = "Explore Careers Today about our services";
   
  
    const { classes } = useStyles();
  
    const items = data.map((item) => (
      <div className={classes.item} key={item.image}>
        <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[item.image]} alt={item.title} />
        </ThemeIcon>
  
        <div>
          <Text fw={700} fz="lg" className={classes.itemTitle}>
            {item.title}
          </Text>
          <Text c="dimmed">{item.description}</Text>
        </div>
      </div>
    ));
  
    return (
      <Container size={700} className={classes.wrapper}>
        <Text className={classes.supTitle}>{supTitle}</Text>
  
        <Title className={classes.title} order={2}>
        Let us <span className={classes.highlight}>know</span> how we can help
        </Title>
  
        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            {description}
          </Text>
        </Container>
  
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 700, cols: 1, spacing: 40 }]}
          style={{ marginTop: 30 }}
        >
          {items}
        </SimpleGrid>
      </Container>
    );
  }