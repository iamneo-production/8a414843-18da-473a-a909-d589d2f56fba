import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Grid,
  ActionIcon,
  rem,
  
} from '@mantine/core';
import bgcontacthms from "../../assests/bgcontacthms.svg"


import { IconSun, IconPhone, IconMapPin, IconAt, IconClock, } from '@tabler/icons-react';
import React from 'react';

const useStyles = createStyles((theme) => ({

  wrapper:
   {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage:  `url(${bgcontacthms})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: 
  {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color:theme.colors.black,
    lineHeight: 1,
  },

  description: 
  {
    color: theme.colors.black,
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form:
   {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social:
   {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input:
   {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel:
   {
    color: theme.black,
  },

  control: 
  {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
  Button:
  {
    buttonColor:  '#ADD8E6',
  }

}
));


export function ContactUs() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>
          <div className={classes.contactDetails}>
            <div className={classes.contactDetail}>
              <IconAt size="1.4rem" stroke={1.5} color="blue" className={classes.social} />
              
              <Text>
                Email
              </Text>
              <Text >
                hello@mantine.dev
              </Text>
            
            </div>
            <div className={classes.contactDetail}>
              <IconPhone size="1.4rem" stroke={1.5} color="blue" className={classes.social} />
              <Text>
                Phone
              </Text>
              <Text>
                +49 (800) 335 35 35
              </Text>
            </div>
            <div className={classes.contactDetail}>
              <IconMapPin size="1.4rem" stroke={1.5} color="blue" className={classes.social} />
              <Text>
                Address
              </Text>
              <Text>
                844 Morris Park avenue
              </Text>
            </div>
            <div className={classes.contactDetail}>
              <IconClock size="1.4rem" stroke={1.5} color="blue" className={classes.social} />
              <Text>
                Working hours
              </Text>
              <Text>
                8 a.m. – 11 p.m.
              </Text>
            </div>
            <div className={classes.contactDetail}>
              <IconSun size="1.4rem" stroke={1.5}  color="blue" className={classes.social} />
              <Text>
                Working days
              </Text>
              <Text>
                Monday – Friday
              </Text>
            </div>
          </div>
          
        

        </div>
        <div className={classes.form}>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="hello@mantine.dev" required />
            </SimpleGrid>
            
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput label="Mobile number" placeholder="your number" />
              <TextInput label="city" placeholder="your current city" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={6}
            />

            <Group position="left" mt="md">
              <Button type="submit" className={classes.control}  color={classes.buttonColor}>
                Send message
              </Button>
            </Group>
           
        </div>
      </SimpleGrid>
    </div>
  );
}