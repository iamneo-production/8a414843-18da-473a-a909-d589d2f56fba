import {
    Box,
    Button,
    Grid,
    Group,
    TextInput,
    Text,
    Paper,
    Select,
    Image,
    createStyles,
    useMantineTheme,
    ActionIcon,
    Menu,
    Title,
    Loader,
} from "@mantine/core";
import React from "react";
import CustomTable from "../../../components/customTable";

import { Modal } from '@mantine/core';
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { Card } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable"
import { useState } from "react";
import { useEffect } from "react";
import {
    IconDotsVertical,
    IconEdit,
    IconEye,
    IconSearch,
    IconTrash,
} from "@tabler/icons-react";


//import CustomTable from ".";

export default function Inventory() {
    const [opened, { open, close }] = useDisclosure(false);
    const form = useForm({
        initialValues: {
            ProductName: '',
            ItemNumber: '',
            Usage: '',
            Manufacturer: '',
            Category: '',
            Price: '',
            Quantity: '',
            ExpiryDate: '',
        },

    });
    // const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const colDef = [
        {
            accessor: "productname",
            title: "Product Name",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.ProductName}</Text>
                </Group>
            ),
        },
        {
            accessor: "Item No.",
            title: "Item Number",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text>{data?.ItemNumber}</Text>
                </Group>
            ),
        },
        {
            accessor: "Usage",
            title: "Usage",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return (
                    <Group position="center">
                        <Text>{data?.Usage}</Text>
                    </Group>
                );
            },
        },
        {
            accessor: "Manufacturer",
            title: "Manufacturer",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return (
                    <Group position="center">
                        <Text>{data?.Manufacturer}</Text>
                    </Group>
                );
            },
        },
        {
            accessor: "Category",
            title: "Category",
            textAlignment: "center",
            render: (data) => (
                <Group position="center">
                    <Text
                        fz="12px"
                        fw={500}
                        p={5}
                    // style={{
                    //     fontWeight: "bold",
                    //     color: data?.payment === "paid" ? "#3B72FF" : "#FF3B3B",
                    //     backgroundColor:
                    //         data?.payment === "paid" ? "#E3EBFF" : "#FFE4E4",
                    //     borderRadius: "6px",
                    // }}
                    >
                        {data?.Category}
                    </Text>
                </Group>
            ),
        },
        {
            accessor: "Price",
            title: "Price (Per Piece)",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return (
                    <Group position="center">
                        <Text>{data?.Price}</Text>
                    </Group>
                );
            },
        },
        {
            accessor: "Quantity",
            title: "Quantity",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return (
                    <Group position="center">
                        <Text>{data?.Quantity}</Text>
                    </Group>
                );
            },
        },
        {
            accessor: "ExpiryDate",
            title: "Expiry Date",
            titleStyle: { color: "" },
            textAlignment: "center",
            render: (data) => {
                return (
                    <Group position="center">
                        <Text>{data?.ExpiryDate}</Text>
                    </Group>
                );
            },
        },

    ];

    const records = [
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59368',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '300',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Cofsils Naturals Cough Syrup',
            ItemNumber: 'HK59299',
            Usage: 'Cough',
            Manufacturer: 'Cipla LTD',
            Category: 'Syrup',
            Price: '200',
            Quantity: '1',
            ExpiryDate: 'Jan 2025',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '300',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '300',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '300',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '300',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '300',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '100',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Cream',
            Price: '800',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },
        {
            ProductName: 'Acetaminophen (A1 Cream)',
            ItemNumber: 'HK59299',
            Usage: 'Acne',
            Manufacturer: 'Vickmans Labratory',
            Category: 'Creams',
            Price: '700',
            Quantity: '1',
            ExpiryDate: 'Feb 2024',
        },

    ];
    const [searchValue, setSearchValue] = React.useState("");

    const filteredRecords = React.useMemo(() => {
        if (!searchValue) {
            return records;
        }

        return records.filter((record) =>
            Object.values(record)
                .join(" ")
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        );
    }, [searchValue, records]);


    return (
        // <Box m="md">
        <Paper style={{ padding: '20px', borderRadius: "20px", backgroundColor: "white" }}>
            <Text ta="center" size="xl" style={{ marginTop: "15px", fontWeight: "bold", color: "#BF94E4" }}>
                Inventory Management
            </Text>
            <Box m="md" ml="20px" mr="20px">
                {/* <Grid>
                <Grid.Col xs={2} lg={2}>
                    <Card m="md" shadow="xl" p={20} 
                     style={{fontFamily:"unset",
                     borderRadius:"15px",
                     background:"rgba(139, 127, 194, 1)",
                      color:"white",
                      textAlign:"center"}}>
                        INVENTORY MANAGEMENT
                    </Card>
                </Grid.Col>
                
            </Grid> */}
                {/* <Modal opened={opened} onClose={close} title="Add New Medicine" centered>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput mt="md" 
                placeholder="Product Name"
                {...form.getInputProps('ProductName')}
                />
                <TextInput mt="md"
                    placeholder="Item Number"
                    {...form.getInputProps('ItemNumber')}
                />
               
                <TextInput mt="md"
                    placeholder="Usage"
                    {...form.getInputProps('Usage')}
                />
                <TextInput mt="md"
                    placeholder="Manufacturer"
                    {...form.getInputProps('Manufacturer')}
                />
                <TextInput mt="md"
                    placeholder="Category"
                    {...form.getInputProps('Category')}
                />
                <TextInput mt="md"
                    placeholder="Price"
                    {...form.getInputProps('Price')}
                />
                <TextInput mt="md"
                    placeholder="Quantity"
                    {...form.getInputProps('Quantity')}
                />
                <TextInput mt="md"
                    placeholder="Expiry Date"
                    {...form.getInputProps('"Expiry Date')}
                />
                
                <Button type="submit" mt="md"style={{textDecoration:"none",
                borderColor: "rgba(139, 127, 194, 1)", 
                color: "white", position: "relative", 
                overflow: "hidden", 
                background: "rgba(139, 127, 194, 1)", cursor: "pointer",left:"38%"}}>Add
                </Button>
                </form>
            </Modal> */}
                <Box m="md" ml="10px" mr="10px">
                
                    {/* 205 line -- search box border */}
                    <TextInput
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.currentTarget.value)}
                        placeholder="Search..."
                        icon={<IconSearch color="#BF94E4" />}
                        radius="md"
                        styles={{
                            input: { color: "#BF94E4" },
                            icon: { color: "#BF94E4" },
                            
                        }}
                    />
                </Box>
                {/* <Box mt={1} ml={20} mr={20} mb={0}>   */}
                {/* 219 line -- table border */}
                 {/* <CustomTable coloumnDef={colDef} records={filteredRecords} />
        </Box> */}
                <Box mt={1} ml={10} mr={10} mb={0}> 
               
                    <DataTable height={500}
                        withBorder
                        shadow="md"
                        // withColumnBorders
                        highlightOnHover
                        borderRadius="10px"
                        striped
                        horizontalSpacing="xs"
                        verticalSpacing="xs"
                        // fontSize="xs"
                        verticalAlignment="top"
                        //fetching={fetching}
                        loaderVariant="bars"
                        minHeight="80vh"

                        // height={window.innerHeight - 230}
                        columns={colDef}
                        records={filteredRecords}


                    />
                </Box>
            </Box>
        </Paper>
    );
}
