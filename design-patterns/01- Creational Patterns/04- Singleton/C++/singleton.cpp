// Singleton Logger class that will be responsible for logging different actions.
// We have declared a static instance which prevents re-initialization of the variable. 
// The getInstance() method is used to access the static instance. This way we ensure that only one instance of the class is created.
// This is just a simple example. Production code should include a destructor to release resources, provide thread safety, etc.

#include <iostream>
using namespace std;

class Logger {
  private:
    static Logger* instance;
    // Private constructor so it can not be called
    Logger(){};
  public:
    // Static access method
    static Logger* getInstance() {
      if (instance == NULL) {
        instance = new Logger();
      }
      return instance;
    }
    void log(string str){
      cout << "Log: " << str << endl;
    }
};

// Instance initialized on demand
Logger* Logger::instance = NULL;

int main() {
    
    Logger* L = Logger::getInstance();
    
    L->log("Login");
    L->log("Like");
    L->log("Comment");
    L->log("Logout");
    
    return 0;
}