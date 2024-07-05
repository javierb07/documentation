// Interface Segregation Principle

#include <iostream>
#include <vector>
using namespace std;

struct Document {
  Document() = default;
};

// struct IMachine
//{
//   virtual void print(Document& doc) = 0;
//   virtual void fax(Document& doc) = 0;
//   virtual void scan(Document& doc) = 0;
// };
//
// struct MFP : IMachine
//{
//   void print(Document& doc) override;
//   void fax(Document& doc) override;
//   void scan(Document& doc) override;
// };

// 1. Recompile
// 2. Client does not need this
// 3. Forcing implementors to implement too much

struct IPrinter {
  virtual void print(Document& doc) = 0;
};

struct IScanner {
  virtual void scan(Document& doc) = 0;
};

struct Printer : IPrinter {
  void print(Document& doc) override { cout << "It prints." << endl; };
};

struct Scanner : IScanner {
  void scan(Document& doc) override { cout << "It scans." << endl; };
};

struct IMachine : IPrinter, IScanner {};

struct Machine : IMachine {
  IPrinter& printer;
  IScanner& scanner;

  Machine(IPrinter& printer, IScanner& scanner)
      : printer{printer}, scanner{scanner} {}

  void print(Document& doc) override { printer.print(doc); }
  void scan(Document& doc) override { scanner.scan(doc); }
};

// IPrinter --> Printer
// everything --> Machine

int main() {
  Printer printer;
  Scanner scanner;
  Document document;
  Machine machine{printer, scanner};
  machine.print(document);
  machine.scan(document);
}