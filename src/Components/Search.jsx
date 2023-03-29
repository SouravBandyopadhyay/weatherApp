import { Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import React from "react";
const Search = (props) => (
  <FormControl
    isRequired
    textAlign="justify"
    // width="50%"
    margin="auto"
    display="flex"
    justifyContent="center"
    alignItems="center"
    gap={2}
    p={5}
    // border="2px solid red"
  >
    <Input
      fontSize="md"
      backgroundColor="twitter.100"
      opacity={0.82}
      boxShadow="md"
      onChange={props.onChange}
      placeholder="Search for City"
    />
    <FormErrorMessage fontSize="sm" fontWeight="bold">
      Type Valid City Name
    </FormErrorMessage>
    <Button
      variant="solid"
      size="md"
      colorScheme="linkedin"
      onClick={props.onClick}
    >
      Search
    </Button>
  </FormControl>
);

export default Search;
