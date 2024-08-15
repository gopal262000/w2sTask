import React, { useEffect, useState } from "react";
// import { productsService } from "./service";
import { ProductProps, ProductsProps } from "./types";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import ProductReviews from "./ProductReviews";
import { productsService } from "./service";

const Products = () => {
  const [productsData, setProducts] = useState<ProductsProps>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  });
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({ limit: 10, skip: 0 });

  const { products, total } = productsData;

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const productsData: ProductsProps = await productsService({
        params: filter,
      });

      setProducts(productsData);
      setLoading(false);
    };

    fetchProducts();
  }, [filter]);

  const handleChangePage = (event: React.MouseEvent | null, page: number) => {
    setFilter({ ...filter, skip: page });
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilter({ limit: +event.target.value, skip: 0 });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="Products Table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && (
            <TableRow sx={{ height: "79vh" }}>
              <TableCell colSpan={6} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}
          {!loading &&
            products.map((product: ProductProps) => (
              <TableRow
                key={product.id} // Ensure that `product.id` is unique.
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell width={400}>{product.description}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Rating name="read-only" value={product.rating} readOnly />
                </TableCell>
                <TableCell width={150} align="left">
                  <ProductReviews productId={product.id}/>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {!loading && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          page={filter.skip}
          rowsPerPage={filter.limit}
          count={total}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </TableContainer>
  );
};

export default Products;
