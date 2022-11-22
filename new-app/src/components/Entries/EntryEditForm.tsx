import React, { SetStateAction, useState } from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import Form from "react-bootstrap/Form";
import { Entry } from "../../types/types";

interface Props {
  editableEntry: Entry;
  setIsEntryEditViewVisible: React.Dispatch<SetStateAction<boolean>>;
}

export const EntryEditForm: React.FC<Props> = ({
  editableEntry,
  setIsEntryEditViewVisible,
}) => {
  let [editedTitle, setEditedTitle] = useState("");
  let [editedText, setEditedText] = useState("");

  return (
    <>
      <Form className="screen-center position-fixed w-25 bg-dark bg-gradient rounded">
        <Button
          className="position-absolute top-0 end-0"
          onClick={() => {
            setIsEntryEditViewVisible(false);
          }}
        >
          <CloseIcon />
        </Button>
        <Form.Group>
          <Form.Label className="text-white">
            Edit title: {editableEntry.title}
          </Form.Label>
          <Form.Control
            value={editedTitle}
            onChange={(event) => {
              setEditedTitle(event.target.value);
            }}
            className="bg-secondary"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-white">Edit text</Form.Label>
          <textarea
            value={editedText}
            onChange={(event) => {
              setEditedText(event.target.value);
            }}
            className="form-control bg-secondary"
          />
        </Form.Group>
        <Button disabled={!editedText && !editedTitle}>
          Save changes
          <SaveIcon fontSize="small" />
        </Button>
      </Form>
    </>
  );
};
