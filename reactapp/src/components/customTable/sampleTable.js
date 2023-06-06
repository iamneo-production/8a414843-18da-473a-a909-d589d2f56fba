import {
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Text,
    Image,
    createStyles,
    useMantineTheme,
    ActionIcon,
    Menu,
    Title,
    Loader,
} from "@mantine/core";

import {
    IconDotsVertical,
    IconEdit,
    IconEye,
    IconSearch,
    IconTrash,
} from "@tabler/icons-react";

import CustomTable from ".";

export default function SampleTable() {
    const colDef = [
        {
            accessor: "campaignDetails",
            title: "Campaign Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.campaign_name}</Text>
                </Group>
            ),
        },

        {
            accessor: "startEndDate",
            title: "Start / End Date",
            textAlignment: "center",
            render: (data) => {
                console.log("wdw", data, data?.status, data?.status === "Active");
                return <Text>{data?.date}</Text>;
            },
        },
        {
            accessor: "status",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text
                        fz="12px"
                        fw={500}
                        p={5}
                        style={{
                            fontWeight: "bold",
                            color: data?.status === "Active" ? "#3B72FF" : "#FF3B3B",
                            backgroundColor:
                                data?.status === "Active" ? "#E3EBFF" : "#FFE4E4",
                            borderRadius: "6px",
                        }}
                    >
                        {data?.status}
                    </Text>
                </Group>
            ),
        },
        {
            accessor: "actions",
            title: <Text mr="xs">Actions</Text>,
            textAlignment: "center",
            render: (data) => {
                console.log("data", data);

                return (
                    <Menu position="bottom-start" shadow="xl" width={160}>
                        <Menu.Target>
                            <Button
                                radius="md"
                                variant="subtle"
                            // sx={{ height: "20px", width: "45%" }}
                            >
                                <IconDotsVertical />
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                icon={<IconEye size={19} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                View
                            </Menu.Item>
                            <Menu.Item
                                icon={<IconEdit size={17} style={{ color: "#081226" }} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Edit
                            </Menu.Item>

                            <Menu.Item
                                icon={<IconTrash color="red" size={16} />}
                                style={{
                                    color: "black",
                                    fontSize: 15,
                                    fontWeight: "500",
                                }}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                );
            },
        },
    ];

    const records = [
        { id: 1, campaign_name: "Campaign 1", date: "1/05/2023", status: "Active" },
        {
            id: 2,
            campaign_name: "Campaign 2",
            date: "2/05/2023",
            status: "Offline",
        },
        { id: 3, campaign_name: "Campaign 3", date: "3/05/2023", status: "Active" },
        { 
            id: 4,
            campaign_name: "Campaign 4",
            date: "1/05/2023",
            status: "Offline",
        },
        { id: 5, campaign_name: "Campaign 5", date: "4/05/2023", status: "Active" },
        {
            id: 6,
            campaign_name: "Campaign 6",
            date: "5/05/2023",
            status: "Offline",
        },
        { id: 7, campaign_name: "Campaign 7", date: "1/05/2023", status: "Active" },
    ];

    return (
        <Box m="md">
            <CustomTable coloumnDef={colDef} records={records} />
        </Box>
    );
}
