import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';

interface NavLinkProps {
  children: ReactNode;
}

const NavLink = ({ children }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.700',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function SimpleNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={'black'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box color={'white'} fontWeight="bold" fontSize="xl">Logo</Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            color={'white'}>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Contact</NavLink>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          {/* Add any other elements like buttons here */}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Contact</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
