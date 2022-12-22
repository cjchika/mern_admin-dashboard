import React, { useState } from "react";
import Header from "../../components/Header";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../../state/api";

const Transactions = () => {
  const theme = useTheme();

  // Values to be sent to the backend

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);

  const { data, isLoading } = useGetTransactionsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  console.log("🚀 data", data);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subTitle="List of transactions." />
    </Box>
  );
};

export default Transactions;
