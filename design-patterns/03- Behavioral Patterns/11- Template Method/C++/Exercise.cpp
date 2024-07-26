/*
Imagine a typical collectible card game which has cards representing creatures. Each creature has
two values: Attack and Health. Creatures can fight each other, dealing their Attack damage,
thereby reducing their opponent's health.

The class CardGame implements the logic for two creatures fighting one another. However, the exact
mechanics of how damage is dealt is different:

TemporaryCardDamage : In some games (e.g., Magic: the Gathering), unless the creature has been
killed, its health returns to the original value at the end of combat.
PermanentCardDamage : In other games (e.g., Hearthstone), health damage persists.
You are asked to implement classes TemporaryCardDamageGame  and PermanentCardDamageGame
that would allow us to simulate combat between creatures.

Some examples:

With temporary damage, creatures 1/2 and 1/3 can never kill one another. With permanent damage,
second creature will win after 2 rounds of combat.
With either temporary or permanent damage, two 2/2 creatures kill one another.
*/

#include <complex>
#include <iostream>
#include <tuple>
#include <vector>
using namespace std;

struct Creature {
  int attack, health;

  Creature(int attack, int health) : attack(attack), health(health) {}
};

struct CardGame {
  vector<Creature> creatures;

  CardGame(const vector<Creature> &creatures) : creatures(creatures) {}

  // return -1 if there is no clear winner
  int combat(int creature1, int creature2) {
    Creature &first = creatures[creature1];
    Creature &second = creatures[creature2];
    hit(first, second);
    hit(second, first);
    bool first_alive = first.health > 0;
    bool second_alive = second.health > 0;
    if (first_alive == second_alive) return -1;
    return first_alive ? creature1 : creature2;
  }

  virtual void hit(Creature &attacker, Creature &other) = 0;
};

struct TemporaryCardDamageGame : CardGame {
  TemporaryCardDamageGame(const vector<Creature> &creatures) : CardGame(creatures) {}

  void hit(Creature &attacker, Creature &other) override {
    auto old_health = other.health;
    other.health -= attacker.attack;
    if (other.health > 0) other.health = old_health;
  }
};

struct PermanentCardDamageGame : CardGame {
  PermanentCardDamageGame(const vector<Creature> &creatures) : CardGame(creatures) {}

  void hit(Creature &attacker, Creature &other) override {
    other.health -= attacker.attack;
  }
};