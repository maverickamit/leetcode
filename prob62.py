class Solution:

    def uniquePaths(self, m: int, n: int) -> int:
        memo={}
        start =(0,0)
        goal = (m - 1,n - 1)
        ans = self.explore(start,goal,memo)
        return ans

    def explore(self,start,goal,memo):
        (x,y) = start
        (m,n) = goal
        if x>m or y>n:
            return 0
        #base case
        if start==goal:
            return 1
        if start in memo:
            return memo[start]
        val = self.explore((x,y+1),goal,memo) +self.explore((x+1,y),goal,memo)
        memo[(x,y)]= val
        return val



def test_unique_paths():
    solution = Solution()

    # Test cases
    assert solution.uniquePaths(3, 7) == 28, "Test case 1 failed"
    assert solution.uniquePaths(3, 2) == 3, "Test case 2 failed"
    assert solution.uniquePaths(7, 3) == 28, "Test case 3 failed"
    assert solution.uniquePaths(3, 3) == 6, "Test case 4 failed"
    assert solution.uniquePaths(1, 1) == 1, "Test case 5 failed"
    assert solution.uniquePaths(10, 10) == 48620, "Test case 6 failed"
    assert solution.uniquePaths(23, 12) == 193536720, "Test case 7 failed"

    print("All test cases passed!")

# Call the test function
test_unique_paths()



