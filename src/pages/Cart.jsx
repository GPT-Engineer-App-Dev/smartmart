import { Box, Text, VStack, Button } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Shopping Cart</Text>
        <Text>Your cart is currently empty.</Text>
        <Button colorScheme="teal">Proceed to Checkout</Button>
      </VStack>
    </Box>
  );
};

export default Cart;