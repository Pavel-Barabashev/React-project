import React, { SetStateAction, useState, useContext } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import Form from "react-bootstrap/Form";
import { YesNoForm } from "../../reusable_components&helpers/YesNoForm";
import { ContextProvider } from "../../reusable_components&helpers/contexts/Contexts";
import {
  getFromLS,
  writeToLS,
} from "../../reusable_components&helpers/Helpers";
import { Entry } from "../../types/types";

interface Props {
  handleChange: () => void;
}

export const EntryCreation: React.FC<Props> = ({ handleChange }) => {
  let [isLoadingVisible, setIsLoadingVisible] = useState(false);
  let [title, setTitle] = useState("");
  let [text, setText] = useState("");
  let [isYesNoFormVisible, setIsYesNoFormVisible] = useState(false);
  let { setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible } =
    useContext(ContextProvider);

  function handleYes() {
    handleChange();
  }

  function createEntry() {
    let entry = {
      title,
      text,
    };
    let stringEntries = getFromLS("entries");
    if (stringEntries) {
      let parsedEntries = JSON.parse(stringEntries) as Array<Entry>;
      parsedEntries.push(entry);
      writeToLS("entries", JSON.stringify(parsedEntries));
      setIsSuccessSnackbarVisible(true);
      handleChange();
      console.log(parsedEntries);
    } else {
      writeToLS("entries", JSON.stringify([entry]));
      handleChange();
    }
  }

  return (
    <>
      {isYesNoFormVisible ? (
        <YesNoForm
          setIsYesNoFormVisible={setIsYesNoFormVisible}
          handleYes={handleYes}
        />
      ) : null}
      <Form className="screen-center w-75 bg-dark rounded d-flex flex-column p-2 ">
        <Button
          color="warning"
          onClick={() => {
            if (!text && !title) {
              handleChange();
            } else {
              setIsYesNoFormVisible(true);
            }
          }}
        >
          <CloseIcon />
        </Button>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Title:</Form.Label>
          <Form.Control
            className="bg-secondary"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Enter title"
            type="text"
          />
        </Form.Group>
        <textarea
          rows={10}
          placeholder="Write whatever you want)"
          className="form-control bg-secondary"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <Button
          disabled={!text || !title}
          type="submit"
          onClick={(event) => {
            createEntry();
            event.preventDefault();
          }}
        >
          Save
          <SaveIcon />
        </Button>
      </Form>
    </>
  );
};
