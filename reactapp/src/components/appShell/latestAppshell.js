import {
    AppShell,
    Aside,
    Burger,
    Footer,
    Header,
    MediaQuery,
    Navbar,
    Text,
    rem,
    useMantineTheme,
    createStyles,
    ScrollArea,
} from "@mantine/core";
import { useEffect, useState } from "react";

import CustomNavbar from "./customNavbar";
import CustomHeader from "./customHeader";

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: "#F8D147",
        paddingBottom: 0,
        fontFamily: "poppins",
    },
    navbarHeader: {
        // marginLeft: '240px',
        backgroundColor: "#9083D5",
        // background: "linear-gradient(#9083D5, #807593)",
        // overflowY: "hidden",
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    links: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        fontFamily: "poppins",
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },
    linksInner1: {
        fontWeight: "bold",
        padding: "10px",
        height: "40px",

        "&:hover": {
            cursor: "pointer",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            height: "40px",
        },
    },
    linksInner1hover: {
        height: "20px",
        paddingInline: "39px",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "black",
    },

    footer: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },
}));


export default function LatestAppshell(props) {
    const { navData } = props

    const { classes } = useStyles();
    const [drewerOpened, setDrawerOpened] = useState(null);
    const [active, setActive] = useState(1);
    const [opened, setOpened] = useState(null);



    const handleOpen = (clickedIndex) => {
        if (opened === clickedIndex) {
            setOpened(null);
        } else {
            setOpened(clickedIndex);
        }
    }


    return (
        <AppShell
            padding="md"
            style={{ overflowX: "hidden" }}
            navbar={
                <CustomNavbar data={navData} />
                // <>
                //     {/* <Navbar p="md" hiddenBreakpoint="sm" hidden={!drewerOpened} width={{ sm: 200, lg: 300 }}>
                //         <Text>Application navbar</Text>
                //     </Navbar> */}
                //     <Navbar
                //         height="auto"
                //         // width={{ sm: 240 }}
                //         p="md"
                //         className={classes.navbar}
                //         hiddenBreakpoint="sm"
                //         hidden={!drewerOpened}
                //         width={{ sm: 200, lg: 250 }}
                //     >
                //         <Navbar.Section
                //             grow
                //             className={classes.links}
                //             component={ScrollArea}
                //         >
                //             {linkss}
                //         </Navbar.Section>
                //     </Navbar>
                // </>
            }
            header={
                <CustomHeader
                    className={classes.navbarHeader}
                    drawerOpened={drewerOpened}
                    setDrawerOpened={setDrawerOpened}
                />
            }
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
            children={props?.children}
        ></AppShell>
    )
}