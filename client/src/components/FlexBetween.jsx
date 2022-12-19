const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const FlexBetweeen = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetweeen;
