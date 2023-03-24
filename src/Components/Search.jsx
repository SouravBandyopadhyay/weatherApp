import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input
  } from "@chakra-ui/react";
  import React from "react";
  const Search = (props) => (
    <FormControl isRequired textAlign="justify" width="50%" margin="auto">
      <FormLabel
        p={2}
        textAlign="left"
        fontSize="xl"
        color="cyan.700"
        lineHeight={5}
        letterSpacing="tighter"
        opacity={0.82}
      >
        Search for City
      </FormLabel>
      <Input
        fontSize="md"
        backgroundColor="twitter.100"
        opacity={0.82}
        boxShadow="md"
        onChange={props.onChange}
      />
      <FormErrorMessage fontSize="sm" fontWeight="bold">
        Type Valid City Name
      </FormErrorMessage>
      <Button
        variant="solid"
        size="md"
        colorScheme="linkedin"
        p={4}
        mt={5}
        mb={2}
        onClick={props.onClick}
      >
        Search
      </Button>
    </FormControl>
  );
  
  export default Search;
  