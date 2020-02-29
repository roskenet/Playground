#include <iostream>

unsigned int countBits(unsigned long long n){
	std::cout << "Hier bin ich: " << 8*sizeof(int) << " Bits für int";
	return 0;
}

unsigned int doSomething(char x) {
	auto y = 42ul;

	return 0;
}

int main(int argc, char **argv) {
	std::cout << "Hello World!";
	countBits(42);
	return 0;
}
