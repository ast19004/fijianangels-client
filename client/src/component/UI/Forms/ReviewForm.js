import { useState } from "react";
import FullName from "../InputGroups/FullName";
import FormTextareaInput from "../Inputs/FormTextareaInput";
import { getTodaysDate } from "../../../util/Date";
import { updateInput } from "../../../util/formdata";
import { validateName } from "../../../util/validation";

const ReviewForm = (props) => {
    const currentDate = getTodaysDate();
    
    const [fullName, setFullName] = useState({
        first_name: "",
        last_name: "",
    });
    const [review, setReview] = useState("");
    
      const [nameError, setNameError] = useState({
        first_name: "",
        last_name: "",
      });
      const [reviewError, setReviewError] = useState("");
    
      const handleNameInputChange = (dataName, data) => {
        updateInput(dataName, data, setFullName);
      };
    const handleReviewInputChange = (e) => {
        setReview(e.target.value)
    };
    
      const handleNameInputBlur = (e) => {
        //validate data on blur
        validateName(e.target.value, e.target.name, setNameError);
      };
    
    return (
        <form>
            <FullName
                sx={{
                    display: "flex",
                    alignItems: "space-between",
                    gap: '1rem'
                }}
                fullName={fullName}
                onChange={() => { }}
                onBlur={() => { }}
                helperText={nameError}
                resetStyles/>
            <FormTextareaInput
                id="review"
                label="Share your review:"
                placeholder="My experience with Fijian Angels Homecare..."
                name="review"
                value={review}
                onChange={() => { }}
            />
        </form>
    );
};

export default ReviewForm;