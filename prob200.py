class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        count = 0
        visited = set()
        rowLimit, colLimit = len(grid), len(grid[0])

        for rowIndex in range(rowLimit):
            for colIndex in range(colLimit):
                if self.dfs(rowIndex, colIndex, grid, visited, rowLimit, colLimit):
                    count += 1

        return count

    def dfs(self, rowIndex, colIndex, grid, visited, rowLimit, colLimit) -> bool:
        # If out of bounds or water ('0') or already visited, return
        if (
            rowIndex < 0
            or rowIndex >= rowLimit
            or colIndex < 0
            or colIndex >= colLimit
            or grid[rowIndex][colIndex] == "0"
            or (rowIndex, colIndex) in visited
        ):
            return False

        # Mark the current cell as visited
        visited.add((rowIndex, colIndex))

        # Explore all four directions
        self.dfs(rowIndex + 1, colIndex, grid, visited, rowLimit, colLimit)
        self.dfs(rowIndex - 1, colIndex, grid, visited, rowLimit, colLimit)
        self.dfs(rowIndex, colIndex + 1, grid, visited, rowLimit, colLimit)
        self.dfs(rowIndex, colIndex - 1, grid, visited, rowLimit, colLimit)

        return True
