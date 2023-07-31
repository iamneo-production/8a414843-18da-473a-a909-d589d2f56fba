import { DataTable, DataTableColumn } from "mantine-datatable"
import { useState } from "react";
import { Stack } from "@mantine/core";



export default function CustomTable(props) {
    // const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const { coloumnDef, records, fetching, } = props
    return (
        
        <DataTable
            withBorder
            shadow="md"
            // withColumnBorders
            highlightOnHover
            borderRadius='md'
            striped
            horizontalSpacing="xs"
            verticalSpacing="xs"
            // fontSize="xs"
            verticalAlignment="top"
            fetching={fetching}
            loaderVariant="bars"
            height={500}
            // minHeight="100vh"
            // height={window.innerHeight - 230}
            columns={coloumnDef}
            records={records}
        // emptyState={<Stack align="center" spacing="xs">
        //     <NoData />
        // </Stack>}
        // selectedRecords={selectedRecords}
        // onSelectedRecordsChange={setSelectedRecords}
        />
    )
}