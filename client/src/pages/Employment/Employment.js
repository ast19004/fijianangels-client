import { Box } from "@mui/material";
import EmploymentForm from "../../component/UI/Forms/EmploymentForm/EmploymentForm";

import styles from './Employment.module.css';

const Employment = (props) => { 
    return (
        <main className={styles.main}>
            <Box className={ styles.image} />
            <EmploymentForm />
        </main>);
};


export default Employment;