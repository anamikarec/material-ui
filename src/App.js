import "./styles.css";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
export default function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Text</Button>
      <Button>Text</Button>
      <Button variant="outlined">Text</Button>
      <Button startIcon={<UploadIcon />} size="large" variant="contained">
        Text
      </Button>
    </div>
  );
}
