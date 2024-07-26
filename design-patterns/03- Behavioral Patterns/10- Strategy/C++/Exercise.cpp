/*
Consider the quadratic equation and its canonical solution:

The part b^2-4*a*c is called the discriminant. Suppose we want to provide an API with two different
strategies for calculating the discriminant:

In OrdinaryDiscriminantStrategy , If the discriminant is negative, we return it as-is. This is OK,
since our main API returns std::complex  numbers anyway.
In RealDiscriminantStrategy , if the discriminant is negative, the return value is NaN
not a number). NaN propagates throughout the calculation, so the equation solver gives two NaN
values.
Please implement both of these strategies as well as the equation solver itself. With regards to
plus-minus in the formula, please return the + result as the first element and - as the second.
*/

#include <complex>
#include <iostream>
#include <tuple>
#include <vector>
using namespace std;

struct DiscriminantStrategy {
  virtual double calculate_discriminant(double a, double b, double c) = 0;
};

struct OrdinaryDiscriminantStrategy : DiscriminantStrategy {
  double calculate_discriminant(double a, double b, double c) override {
    return b * b - 4 * a * c;
  }
};

struct RealDiscriminantStrategy : DiscriminantStrategy {
  double calculate_discriminant(double a, double b, double c) override {
    double result = b * b - 4 * a * c;
    return result >= 0 ? result : numeric_limits<double>::quiet_NaN();
  }
};

class QuadraticEquationSolver {
  DiscriminantStrategy& strategy;

 public:
  QuadraticEquationSolver(DiscriminantStrategy& strategy) : strategy(strategy) {}

  tuple<complex<double>, complex<double>> solve(double a, double b, double c) {
    complex<double> disc{strategy.calculate_discriminant(a, b, c), 0};
    auto root_disc = sqrt(disc);
    return {
        (-b + root_disc) / (2 * a),
        (-b - root_disc) / (2 * a)};
  };
};