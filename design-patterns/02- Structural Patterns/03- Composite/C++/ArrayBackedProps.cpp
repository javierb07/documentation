// #include "Headers.hpp"

// class Creature
//{
//   int strength, agility, intelligence;
//   // new property
//   int charisma;
// public:
//   int get_strength() const
//   {
//     return strength;
//   }
//
//   void set_strength(int strength)
//   {
//     Creature::strength=strength;
//   }
//
//   int get_agility() const
//   {
//     return agility;
//   }
//
//   void set_agility(int agility)
//   {
//     Creature::agility=agility;
//   }
//
//   int get_intelligence() const
//   {
//     return intelligence;
//   }
//
//   void set_intelligence(int intelligence)
//   {
//     Creature::intelligence=intelligence;
//   }
//
//   // sum, average, max.
//
//   double sum() const {
//     return strength + agility + intelligence;
//   }
//
//   double average() const {
//     return sum() / 3.0;
//   }
//
//   int max() const {
//     return ::max(::max(strength, agility), intelligence);
//   }
// };

#include <iostream>
class Creature {
  enum Abilities { str,
                   agl,
                   intl,
                   count };
  int abilities[count]{};

 public:
  int get_strength() const { return abilities[str]; }
  void set_strength(int value) { abilities[str] = value; }

  int get_agility() const { return abilities[agl]; }
  void set_agility(int value) { abilities[agl] = value; }

  int get_intelligence() const { return abilities[intl]; }
  void set_intelligence(int value) { abilities[intl] = value; }

  int sum() const {
    int acc{};
    for (size_t i = 0; i < count; i++) {
      acc += abilities[i];
    }
    return acc;
  }

  double average() const {
    return sum() / (double)count;
  }

  int max() const {
    int max_element{};
    for (size_t i = 0; i < count; i++) {
      if (abilities[i] > max_element) {
        max_element = abilities[i];
      }
    }
    return max_element;
  }
};

int main(int ac, char* av[]) {
  Creature orc;
  orc.set_strength(16);
  orc.set_agility(11);
  orc.set_intelligence(9);

  std::cout << "The orc has an average stat of "
            << orc.average()
            << " and a maximum stat of "
            << orc.max()
            << "\n";

  return 0;
}