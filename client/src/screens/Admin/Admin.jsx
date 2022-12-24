import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetAdminsQuery } from "../../state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";

const Admin = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="ADMIN"
        subTitle="You have the power to make things happen."
      />
      <Box mt="40px" height="75vh">
        {" "}
      </Box>
    </Box>
  );
};

export default Admin;
