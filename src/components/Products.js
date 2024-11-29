import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Typography,
    Container,
    Paper,
    TablePagination,
} from '@mui/material';

const Products = ({ products }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ width: '100%', margin: 'auto', pb: 2, color: '#5b76f9' }}>
                Products
            </Typography>

            <Paper elevation={3} style={{ padding: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Id</strong></TableCell>
                            <TableCell><strong>Title</strong></TableCell>
                            <TableCell><strong>Price</strong></TableCell>
                            <TableCell><strong>Category</strong></TableCell>
                            <TableCell><strong>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>
                                    <Link to={`/productDetails/${product.id}`} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="primary" size="small">
                                            SHOW
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Container>
    );
}

export default Products;
