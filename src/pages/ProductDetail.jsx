import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone.", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$799", description: "A powerful laptop.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones.", image: "https://via.placeholder.com/150" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <VStack p={4}>
        <Text fontWeight="bold" fontSize="2xl">{product.name}</Text>
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Button as={Link} to="/cart" colorScheme="teal">
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;