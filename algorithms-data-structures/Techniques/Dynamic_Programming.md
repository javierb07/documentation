# Dynamic Programming

Dynamic Programming (DP) is defined as a technique that solves some particular type of problems in Polynomial Time. Dynamic Programming solutions are faster than the exponential brute method and can be easily proved correct. Dynamic programming is used to solve optimization problems. 

Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for the same inputs, we can optimize it using Dynamic Programming. The idea is to store the results of subproblems so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.

## Characteristics of Dynamic Programming Algorithm:
- Essentially, after solving a problem with a given input, save the result as a reference for future use, so you won’t have to re-solve it.
- It is a big hint for DP if the given problem can be broken up into smaller sub-problems, and these smaller subproblems can be divided into still smaller ones, and in this process, you see some overlapping subproblems. 
- Additionally, the optimal solutions to the subproblems contribute to the optimal solution of the given problem (referred to as the Optimal Substructure Property).
- The solutions to the subproblems are stored in a table or array (memoization) or in a bottom-up manner (tabulation) to avoid redundant computation.
- The solution to the problem can be constructed from the solutions to the subproblems.
- DP can be implemented using a recursive algorithm, where the solutions to subproblems are found recursively, or using an iterative algorithm, where the solutions are found by working through the subproblems in a specific order.

### DP works on following principles: 

- Characterize structure of optimal solution, i.e. build a mathematical model of the solution.
- Recursively define the value of the optimal solution. 
- Using bottom-up approach, compute the value of the optimal solution for each possible subproblems.
- Construct optimal solution for the original problem using information computed in the previous step

## Techniques to solve Dynamic Programming Problems:
1. Top-Down(Memoization):
Break down the given problem in order to begin solving it. If you see that the problem has already been solved, return the saved answer. If it hasn’t been solved, solve it and save it. This is usually easy to think of and very intuitive. This is referred to as Memoization.

2. Bottom-Up(Tabulation):
Analyze the problem and see in what order the subproblems are solved, and work your way up from the trivial subproblem to the given problem. This process ensures that the subproblems are solved before the main problem. This is referred to as Tabulation.