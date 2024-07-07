#include <iostream>
#include <numeric>
#include <string>
#include <vector>
using namespace std;

struct ContainsIntegers {
  virtual int sum() = 0;
};

struct SingleValue : ContainsIntegers {
  int value{0};

  SingleValue() = default;

  explicit SingleValue(const int value)
      : value{value} {
  }

  int sum() override {
    return value;
  }
};

struct ManyValues : vector<int>, ContainsIntegers {
  void add(const int value) {
    push_back(value);
  }

  int sum() override {
    return accumulate(begin(), end(), 0);
  }
};

int sum(const vector<ContainsIntegers*> items);