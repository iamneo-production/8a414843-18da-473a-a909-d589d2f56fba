import { Box } from "@mantine/core";


import InventoryTable from "./inventorytable";

// Sending Records or Data to the table
export default function Inventory(){

    //Data
    const records = [
        { 
            id: 1,
            name: "Aspirin",
            quanity: "150", 
            category:"Tablet",
            price:"2.50",
            supplier:"AbcD"
            
        },
        {
            id: 2,
            name: "Dolo 120mg",
            quanity: "150",
            category:"Syrup",
            price:"120",
            supplier:"xyz"
            
        },
        { 
            id: 3, 
            name: "Paracetamol", 
            quanity: "150",
            category:"Tablet", 
            price:"2.50", 
            supplier:"efgh"
           
        },
        {
            id: 4,
            name: "Dolo 250 Suspension",
            quanity: "150",
            category:"Syrup",
            price:"120",
            supplier:"uvw"
           
        },
        { 
            id: 5, 
            name: "Acephen", 
            quanity: "150",
            category:"Tablet", 
            price:"2.50", 
            supplier:"qrst"
           
            
        },
        {
            id: 6,
            name: "Crocin 240 DS",
            quanity: "150", 
            category:"Syrup",
            price:"120",
            supplier:"qrst" 
        },
        
    ];

    return (
        <>
            <Box m="md">
                {/* Passing records to the table  */}
                <InventoryTable products={records} />
            </Box>
        </>
    );
}