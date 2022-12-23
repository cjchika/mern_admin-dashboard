import React, { useState } from "react";
import {
  Box,
  useTheme,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import Header from "../../components/Header";
// import OverviewChart from "../../components/OverviewChart";

const SalesOverview = () => {
  const [view, setView] = useState("units");
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="SALES"
        subTitle="Overview of general expenditure and profit."
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        {/* <OverviewChart view={view} /> */}
      </Box>
    </Box>
  );
};

export default SalesOverview;
