/*
Implement the Account::process()  function to process different account commands.
The rules are obvious:

success  indicates whether the operation was successful
You can only withdraw money if you have enough in your account
*/

#include <iostream>
using namespace std;
struct Command {
  enum Action { deposit,
                withdraw } action;
  int amount{0};
  bool success{false};
};

struct Account {
  int balance{0};

  void process(Command& cmd) {
    switch (cmd.action) {
      case Command::deposit:
        balance += cmd.amount;
        cmd.success = true;
        break;
      case Command::withdraw:
        cmd.success = (balance >= cmd.amount);
        if (cmd.success) balance -= cmd.amount;
        break;
    }
  }
};

int main() {
  Account a;
  Command command{Command::deposit, 100};
  a.process(command);
  std::cout << std::boolalpha;

  cout << "Command status: " << command.success << endl;
  cout << "Balance is: " << a.balance << endl;

  command = Command{Command::withdraw, 50};
  a.process(command);

  cout << "Command status: " << command.success << endl;
  cout << "Balance is: " << a.balance << endl;

  command = Command{Command::withdraw, 150};
  a.process(command);

  cout << "Command status: " << command.success << endl;
  cout << "Balance is: " << a.balance << endl;
}