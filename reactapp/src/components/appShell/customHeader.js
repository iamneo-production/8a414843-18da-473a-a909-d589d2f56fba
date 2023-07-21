import {
    Avatar,
    Burger,
    createStyles,
    Header,
    MediaQuery,
    Menu,
    Text,
    useMantineTheme,
    Image,
    Grid,
    Group
} from "@mantine/core";

import { useState } from "react";

import { IconSettings } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
// import HospitalLogo from "../../assests/hospitalLogo.svg"
import HospitalSvg from "../../components/svg/hospitalLogoSvg"
import ProfileDetailModal from "../profileDetails/profileDetails";


const useStyles = createStyles((theme) => ({
    notify: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        // marginRight: "14px",
        // marginBottom: "17px",
        "&:hover": {
            cursor: "pointer",
        },
    },
}));

export default function CustomHeader(props) {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const [notify, setNotify] = useState(false);
    const [notificationList, setNotificationList] = useState([]);
    const nav = useNavigate();
    const { className, drawerOpened, setDrawerOpened } = props;
    const [modalOpen, setModalOpen] = useState(false);

    return (
        // <Header height={{ base: 50, md: 70 }} p="md">
        //     <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        //         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        //             <Burger
        //                 opened={drawerOpened}
        //                 onClick={() => setDrawerOpened((o: any) => !o)}
        //                 size="sm"
        //                 color={theme.colors.gray[6]}
        //                 mr="xl"
        //             />
        //         </MediaQuery>

        //         <Text>Application header</Text>
        //     </div>
        // </Header>
        <Header height={70} p="xs" className={className}>


            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                        opened={drawerOpened}
                        onClick={() => setDrawerOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <Group pl="md">
                    <HospitalSvg color="#E3E0F4" />
                    {/* <img
                        src={HospitalLogo}
                        alt=""
                        style={{
                            width: "90px",
                            height: "40px",
                            marginLeft: "49px",
                            marginTop: "5px",
                        }}
                    /> */}
                    <Text fz="md" fw="500" sx={{ color: 'white' }}>MediLab Hospital</Text>
                </Group>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >


                    <Menu width={150} shadow="md">
                        <Menu.Target>
                            <Avatar
                                radius="xl"
                                style={{
                                    marginRight: "10px",
                                    cursor: "pointer",
                                }}
                                src={null}
                            />
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item icon={<IconSettings />} onClick={()=> setModalOpen(true)}> Profile </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
            <ProfileDetailModal open={modalOpen} close={()=> setModalOpen(false)}/>
        </Header>
    );
}
