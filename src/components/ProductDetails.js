import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Paper, Rating } from '@mui/material';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                Loading...
            </Typography>
        );
    }

    return (
        <div style={{ width: '90vw', margin: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ color: '#5b76f9' }}>
                Product Details
            </Typography>
            <Paper elevation={0} style={{ padding: '20px' }}>
                <Grid container spacing={2} style={{ width: '100%', margin: 0 }}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            border: '1px black solid'
                        }}
                    >
                        <Paper elevation={3} style={{ margin: '10px 30px 30px 10px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{

                                    height: '70vh',
                                    objectFit: 'contain',
                                }}
                            />
                        </Paper>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        style={{
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            border: '1px black solid'
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'grey' }} gutterBottom>
                            Product ID: {product.id}
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            <Rating name="read-only" value={product.rating.rate} readOnly precision={0.1} />
                            <span style={{ fontSize: 'medium' }}> ({product.rating.count} reviews)</span>
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                            Description:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {product.description}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Price: <span style={{ color: '#5b76f9' }}>${product.price}</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default ProductDetails;
