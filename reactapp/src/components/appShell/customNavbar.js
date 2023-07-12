import { useState } from 'react';
import { createStyles, Navbar, Group, Code, getStylesRef, rem } from '@mantine/core';
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logouts } from '../../provider/features/userSlice';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: "#9083D5",
        // background: "linear-gradient(#9083D5, #807593)"
        // theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    },

    version: {
        backgroundColor: '',
        //  theme.fn.lighten(
        //   theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        //   0.1
        // ),
        color: theme.white,
        fontWeight: 700,
    },

    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        // borderBottom: `${rem(1)} solid ${theme.fn.lighten(
        //   theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        //   0.1
        // )}`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        // borderTop: `${rem(1)} solid ${theme.fn.lighten(
        //   theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        //   0.1
        // )}`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: "15px",
        // fontSize: theme.fontSizes.sm,
        color: theme.white,
        padding: "20px",
        // padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: '#CBC8C8',
            //   theme.fn.lighten(
            //     theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
            //     0.1
            //   ),
        },
    },

    linkIcon: {
        // ref: getStylesRef('icon'),
        color: theme.white,
        opacity: 0.75,
        marginRight: theme.spacing.sm,
    },


    linkActive: {
        '&, &:hover': {
            backgroundColor: '#439CEA',
            //    theme.fn.lighten(
            //     theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
            //     0.15
            //   ),
            [`& .${getStylesRef('icon')}`]: {
                opacity: 0.9,
            },
        },
    },
}));

// const data = [
//     { link: '', label: 'Notifications', icon: IconBellRinging },
//     { link: '', label: 'Billing', icon: IconReceipt2 },
//     { link: '', label: 'Security', icon: IconFingerprint },
//     { link: '', label: 'SSH Keys', icon: IconKey },
//     { link: '', label: 'Databases', icon: IconDatabaseImport },
//     { link: '', label: 'Authentication', icon: Icon2fa },
//     { link: '', label: 'Other Settings', icon: IconSettings },
// ];

export default function CustomNavbar(props) {
    const { data } = props
    const navigate = useNavigate()
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('');
    const dispatch = useDispatch()

    const links = data.map((item) => (
        <a
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
                navigate(item.link)
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span >{item.label}</span>
        </a>
    ));

    return (
        <Navbar height={`${100 - 10}vh`} width={{ sm: 240 }} p="md" className={classes.navbar}>
            <Navbar.Section grow>
                {/* <Group className={classes.header} position="apart">
                    {/* <MantineLogo size={28} inverted /> */}
                {/* <Code className={classes.version}>v3.1.2</Code>
                </Group>  */}
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                {/* <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a> */}

                <div className={classes.link} onClick={(event) => {
                    event.preventDefault()
                    localStorage.clear()
                    dispatch(logouts({}))
                    navigate('/')
                }
                }>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span onClick={() => {
                        // localStorage.clear()
                        // navigate('/')
                    }}>Logout</span>
                </div>
            </Navbar.Section>
        </Navbar>
    );
}