/*
Consider the code presented below. The sum() function takes a vector of pointers to either
SingleValue or ManyValues instances and adds up all their elements together.

Please complete the implementation so that the sum() function starts to operate correctly.
This may involve giving the classes a common interface, among other things.

Here is an example of how the function might be used:

SingleValue single_value{ 1 };
ManyValues other_values;
other_values.add(2);
other_values.add(3);
sum({ &single_value, &other_values }); // returns 6
*/

#include "Exercise.h"
using namespace std;

int sum(const vector<ContainsIntegers*> items) {
  int result{};
  for (auto item : items) {
    result += item->sum();
  }
  return result;
}

int main() {
  SingleValue single_value{11};
  ManyValues other_values;
  other_values.add(22);
  other_values.add(33);
  std::cout << single_value.sum() << std::endl;
  std::cout << other_values.sum() << std::endl;
}