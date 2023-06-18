import { Box } from "@mantine/core";

import TableStructure from "./tableStructure"

// Sending Records or Data to the table
export default function Pharmacy(){

    //Data
    const records = [
        { 
            id: 1,
            medicine_name: "Aspirin",
            manufacturer:"AbcD",
            category:"Tablet",
            price:"2.50",
            expiry_date: "1/05/2023",
            quanity: "150"
        },
        {
            id: 2,
            medicine_name: "Dolo 120mg",
            manufacturer:"xyz",
            category:"Syrup",
            price:"120",
            expiry_date: "2/05/2023",
            quanity: "150",
        },
        { 
            id: 3, 
            medicine_name: "Paracetamol", 
            manufacturer:"efgh", 
            category:"Tablet", 
            price:"2.50", 
            expiry_date: "3/05/2023", 
            quanity: "150" 
        },
        {
            id: 4,
            medicine_name: "Dolo 250 Suspension",
            manufacturer:"uvw",
            category:"Syrup",
            price:"120",
            expiry_date: "1/05/2023",
            quanity: "150",
        },
        { 
            id: 5, 
            medicine_name: "Acephen", 
            manufacturer:"ijkl", 
            category:"Tablet", 
            price:"2.50", 
            expiry_date: "4/05/2023", 
            quanity: "150" 
        },
        {
            id: 6,
            medicine_name: "Crocin 240 DS",
            manufacturer:"qrst",
            category:"Syrup",
            price:"120",
            expiry_date: "5/05/2023",
            quanity: "150",
        },
        { 
            id: 7, 
            medicine_name: "Ecotrin", 
            manufacturer:"mnop", 
            category:"Tablet", 
            price:"2.50", 
            expiry_date: "1/05/2023", 
            quanity: "150" 
        },
        { 
            id: 8, 
            medicine_name: "Ecotrin", 
            manufacturer:"mnop", 
            category:"Tablet", 
            price:"2.50", 
            expiry_date: "1/05/2023", 
            quanity: "150" 
        },
    ];

    return (
        <>
            <Box m="md">
                {/* Passing records to the table  */}
                <TableStructure products={records} />
            </Box>
        </>
    );
}