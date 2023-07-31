import { createStyles, Container, Group, ActionIcon, rem, Image, Text  } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';



const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor:'#ADD8E6',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
  iconHighlight: {
    backgroundColor:"rgba(139, 127, 194, 1)", // Add your desired highlighting color here
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (


   
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <div style={{ display: 'flex', }}>
      <Text pl="xs" fw={500} style={{ dropShadow: "0px 4px 4px 0px #000000 25%" }}> © 2023 Medilab solutions. All rights reserved.</Text>                    </div>
        
        <Group spacing={0} className={classes.links} position="right" noWrap>
        <Text pl="xs" fw={500} style={{ marginRight: '10px' }}>Follow Us:</Text>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin" target="_blank" rel="noopener noreferrer">
            <ActionIcon size="lg" style={{ backgroundColor: '#1DA1F2', marginRight: '8px' }}>
              <IconBrandTwitter size="1.05rem" stroke={1.5} color="#ffffff" />
            </ActionIcon>
          </a>
          <a href="https://youtube.com/@MedilabSolutions" target="_blank" rel="noopener noreferrer">
            <ActionIcon size="lg" style={{ backgroundColor: '#FF0000', marginRight: '8px' }}>
              <IconBrandYoutube size="1.05rem" stroke={1.5} color="#ffffff" />
            </ActionIcon>
          </a>
          <a href="https://www.instagram.com/accounts/login/?next=%2Fyour_instagram_page_url" target="_blank" rel="noopener noreferrer">
            <ActionIcon size="lg" style={{ backgroundColor: '#E4405F', marginRight: '8px' }}>
              <IconBrandInstagram size="1.05rem" stroke={1.5} color="#ffffff" />
            </ActionIcon>
          </a>
          <a href="https://facebook.com/your_facebook_page_url" target="_blank" rel="noopener noreferrer">
            <ActionIcon size="lg" style={{ backgroundColor: '#1877F2', marginRight: '8px' }}>
              <IconBrandFacebook size="1.05rem" stroke={1.5}  color="#ffffff" />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}