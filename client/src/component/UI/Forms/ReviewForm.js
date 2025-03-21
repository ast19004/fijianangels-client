import { useState } from "react";
import FullName from "../InputGroups/FullName";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import { getTodaysDate } from "../../../util/Date";
import { updateInput } from "../../../util/formdata";
import { validateIsEmpty } from "../../../util/validation";
import { Box } from "@mui/material";
import CustomButton2 from "../Buttons/CustomButton2";

const ReviewForm = (props) => {
    const currentDate = getTodaysDate();
    
    const [fullName, setFullName] = useState("");
    const [review, setReview] = useState("");
    const [reviewError, setReviewError] = useState("");
    
  const handleNameInputChange = (dataName, data) => {
    updateInput(dataName, data, setFullName);
  };
  const handleReviewInputChange = (dataName, data) => {
    setReview(data);
    };

  const handleReviewValidation = (event) => {
    const errors = validateIsEmpty(
      event.target.value,
      "Review needed, tell us about your experience"
    );
    setReviewError(errors);
  };
    
  return (
      <Box component="form" sx={{ ...props.sx }}>
            <FullName
                sx={{
                    display: "flex",
                    alignItems: "space-between",
                    gap: '1rem'
        }}
                placeholder={
                  {
                  first_name: "Anonymous",
                  last_name: "Reviewer",
                  }
                }
                fullName={fullName}
                onChange={handleNameInputChange}
                onBlur={() => {}}
                resetStyles/>
            <FormTextareaInput
              id="review"
              label="Share your review:"
              placeholder="My experience with Fijian Angels Homecare..."
              name="review"
              value={review}
              onChange={handleReviewInputChange}
              onBlur={handleReviewValidation}
      />
      <CustomButton2
        sx={{
          margin: '0 0 2rem 0'
        }}><b>Submit Review</b></CustomButton2>
        </Box>
    );
};

export default ReviewForm;