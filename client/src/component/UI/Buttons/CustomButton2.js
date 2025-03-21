import { Button } from "@mui/material";

const CustomButton2 = (props) => { 
    return (
        <Button
              type={ props.type}
              onClick={props.onClick}
              sx={{
              margin: "0 1%",
              backgroundColor: 'rgb(202, 71, 101)',
              color: 'white',
              letterSpacing: '3px',
              padding: '0.7rem',
              border: '2px solid white',
              borderRadius: '15px',
              boxShadow: "2px 3px 10px #888", 
              "&:hover": {
                backgroundColor: 'rgb(202, 71, 101)',
                transform: "scale(1.05)"
              },
              ...props.sx
            }}>{ props.children}
        </Button>
    );
};



export default CustomButton2;