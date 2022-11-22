import React, { useEffect, useState } from "react";
import { Entry, User } from "../../types/types";
import { Navigate } from "react-router-dom";
import { getFromLS } from "../../reusable_components&helpers/Helpers";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { MainNavbar } from "../../reusable_components&helpers/Navbars";
import { EntryEditForm } from "./EntryEditForm";
interface Props {
  user: User | undefined;
}

export const Entries: React.FC<Props> = ({ user }) => {
  let [entries, setEntries] = useState(Array<Entry>);
  let [isEntryEditViewVisible, setIsEntryEditViewVisible] = useState(false);
  let [editableEntry, setEditableEntry] = useState<Entry>(Object);
  useEffect(() => {
    async function wrapper() {
      let stringEntries = getFromLS("entries");
      if (stringEntries) {
        setEntries(JSON.parse(stringEntries));
        console.log(entries);
      } else {
        console.log(entries);
      }
    }
    wrapper();
  }, []);

  return user ? (
    <>
      <MainNavbar />
      <div id="card-container">
        {entries.map((entry) => (
          <div className="card bg-dark text-light">
            <div className="card-body">
              <h5 className="card-title">{entry.title}</h5>
              <p className="card-text">{entry.text}</p>
              <Button
                color="info"
                onClick={() => {
                  setEditableEntry(entry);
                  setIsEntryEditViewVisible(true);
                }}
              >
                Edit
                <EditIcon fontSize="small" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {isEntryEditViewVisible && (
        <EntryEditForm
          editableEntry={editableEntry}
          setIsEntryEditViewVisible={setIsEntryEditViewVisible}
        />
      )}
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};
