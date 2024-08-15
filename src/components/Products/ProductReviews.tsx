import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { singleProductService } from "./service";
import { ProductProps } from "./types";
import { DateTime } from "../common";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: "10px"
};

const ProductReviews = ({ productId }: { productId: number }) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      const productData: ProductProps = await singleProductService({
        productId,
      });

      setProduct(productData);
      setLoading(false);
    };

    if (showReviewModal) fetchProductData();
  }, [showReviewModal]);

  return (
    <>
      <Button size="small" onClick={() => setShowReviewModal(true)}>
        View Reviews
      </Button>
      <Modal
        open={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                height: "100%", // Make sure it takes up the full height of the modal box
              }}
            >
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <>
              <Typography variant="h6" id="parent-modal-title">
                {product?.title}
              </Typography>
              <ReviewsList reviews={product?.reviews || []} />
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

const ReviewsList = ({ reviews }: { reviews: ProductProps["reviews"] }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {reviews.map((review, idx) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <>
                    <Rating readOnly value={review.rating} />
                    <Typography>{review.comment}</Typography>
                  </>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {review.reviewerName}
                    </Typography>
                    {" - "}
                    <DateTime dateTime={review.date}/>
                  </React.Fragment>
                }
              />
            </ListItem>
            {idx < reviews.length - 1 && <Divider component="li" />}
          </>
        );
      })}
    </List>
  );
};

export default ProductReviews;
