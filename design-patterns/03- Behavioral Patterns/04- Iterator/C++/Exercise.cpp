/*
Given the following definition of a Node<T>, please implement preorder traversal that returns a
sequence of Ts. I have greatly simplified the problem by adding an accumulator argument into the
preorder_traversal()  function.
*/
#include <iostream>
#include <sstream>
#include <vector>
using namespace std;

template <typename T>
struct Node {
  T value;
  Node *left{nullptr}, *right{nullptr}, *parent{nullptr};

  Node(T value) : value(value) {}

  Node(T value, Node<T> *left, Node<T> *right) : value(value), left(left), right(right) {
    left->parent = right->parent = this;
  }

  void preorder_traversal_impl(Node<T> *current, vector<Node<T> *> &result) {
    result.push_back(current);
    if (current->left) {
      preorder_traversal_impl(current->left, result);
    }
    if (current->right) {
      preorder_traversal_impl(current->right, result);
    }
  }

  // traverse the node and its children preorder
  // and put all the results into `result`
  void preorder_traversal(vector<Node<T> *> &result) {
    preorder_traversal_impl(this, result);
  }
};

int main() {
  Node<char> c{'c'};
  Node<char> d{'d'};
  Node<char> e{'e'};
  Node<char> b{'b', &c, &d};
  Node<char> a{'a', &b, &e};

  vector<Node<char> *> result;
  a.preorder_traversal(result);

  ostringstream oss;
  for (auto n : result)
    oss << n->value;
  cout << oss.str();
}