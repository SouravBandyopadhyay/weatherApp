import { Flex, Text, Link, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Flex align="center" justify="space-between" h="100px" bg="gray.200" px="4">
      <Text fontWeight="bold" fontSize={["xs","sm","md"]}>
        © 2023 Weather App. All rights reserved.
      </Text>
      <Text fontWeight="bold" fontSize={["xs","sm","md"]}>
        Made with ❤️ by Sourav Bandyopadhyay
      </Text>
      <Link href="https://github.com/SouravBandyopadhyay/weatherApp" isExternal>
        <Button leftIcon={<FaGithub />} variant="solid">
          GitHub
        </Button>
      </Link>
    </Flex>
  );
}

export default Footer;
