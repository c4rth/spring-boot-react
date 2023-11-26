import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    CellContext,
    createColumnHelper,
    TableMeta,
} from '@tanstack/react-table'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { ChangeEvent, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ApiPerson } from '../../../model/ApiPerson'
import { Button, TextField, Checkbox } from '@mui/material'
import { useGlobalLoading } from "../../../components/GlobalLoading";
import {apiSpringAad} from "../../../openapi";
import {AxiosResponse} from "axios";
import * as FileSaver from "file-saver";

type MetaType = TableMeta<ApiPerson> & {
    updateData: (rowIndex: number, columnId: string, value: boolean) => void
};

const CheckboxCell = ({ getValue, row, column, table }: CellContext<ApiPerson, unknown>) => {
    const initialValue = getValue() as boolean;
    const [value, setValue] = useState(initialValue)
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])
    const onChange = (checked: boolean) => {
        console.log("onChange");
        setValue(checked);
        (table.options.meta as MetaType).updateData(row.index, column.id, checked)
    }
    return (
        <Checkbox checked={value} onChange={e => onChange(e.target.checked)} />
    )
}

export const MuiTable = () => {

    const columnHelper = createColumnHelper<ApiPerson>();
    const columns = [
        columnHelper.accessor("id", { header: "#", size: 25 }),
        columnHelper.accessor("firstName", { header: "First Name", size: 100, }),
        columnHelper.accessor("lastName", { header: "Last Name", size: 100, }),
        columnHelper.accessor("age", { header: "Age", size: 50, }),
        columnHelper.accessor("address", { header: "Address", size: 150, }),
        columnHelper.accessor("email", { header: "Email", size: 150, }),
        columnHelper.accessor('admin', { header: "Admin", size: 50, cell: CheckboxCell }),
    ];

    const pageSize = 25;
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(1000);
    const [data, setData] = useState<ApiPerson[]>([]);
    const { showLoading, hideLoading } = useGlobalLoading();

    useEffect(() => {
        showLoading();
        setTimeout(() => {
            apiSpringAad.getPerson({ page: page, pageSize: pageSize})
                .then(response => response.data)
                .then(data => setData(data))
                .catch(error => console.error(error));
            hideLoading();
        }, 1500);
    }, [page]);

    const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
        setPage(value - 1);
    };

    const downloadExcel = () => {
        // Fetch the Excel file with .xls extension
        apiSpringAad.generateReport({ size: size}, {format: "blob"})
            .then((response: AxiosResponse) => {
                const filename = (response.headers['content-disposition']?.split('filename=')[1] || "report.xlxs").replaceAll("\"","");
                const blob = new Blob([response.data]);
                FileSaver.saveAs(blob, filename);
            })
            .catch((error) => {
                console.error('Error fetching Excel file:', error);
            });
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            updateData: (rowIndex: number, columnId: string, value: boolean) => {
                const numberOfAdmin = data.reduce((total, person) => (person.admin ? total + 1 : total), 0);
                console.log("number of admin: "+ numberOfAdmin);
                console.log("updateData " + rowIndex + "," + columnId + "," + value);
                const p = data.at(rowIndex);
                p!.admin = value;
                console.log("updateData " + JSON.stringify(p));
                apiSpringAad.updateUser(p!)
                    .then(response => response.data)
                    .then(data => console.log('after POST:' + JSON.stringify(data)))
                    .catch(error => console.error(error));
            },
        },
    })

    return (
        <Box maxWidth='100%' sx={{ m: 3 }}>
            <Stack alignItems='center' direction="row" spacing={1}>
                <TextField label="Report rows" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="outlined" value={size} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSize(parseInt(event.target.value))} />
                <Button onClick={downloadExcel}>Download XLSX</Button>
            </Stack>
            <Box sx={{ maxWidth: '100%' }}>
                <TableContainer id='local-table' sx={{ height: '50em', overflow: 'auto' }}>
                    <Table stickyHeader aria-label="simple table" size='small'>
                        <TableHead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map(header => {
                                        return (
                                            <TableCell key={header.id} sx={{
                                                backgroundColor: 'primary.main',
                                                color: 'primary.contrastText',
                                                fontWeight: 'bold',
                                                maxWidth: header.getSize(),
                                                width: header.getSize()
                                            }}>
                                                {header.isPlaceholder ? null : (
                                                    <div>
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                    </div>
                                                )}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table.getRowModel().rows.map(row => {
                                return (
                                    <TableRow hover key={row.id}>
                                        {row.getVisibleCells().map(cell => {
                                            return (
                                                <TableCell key={cell.id} sx={{
                                                    width: cell.column.getSize(),
                                                    maxWidth: cell.column.getSize()
                                                }}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box width='100%' position="sticky" bottom="0px" sx={{ mt: 3 }}>
                <Stack direction="row" justifyContent='space-between' alignItems='center'>
                    <Typography>Page: {page + 1}</Typography>
                    <Pagination page={page + 1} count={10} showFirstButton showLastButton color='primary' boundaryCount={2} onChange={handlePageChange} />
                </Stack>
            </Box>
        </Box >
    );

}