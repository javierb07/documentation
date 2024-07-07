/*
Roses can be red, blue or red and blue. Given the class interface Flower and class Rose,
build decorators RedFlower and BlueFlower that would print the following:

Rose rose;
RedFlower red_rose{rose};
RedFlower red_red_rose{red_rose};
BlueFlower blue_red_rose{red_rose};
cout << rose.str();          // "A rose"
cout << red_rose.str();      // "A rose that is red"
cout << red_red_rose.str();  // "A rose that is red"
cout << blue_red_rose.str(); // "A rose that is red and blue"
*/

#include <iostream>
#include <string>
using namespace std;

struct Flower {
  virtual string str() = 0;
};

struct Rose : Flower {
  string str() override {
    return "A rose";
  }
};

struct RedFlower : Flower {
  Flower& flower;
  RedFlower(Flower& flower) : flower{flower} {}
  string str() override {
    string message = flower.str();
    if (message.find("red") != string::npos) {
      return message;
    } else if (message.find("blue") != string::npos) {
      return message + " and red";
    } else {
      return message + " that is red";
    }
  }
};

struct BlueFlower : Flower {
  Flower& flower;
  BlueFlower(Flower& flower) : flower{flower} {}
  string str() override {
    string message = flower.str();
    if (message.find("blue") != string::npos) {
      return message;
    } else if (message.find("red") != string::npos) {
      return message + " and blue";
    } else {
      return message + " that is blue";
    }
  }
};

int main() {
  Rose rose;
  std::cout << rose.str() << std::endl;
  BlueFlower blue_rose{rose};
  std::cout << blue_rose.str() << std::endl;
  RedFlower red_rose{blue_rose};
  std::cout << red_rose.str() << std::endl;
}