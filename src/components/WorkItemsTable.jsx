import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@mui/material";


const WorkItemsTable = (props) => {
    return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
            <TableRow>
                {props.taskData.map((task)=>(<TableCell>{task}</TableCell>))}
            </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default WorkItemsTable;