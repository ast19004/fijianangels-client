import { Box } from "@mui/material";
import HomecareRequestForm from "../../component/UI/Forms/HomecareRequestForm";
import styles from "./HomecareRequest.module.css";

const HomecareRequest = (props) => {
    return (
        <main className={styles.main}>
            <Box className={ styles.image} />
            <HomecareRequestForm />
        </main>
    );
};
 
export default HomecareRequest;