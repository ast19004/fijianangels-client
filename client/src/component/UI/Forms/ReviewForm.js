import { useState } from "react";
import FullName from "../InputGroups/FullName";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import { validateIsEmpty } from "../../../util/validation";
import { Box } from "@mui/material";
import CustomButton2 from "../Buttons/CustomButton2";

const ReviewForm = (props) => {
    
  const [fullName, setFullName] = useState({
          first_name: "",
          last_name: "",
          });
    const [review, setReview] = useState("");
    const [reviewError, setReviewError] = useState("");
  
  const anonymous = {
    first_name: "Anonymous",
    last_name: "Reviewer",
  };
  
  const handleNameInputChange = (dataName, data) => {
    setFullName(data);
  }
  const handleReviewInputChange = (dataName, data) => {
    setReview(data);
    };

  const handleReviewValidation = (event) => {
    const errors = validateIsEmpty(
      event.target.value,
      "Please tell us about your experience before submitting"
    );
    setReviewError(errors);
  };

  const handleSubmit = async (event) => { 
    event.preventDefault();
    if (reviewError) { return; }
    const submitedName = fullName.first_name || fullName.last_name ?
      (fullName.first_name + " " + fullName.last_name).trim() :
      "Anonymous Reviewer";
            try {
            const response = await fetch("http://localhost:5000/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fullName: submitedName,
                review: review.trim()
              }),
            });

            const result = await response.json();

              if (response.ok) {
                //Reset form
                setFullName({
                  first_name: "",
                  last_name: "",
                  });
                setReview("")
                console.log(result.review);
            }
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };
    
  return (
    <Box component="form" method="POST" sx={{ ...props.sx }} onSubmit={ handleSubmit}>
      <FullName
        value={fullName}
        sx={{
            display: "flex",
            alignItems: "space-between",
            gap: '1rem'
        }}
        placeholder={anonymous}
        fullName={fullName}
        onChange={handleNameInputChange}
        onBlur={() => {}}
        resetStyles
        required={false}
      />
      <FormTextareaInput
        id="review"
        label="Share your review:"
        placeholder="My experience with Fijian Angels Homecare..."
        helperText={reviewError}
        name="review"
        value={review}
        onChange={handleReviewInputChange}
        onBlur={handleReviewValidation}
        inputProps={props.required ? { required: props.required } : {}}
        required={true}
      />
      <CustomButton2
        type="submit"
        sx={{
          margin: reviewError ? '-2.5rem 0 2rem 0' : '-1rem 0 2rem 0'
        }}><b>Submit Review</b></CustomButton2>
        </Box>
    );
};

export default ReviewForm;