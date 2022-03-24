import "./App.css";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function App() {
  const handleAddItens = () => {
    let el = document.getElementById("items");
    console.log(el.value);
    if (el.value === "") {
      document.getElementById("error").style.display = "-webkit-inline-box";
    } else {
      document.getElementById("error").style.display = "none";
    }
  };

  return (
    <>
      <div className="flex-box container-box">
        <Alert severity="error" className="error" id="error">
          Informe um item para adicionar!
        </Alert>
        <div className="content-box">
          <h3
            style={{
              position: "absolute",
              left: "50%",
              paddingTop: "15px",
              transform: "translate(-50%, -50%)",
            }}
          >
            To-Do
          </h3>

          <div className="itens-box">
            <TextField
              id="items"
              className="textList"
              label="Standard"
              variant="standard"
            />
            <span onClick={handleAddItens}>
              <AddCircleIcon className="icon" />
            </span>

            <br></br>
            <br></br>
            <div className="itens-list"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
