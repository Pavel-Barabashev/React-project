import React, { SetStateAction } from "react";
import { Button } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

interface Props {
  setIsYesNoFormVisible: React.Dispatch<SetStateAction<boolean>>;
  handleYes: () => void;
}

export const YesNoForm: React.FC<Props> = ({
  setIsYesNoFormVisible,
  handleYes,
}) => {
  return (
    <>
      <div className="yes-no-form rounded bg-warning p-3 container">
        <div className="row">
          <h2 className="col">
            <WarningIcon fontSize="large" /> Are you sure? You will lose this
            entry
            <WarningIcon fontSize="large" />
          </h2>
        </div>
        <div className="row">
          {" "}
          <Button
            className="col"
            variant="contained"
            color="primary"
            onClick={() => {
              handleYes();
              setIsYesNoFormVisible(false);
            }}
          >
            Yes
          </Button>
          <Button
            className="col"
            variant="contained"
            color="primary"
            onClick={() => {
              setIsYesNoFormVisible(false);
            }}
          >
            No
          </Button>
        </div>
      </div>
    </>
  );
};
