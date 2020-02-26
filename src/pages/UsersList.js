import React, { useState } from "react";
import MaterialTable from "material-table";
import UserDialog from "../components/UserDialog";

const users = [
  {
    firstName: "Łukasz",
    lastName: "Karbowniczek",
    email: "lukasz.karbowniczek@eo.pl"
  },
  {
    firstName: "Piotr",
    lastName: "Karbowniczek",
    email: "piotr.karbowniczek@eo.pl"
  },
  { firstName: "Marcin", lastName: "Kuszaj", email: "marcin.kuszaj@eo.pl" },
  { firstName: "Marek", lastName: "Żak", email: "marek.zak@eo.pl" },
  { firstName: "Paweł", lastName: "Szczesiak", email: "pawel.szczesiak@eo.pl" },
  { firstName: "Jacek", lastName: "Gawron", email: "jacek.gawron@eo.pl" },
  { firstName: "Rafał", lastName: "Borek", email: "rafal.borek@eo.pl" },
  {
    firstName: "Kamil",
    lastName: "Białkowski",
    email: "kamil.bialkowski@eo.pl"
  }
];

const Users = props => {
  const { handleUserDialog, userDetails } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = rowData => {
    handleUserDialog(rowData);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MaterialTable
        title="Lista pracowników"
        columns={[
          { title: "Imię", field: "firstName" },
          { title: "Nazwisko", field: "lastName" },
          { title: "E-mail", field: "email" }
        ]}
        data={users}
        actions={[
          {
            icon: "save_alt",
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.firstName)
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
        onRowClick={(event, rowData) => handleClickOpen(rowData)}
      />
      <UserDialog
        userDetails={userDetails}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Users;
