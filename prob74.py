import unittest


class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        # Edge case, empty matrix
        if not len(matrix):
            return False

        m = len(matrix)
        n = len(matrix[0])
        left, right = 0, m - 1
        row, col = -1, -1

        while left <= right:
            middle = left + (right - left) // 2

            if target >= matrix[middle][0] and target <= matrix[middle][n - 1]:
                row = middle
                break
            elif target < matrix[middle][0]:
                right = middle - 1
            elif target > matrix[middle][n - 1]:
                left = middle + 1

        left, right = 0, n - 1
        while left <= right:
            middle = left + (right - left) // 2
            if target == matrix[row][middle]:
                col = middle
                break
            elif target < matrix[row][middle]:
                right = middle - 1
            elif target > matrix[row][middle]:
                left = middle + 1

        return True if (row > -1 and col > -1) else False


class TestSearch2DMatrix(unittest.TestCase):
    def test_search_2d_matrix(self):
        solution = Solution()  # Initialize the Solution class

        # Test case 1: Target found in the matrix
        matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
        target = 3
        result = solution.searchMatrix(matrix, target)
        self.assertTrue(result)

        # Test case 2: Target not found in the matrix
        matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
        target = 13
        result = solution.searchMatrix(matrix, target)
        self.assertFalse(result)

        # Test case 3: Empty matrix
        matrix = []
        target = 1
        result = solution.searchMatrix(matrix, target)
        self.assertFalse(result)

        # Test case 4: Single element matrix, target exists
        matrix = [[5]]
        target = 5
        result = solution.searchMatrix(matrix, target)
        self.assertTrue(result)

        # Test case 5: Single element matrix, target does not exist
        matrix = [[5]]
        target = 3
        result = solution.searchMatrix(matrix, target)
        self.assertFalse(result)


if __name__ == "__main__":
    unittest.main()
